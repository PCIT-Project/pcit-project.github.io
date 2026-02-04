//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////


const assert = require("node:assert");

class PageGenerator{
	#initializer;
	#generator;
	#page;

	constructor(initializer, generator){
		assert(typeof initializer === "function", "PageGenerator.initializer must be function");
		assert(typeof generator === "function", "PageGenerator.generator must be function");

		this.initializer = initializer;
		this.generator = generator;
	}

	init(){
		this.page = this.initializer();
	}

	generate(){
		this.generator(this.page);
		this.page.generate();
	}
}


exports.PageGenerator = PageGenerator;