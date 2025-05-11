//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../../Page.js").Page;
const html = require("../../../../html.js");
const terms = require("../../../../terms.js");
const search = require("../../../../search.js");
const Language = require("../../../../Page.js").Language;
const syntax_highlighting = require("../../../../syntax_highlighting/syntax_highlighting.js");



let page = new Page(__filename, {
	path: "documentation/panther/intrinsics/intrinsics.html",
	title: "Intrinsics | Panther Documentation",
	on_page_title: "Intrinsics",
	categories: [search.Category.PANTHER, search.Category.DOCUMENTATION],
	description: "Documentation for intrinsics in the Panther programming language",
});


page.text(html.link("Arithmetic", "/site/documentation/panther/intrinsics/arithmetic_intrinsics.html"));
page.text(html.link("Bitwise", "/site/documentation/panther/intrinsics/bitwise_intrinsics.html"));
// page.text(html.link("Build System", "/site/documentation/panther/intrinsics/build system_intrinsics.html"));
page.text(html.link("Comparative", "/site/documentation/panther/intrinsics/comparative_intrinsics.html"));
page.text(html.link("Operational", "/site/documentation/panther/intrinsics/operational_intrinsics.html"));
page.text(html.link("Type Conversion", "/site/documentation/panther/intrinsics/type_conversion_intrinsics.html"));
page.text(html.link("Type Traits", "/site/documentation/panther/intrinsics/type_traits_intrinsics.html"));



page.generate();

