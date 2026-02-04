//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////

const fs = require("node:fs");
const path = require('node:path');
const readline = require("node:readline");

console.log("\x1b[36mPCIT Project website generator\x1b[0m");






//////////////////////////////////////////////////////////////////////
// directories


function directory_exists(dir_path){
	try{
		fs.accessSync(dir_path, fs.constants.R_OK | fs.constants.W_OK);
		return true;
	}catch(err){
		return false;
	}
}


const create_directories_list = [
	"../site",
	"../site/tutorials",
	"../site/tutorials/panther",
	"../site/tutorials/pantherlib",
	"../site/tutorials/pir",
	"../site/tutorials/plnk",
	"../site/documentation",
	"../site/documentation/panther",
	"../site/documentation/panther/intrinsics",
	"../site/documentation/panther_std",
	"../site/documentation/pir",
	"../site/devlogs",
];





//////////////////////////////////////////////////////////////////////
// add page generators

let page_generators = [];

function add_all_page_generators_in_directory_recursive(dir){
	for(const file of fs.readdirSync(dir)){
		const absolute_path = dir + "/" + file;
		if(fs.statSync(absolute_path).isFile()){
			page_generators.push(require(absolute_path).getPageGenerator());
		}else{
			add_all_page_generators_in_directory_recursive(absolute_path);
		}
	}
}


add_all_page_generators_in_directory_recursive("./page_generators");



//////////////////////////////////////////////////////////////////////
// begin generation


const total_steps = create_directories_list.length + (page_generators.length * 2) + 1;

let completed_step = -1;


function start_step(name){
	completed_step += 1;

	const width = process.stdout.columns - 19;
	const percent_completed = completed_step / total_steps;

	let bar = "Progress: [";
	const printed_percent = Math.floor(percent_completed * 100);
	if(printed_percent < 10){
		bar += '  ';
	}else if(printed_percent < 100){
		bar += ' ';
	}
	bar += "\x1b[36m";
	bar += printed_percent;

	bar += "%\x1b[0m] [";
	for(let i = 0; i < width; i+=1){
		if(i < percent_completed * width){
			bar += "\x1b[36m=\x1b[0m";
		}else{
			bar += "\x1b[90m=\x1b[0m";
		}
	}
	bar += "]";


	if(completed_step == 0){
		process.stdout.write("\x1B7");  // save cursor position
		process.stdout.write(bar);

	}else{
		process.stdout.write("\x1B8");   // Restore the cursor position util new size is calculated
		process.stdout.write("\x1B[0J"); // restore cursor position
		process.stdout.write(bar);
	}

}



for(const dir of create_directories_list){
	start_step();
	if(directory_exists(dir)){
		fs.rmSync(dir, {recursive: true});
		fs.mkdirSync(dir);
	}else{
		fs.mkdirSync(dir);
	}
}


for(const page_generator of page_generators){
	start_step();
	page_generator.init();
}


for(const page_generator of page_generators){
	start_step();
	page_generator.generate();
}






//////////////////////////////////////////////////////////////////////
// script generators

start_step();


require("./search.js").generate();


const page_list = require("./Page.js").page_list;

let sitemap_str = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

page_list.forEach((page, i) => {
	sitemap_str += "\t<url>\n";

	sitemap_str += "\t\t<loc>";
	if(page.getPath() == "../index.html"){
		sitemap_str += "https://www.pcitproject.org";
	}else{
		sitemap_str += "https://www.pcitproject.org/" + (path.normalize("site/" + page.getPath()).replaceAll("\\", "/"));
	}
	sitemap_str += "</loc>\n";


	sitemap_str += `\t\t<lastmod>${page.lastUpdatedStr()}</lastmod>\n`;


	sitemap_str += "\t</url>\n";
});

sitemap_str += "</urlset>";

fs.writeFileSync("../site/sitemap.xml", sitemap_str);


start_step();

