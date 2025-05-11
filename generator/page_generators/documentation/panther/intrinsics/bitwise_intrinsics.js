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
	path: "documentation/panther/intrinsics/bitwise_intrinsics.html",
	title: "Bitwise Intrinsics | Panther Documentation",
	on_page_title: "Bitwise Intrinsics",
	categories: [search.Category.PANTHER, search.Category.DOCUMENTATION],
	description: "Documentation for bitwise intrinsics in the Panther programming language",
});


page.h2Searchable("@and", "and");
page.text(page.inline_code_block(Language.PANTHER, "func @and = <{T: Type}> (lhs: T, rhs: T) -> T;"));
page.text(`Bitwise and. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

page.h2Searchable("@or", "or");
page.text(page.inline_code_block(Language.PANTHER, "func @or = <{T: Type}> (lhs: T, rhs: T) -> T;"));
page.text(`Bitwise or. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

page.h2Searchable("@xor", "xor");
page.text(page.inline_code_block(Language.PANTHER, "func @xor = <{T: Type}> (lhs: T, rhs: T) -> T;"));
page.text(`Bitwise exclusive or. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

page.h2Searchable("@shl", "shl");
page.text(page.inline_code_block(Language.PANTHER, "func @shl = <{T: Type, SHIFT_T: Type, MAY_WRAP: Bool}> (lhs: T, rhs: SHIFT_T) -> T;"));
page.text(`Bitwise shift left. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}. ${html.inline_code("SHIFT_T")} must be unsigned with a width of ${page.inline_code_block(Language.PANTHER, "ceil(log2(@bitWidth<{T}>()))")}`);
page.text(`If ${html.inline_code("T")} is ${html.italic("unsigned")} and ${html.inline_code("MAY_WRAP")} is ${page.inline_code_block(Language.PANTHER, "true")}, it is ${terms.get("undefined behavior")} if any ${html.inline_code("1")} bits are shifted out.`);
page.text(`If ${html.inline_code("T")} is ${html.italic("signed")} and ${html.inline_code("MAY_WRAP")} is ${page.inline_code_block(Language.PANTHER, "true")}, it is ${terms.get("undefined behavior")} if the result is a different sign than lhs.`);

page.h2Searchable("@shlSat", "shlSat");
page.text(page.inline_code_block(Language.PANTHER, "func @shlSat = <{T: Type, SHIFT_T: Type}> (lhs: T, rhs: T) -> T;"));
page.text(`Bitwise saturating shift left. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}. ${html.inline_code("SHIFT_T")} must be ${terms.get("unsigned integral")} with a width of ${page.inline_code_block(Language.PANTHER, "ceil(log2(@bitWidth<{T}>()))")}.`);

page.h2Searchable("@shr", "shr");
page.text(page.inline_code_block(Language.PANTHER, "func @shr = <{T: Type, SHIFT_T: Type, MAY_WRAP: Bool}> (lhs: T, rhs: SHIFT_T) -> T;"));
page.text(`Bitwise shift right. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}. ${html.inline_code("SHIFT_T")} must be ${terms.get("unsigned integral")} with a width of ${page.inline_code_block(Language.PANTHER, "ceil(log2(@bitWidth<{T}>()))")}.`);
page.text(`If ${html.inline_code("MAY_WRAP")} is ${page.inline_code_block(Language.PANTHER, "true")}, it is ${terms.get("undefined behavior")} if any ${html.inline_code("1")} bits are shifted out.`);

page.h2Searchable("@bitReverse", "bitReverse");
page.text(page.inline_code_block(Language.PANTHER, "func @bitReverse = <{T: Type}> (arg: T) -> T;"));
page.text(`Reverse the bits. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}, and must have an even bitwidth`);

page.h2Searchable("@bSwap", "bSwap");
page.text(page.inline_code_block(Language.PANTHER, "func @bSwap = <{T: Type}> (arg: T) -> T;"));
page.text(`Swap the bytes . ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

page.h2Searchable("@ctPop", "ctPop");
page.text(page.inline_code_block(Language.PANTHER, "func @ctPop = <{T: Type}> (arg: T) -> T;"));
page.text(`Count the number of one bits. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

page.h2Searchable("@ctlz", "ctlz");
page.text(page.inline_code_block(Language.PANTHER, "func @ctlz = <{T: Type}> (arg: T) -> T;"));
page.text(`Count number of leading zero bits. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

page.h2Searchable("@cttz", "cttz");
page.text(page.inline_code_block(Language.PANTHER, "func @cttz = <{T: Type}> (arg: T) -> T;"));
page.text(`Count number of trailing zero bits. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);


page.generate();

