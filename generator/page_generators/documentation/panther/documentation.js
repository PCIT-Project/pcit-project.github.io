//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../Page.js").Page;
const html = require("../../../html.js");

let page = new Page("Panther Documentation", "documentation/panther/documentation.html");

page.h1("Panther Documentation");

page.text("Documentation for the Panther programming language.");

// TODO: remove at release
page.begin_info();
page.h2("Important Note", "padding-top: 0px;");
page.text("As Panther is pre-release, anything in the documentation may change. The documentation is also far from complete");
page.end_info();


page.text(html.link("Value Categories", "/site/documentation/panther/value_categories.html"));



page.generate();

