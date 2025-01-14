//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////

const fs = require("node:fs");

console.log("\x1b[36mPCIT Project website generator");
console.log("\x1b[90m------------------------------\x1b[0m")


function directory_exists(path){
	try{
		fs.accessSync(path, fs.constants.R_OK | fs.constants.W_OK);
		return true;
	}catch(err){
		return false;
	}
}


function make_directory(path){
	if(directory_exists(path)){
		console.log("Recreating directory: \x1b[33m\"" + path.substr(2) + "\"\x1b[0m");
		fs.rmSync(path, {recursive: true});
		fs.mkdirSync(path);
	}else{
		console.log("Creating directory: \x1b[33m\"" + path.substr(2) + "\"\x1b[0m");
		fs.mkdirSync(path);
	}
}



//////////////////////////////////////////////////////////////////////
// directories

make_directory("../site");
make_directory("../site/tutorials");
make_directory("../site/tutorials/panther");
make_directory("../site/tutorials/pantherlib");
make_directory("../site/tutorials/pir");
make_directory("../site/tutorials/plnk");
make_directory("../site/documentation");
make_directory("../site/documentation/panther");
make_directory("../site/documentation/panther_std");
make_directory("../site/documentation/pir");
make_directory("../site/devlog");



//////////////////////////////////////////////////////////////////////
// page generators

require("./page_generators/home.js");
require("./page_generators/404.js");
require("./page_generators/panther_home.js");
require("./page_generators/downloads.js");
require("./page_generators/about.js");
require("./page_generators/search.js");


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

require("./page_generators/documentation/panther/documentation.js");
require("./page_generators/documentation/panther/value_categories.js");
require("./page_generators/documentation/panther/undefined_behavior.js");

require("./page_generators/documentation/panther_std/documentation.js");

require("./page_generators/documentation/pir/documentation.js");



///////////////////////////////////
// devlog

require("./page_generators/devlog/devlog.js");

require("./page_generators/devlog/new_systems_requires_major_changes.js");


