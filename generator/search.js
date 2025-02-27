//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////


const assert = require("node:assert");
const fs = require("node:fs");



const Category = Object.freeze({
	PANTHER: 0,
	PANTHER_STD: 1,
	PIR: 2,
	PLNK: 3,

	DOCUMENTATION: 4,
	TUTORIAL: 5,
	DEVLOG: 6,
});


class SearchTarget{
	title;
	path;
	categories;

	constructor(title, path, categories){
		assert(categories !== undefined, "must give categories (empty array if none)");

		let last_category = -1;
		categories.forEach((category) => {
			assert(category !== undefined, "Invalid category");

			assert(category != last_category, "dulpicate category");
			assert(category > last_category, "categories not sorted");
			last_category = category;
		});


		this.title = title;
		this.path = path;
		this.categories = categories;
	}
}

let search_targets = [];


function addSearchTarget(title, path, categories){
	search_targets.push(new SearchTarget(title, path, categories));
}



function generate(){
	let file_data = fs.readFileSync("./search_page_script.js");

	file_data += "\n\n";

	file_data += "const search_targets = [\n";

	search_targets.reverse();

	for(let i = search_targets.length - 1; i>=0; i--){
		let page = search_targets[i];

		file_data += `\tnew SearchTarget("${page.title}", "${page.path}", `;

		const words = page.title.toLowerCase().split(" ");

		let search_terms = [];
		words.forEach((word, i) => {
			if(word === ""){ return; } // remove extranous spaces
			if(search_terms.includes(word)){ return; } // prevent duplication
			if(word === "|"){ return; }
			
			search_terms.push(words[i]);
		});
		assert(search_terms.length > 0, "search page title should have some words");

		file_data += JSON.stringify(search_terms) + ", ";

		file_data += JSON.stringify(page.categories);

		file_data += "),\n";
	}

	file_data += "];\n";

	fs.writeFileSync("../site/search_script.js", file_data);
}



exports.Category = Category;
exports.generate = generate;
exports.addSearchTarget = addSearchTarget;