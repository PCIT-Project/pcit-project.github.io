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
	path: "tutorials/pir/tutorial.html",
	title: "PIR Tutorial",
	categories: [search.Category.PIR, search.Category.TUTORIAL],
	description: "Tutorial for PIR (Panther Intermediate Representation)"
});


page.text(`Proper documentation for PIR does not exist yet since the PIR is very much a work in progress is likely to change in the future. To give a sneak peek into the current syntax, check out ${html.link("this page", "/site/documentation/pir/documentation.html")}.`, "font-style: italic;");

page.generate();

