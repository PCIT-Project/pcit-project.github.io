//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../Page.js").Page;
const html = require("../../../html.js");
const search = require("../../../search.js");

let page = new Page(__filename, {
	path: "tutorials/pantherlib/tutorial.html",
	title: "Panther Library Tutorial",
	categories: [search.Category.PANTHER_STD, search.Category.TUTORIAL],
	description: "Tutorial for the Panther programming language library",
});


page.text("The API for using the Panther Compiler as an embeddable Library is not solidified enough yet to write documentation for it yet.", "font-style: italic;");

page.generate();

