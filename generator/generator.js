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


if(directory_exists("../site")){
	console.log("recreating site directory");
	fs.rmSync("../site", {recursive: true});
	fs.mkdirSync("../site");
}else{
	console.log("creating site directory");
	fs.mkdirSync("../site");
}


require("./page_generators/home.js");
require("./page_generators/404.js");
require("./page_generators/panther_home.js");

