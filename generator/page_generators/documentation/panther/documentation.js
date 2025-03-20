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
	path: "documentation/panther/documentation.html",
	title: "Panther Documentation",
	categories: [search.Category.PANTHER, search.Category.DOCUMENTATION],
	description: "Documentation for the Panther programming language",
});


page.text("Documentation for the Panther programming language.");

// TODO: remove at release
page.begin_info();
page.h2("Important Note", "padding-top: 0px;");
page.text("As Panther is pre-release, anything in the documentation may change. The documentation is also far from complete");
page.end_info();

page.text(html.link("Modules", "/site/documentation/panther/modules.html"));
page.text(html.link("Undefined Behavior", "/site/documentation/panther/undefined_behavior.html"));
page.text(html.link("Uninitialized", "/site/documentation/panther/uninitialized.html"));
page.text(html.link("Value Categories", "/site/documentation/panther/value_categories.html"));
page.text(html.link("Value Stages", "/site/documentation/panther/value_stages.html"));
page.text(html.link("When Conditionals", "/site/documentation/panther/when_conditionals.html"));



page.generate();

