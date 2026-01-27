//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../../Page.js").Page;
const breadcrumbs = require("../../../../Page.js").breadcrumbs;
const html = require("../../../../html.js");
const terms = require("../../../../terms.js");
const search = require("../../../../search.js");
const Language = require("../../../../Page.js").Language;
const syntax_highlighting = require("../../../../syntax_highlighting/syntax_highlighting.js");



let page = new Page(__filename, {
	path        : "documentation/panther/intrinsics/intrinsics.html",
	title       : "Intrinsics",
	categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
	breadcrumbs : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION],
	description : "Documentation for intrinsics in the Panther programming language",
});


page.paragraph(`Instrinsics are special symbols builtin to the compiler. They are all either begin with an ${html.inline_code("@")} or are part of a builtin module (which itself begins with an ${html.inline_code("@")}).`);



page.h2("Builtin Modules");

page.text(html.link("@pthr",  "/site/documentation/panther/intrinsics/builtin_module_pthr.html"));
page.text(html.link("@build",  "/site/documentation/panther/intrinsics/builtin_module_build.html"));



page.h2("Intrinsic Functions");

page.paragraph(`Intrinsic functions are generally not meant to be used by the programmer as there is usually a better way of doing the same thing. For example, type conversion intrinsic functions do exist but it is preferred to use ${terms.get("operator as")} instead. In addition, the standard library provides wrappers around almost all intrinsic functions.`);

page.paragraph(`Intrinsic functions are almost always inlined and some (such as type trait intrinsics) don't have any runtime execution at all. As such, you cannot take the address of an intrinsic function.`);

page.h3("Meant for general use:");
page.text(html.link("Importing", "/site/documentation/panther/intrinsics/importing_intrinsics.html"));
page.text(html.link("Operational", "/site/documentation/panther/intrinsics/operational_intrinsics.html"));


page.h3("Not meant for general use:");
page.text(html.link("Arithmetic", "/site/documentation/panther/intrinsics/arithmetic_intrinsics.html"));
page.text(html.link("Bitwise", "/site/documentation/panther/intrinsics/bitwise_intrinsics.html"));
// page.text(html.link("Build System", "/site/documentation/panther/intrinsics/build system_intrinsics.html"));
page.text(html.link("Comparative", "/site/documentation/panther/intrinsics/comparative_intrinsics.html"));
page.text(html.link("Type Conversion", "/site/documentation/panther/intrinsics/type_conversion_intrinsics.html"));
page.text(html.link("Type Traits", "/site/documentation/panther/intrinsics/type_traits_intrinsics.html"));




page.generate();

