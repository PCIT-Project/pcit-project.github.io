//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////

const fs = require("node:fs");

console.log("PCIT Project website generator");


function directory_exists(path){
	try{
		fs.accessSync(path, fs.constants.R_OK | fs.constants.W_OK);
		return true;
	}catch(err){
		return false;
	}
}


function make_directory(path, title){
	if(directory_exists(path)){
		console.log("recreating directory: " + title);
		fs.rmSync(path, {recursive: true});
		fs.mkdirSync(path);
	}else{
		console.log("creating directory: " + title);
		fs.mkdirSync(path);
	}
}



//////////////////////////////////////////////////////////////////////
// directories

make_directory("../site", "site");
make_directory("../site/tutorials", "tutorials");
make_directory("../site/tutorials/panther", "tutorials/panther");
make_directory("../site/tutorials/pantherlib", "tutorials/pantherlib");
make_directory("../site/tutorials/pir", "tutorials/pir");
make_directory("../site/tutorials/plnk", "tutorials/plnk");
make_directory("../site/documentation", "documentation");
make_directory("../site/news", "news");



//////////////////////////////////////////////////////////////////////
// page generators

require("./page_generators/home.js");
require("./page_generators/404.js");
require("./page_generators/panther_home.js");
require("./page_generators/downloads.js");
require("./page_generators/about.js");


///////////////////////////////////
// tutorials

require("./page_generators/tutorials/tutorials.js");

require("./page_generators/tutorials/Panther/panther_tutorial.js");

require("./page_generators/tutorials/PantherLib/panther_lib_tutorial.js");

require("./page_generators/tutorials/PIR/pir_tutorial.js");

require("./page_generators/tutorials/PLNK/plnk_tutorial.js");


///////////////////////////////////
// documentation

require("./page_generators/documentation/documentation.js");


///////////////////////////////////
// news

require("./page_generators/news/news.js");
