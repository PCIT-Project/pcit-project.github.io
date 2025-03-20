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


let page = new Page({
	path: "documentation/panther_std/documentation.html",
	title: "Panther STD Documentation",
	categories: [search.Category.PANTHER_STD, search.Category.DOCUMENTATION],
	description: "Documentation for the Panther programming language standard library",
});


page.text("The design of the Panther standard library is not solidified enough to write documentation about it yet", "font-style: italic;");

page.generate();

