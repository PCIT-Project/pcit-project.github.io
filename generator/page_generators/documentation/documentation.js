//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////

const Page = require("../../Page.js").Page;
const html = require("../../html.js");
const search = require("../../search.js");


let page = new Page(__filename, {
	path                    : "documentation/documentation.html",
	title                   : "Documentation",
	categories              : [search.Category.DOCUMENTATION],
	description             : "Documentation for the PCIT Project tools",
	has_categories_in_title : false,
});


page.h2(html.link("Panther", "/site/documentation/panther/documentation.html"));
page.text("Documentation for the Panther programming language");

page.h2(html.link("Panther STD", "/site/documentation/panther_std/documentation.html"));
page.text("Documentation for the Panther standard library");

page.h2(html.link("PIR", "/site/documentation/pir/documentation.html"));
page.text("Documentation for the PIR (Panther Intermediate Representation) language");

page.generate();

