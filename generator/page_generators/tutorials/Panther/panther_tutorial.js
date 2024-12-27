//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////





const Page = require("../../../Page.js").Page;
const html = require("../../../html.js");

let page = new Page("Panther Tutorial", "tutorials/panther/tutorial.html");

page.h1("Panther Tutorial");

page.paragraph("Coming soon...");

page.paragraph("For now, maybe look at " + html.link("this example", "/site/Panther.html#example") + ".");


page.generate();

