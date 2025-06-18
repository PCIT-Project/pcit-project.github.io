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
	path        : "documentation/panther/intrinsics/type_traits_intrinsics.html",
	title       : "Type Traits",
	categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
	breadcrumbs : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION, breadcrumbs.PANTHER_INTRINSICS],
	description : "Documentation for type traits intrinsics in the Panther programming language",
});


page.h2Searchable("@bitWidth", "bitWidth");
page.text(page.inline_code_block(Language.PANTHER, "func @bitWidth = <{T: Type}> () -> USize;"));
page.text(`Get the bitwidth of type ${html.inline_code("T")}. ${html.inline_code("T")} must be ${terms.get("integral")}.`);

page.h2Searchable("@sizeOf", "sizeOf");
page.text(page.inline_code_block(Language.PANTHER, "func @sizeOf = <{T: Type}> () -> USize;"));
page.text(`Get the size of type ${html.inline_code("T")}. ${html.inline_code("T")} cannot be ${page.inline_code_block(Language.PANTHER, "Void")}.`);



page.generate();

