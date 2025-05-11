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
	path: "documentation/panther/intrinsics/comparative_intrinsics.html",
	title: "Comparative Intrinsics | Panther Documentation",
	on_page_title: "Comparative Intrinsics",
	categories: [search.Category.PANTHER, search.Category.DOCUMENTATION],
	description: "Documentation for comparative intrinsics in the Panther programming language",
});


page.h2Searchable("@and", "and");
page.text(page.inline_code_block(Language.PANTHER, "func @and = <{T: Type}> (lhs: T, rhs: T) -> T;"));
page.text(`Bitwise and. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);


page.h2Searchable("@eq", "eq");
page.text(page.inline_code_block(Language.PANTHER, "func @eq = <{T: Type}> (lhs: T, rhs: T) -> Bool;"));
page.text(`Calcualte equality. ${html.inline_code("T")} must be ${terms.get("primitive")} or a ${terms.get("vector")} or ${terms.get("primitive")}.`);

page.h2Searchable("@neq", "neq");
page.text(page.inline_code_block(Language.PANTHER, "func @neq = <{T: Type}> (lhs: T, rhs: T) -> Bool;"));
page.text(`Calcualte non-equality. ${html.inline_code("T")} must be ${terms.get("primitive")} or a ${terms.get("vector")} or ${terms.get("primitive")}.`);

page.h2Searchable("@lt", "lt");
page.text(page.inline_code_block(Language.PANTHER, "func @lt = <{T: Type}> (lhs: T, rhs: T) -> Bool;"));
page.text(`Calcualte less than. ${html.inline_code("T")} must be ${terms.get("primitive")} or a ${terms.get("vector")} or ${terms.get("primitive")}.`);

page.h2Searchable("@lte", "lte");
page.text(page.inline_code_block(Language.PANTHER, "func @lte = <{T: Type}> (lhs: T, rhs: T) -> Bool;"));
page.text(`Calcualte less than or equal to. ${html.inline_code("T")} must be ${terms.get("primitive")} or a ${terms.get("vector")} or ${terms.get("primitive")}.`);

page.h2Searchable("@gt", "gt");
page.text(page.inline_code_block(Language.PANTHER, "func @gt = <{T: Type}> (lhs: T, rhs: T) -> Bool;"));
page.text(`Calcualte greater than. ${html.inline_code("T")} must be ${terms.get("primitive")} or a ${terms.get("vector")} or ${terms.get("primitive")}.`);

page.h2Searchable("@gte", "gte");
page.text(page.inline_code_block(Language.PANTHER, "func @gte = <{T: Type}> (lhs: T, rhs: T) -> Bool;"));
page.text(`Calcualte greater than or equal to. ${html.inline_code("T")} must be ${terms.get("primitive")} or a ${terms.get("vector")} or ${terms.get("primitive")}.`);



page.generate();

