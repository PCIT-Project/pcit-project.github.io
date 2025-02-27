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

let page = new Page("Panther Tutorial", "tutorials/panther/tutorial.html", [search.Category.PANTHER, search.Category.TUTORIAL]);

page.h1("Panther Tutorial");

page.text("Coming Soon...", "font-style: italic;");

page.text("For now, maybe look at " + html.link("this code example", "/site/Panther.html#example") + " or " + html.link("the Panther documentation", "/site/documentation/panther/documentation.html") + ".");


page.generate();

