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


let page = new Page("Panther STD Documentation", "documentation/panther_std/documentation.html", [search.Category.PANTHER_STD, search.Category.DOCUMENTATION]);
page.setDescription("Documentation for the Panther programming language standard library");


page.h1("Panther STD Documentation");

page.text("Coming Soon...", "font-style: italic;");


page.generate();

