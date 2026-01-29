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
	path        : "documentation/panther/intrinsics/atomic_intrinsics.html",
	title       : "Atomic Intrinsics",
	categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
	breadcrumbs : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION, breadcrumbs.PANTHER_INTRINSICS],
	description : "Documentation for atomic intrinsics in the Panther programming language",
});


page.h2Searchable("@atomicLoad", "atomicLoad");
page.text(page.inline_code(Language.PANTHER, "func @atomicLoad = <{TARGET: Type, OUTPUT: Type, ORDER: @pthr.AtomicOrdering}> (target: TARGET) -> OUTPUT;"));
page.text(`Atomic load. ${html.inline_code("TARGET")} must be a non-optional pointer. ${html.inline_code("TARGET")} must be the result of a dereference of ${html.inline_code("TARGET")}.`);


page.h2Searchable("@atomicStore", "atomicStore");
page.text(page.inline_code(Language.PANTHER, "func @atomicStore = <{TARGET: Type, VALUE: Type, ORDER: @pthr.AtomicOrdering}> (target: TARGET, value: VALUE) -> Void;"));
page.text(`Atomic load. ${html.inline_code("TARGET")} must be a non-optional pointer. ${html.inline_code("TARGET")} must be the result of a dereference of ${html.inline_code("TARGET")}.`);


page.generate();

