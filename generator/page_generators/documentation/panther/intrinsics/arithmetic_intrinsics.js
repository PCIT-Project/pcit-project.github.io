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
	path        : "documentation/panther/intrinsics/arithmetic_intrinsics.html",
	title       : "Arithmetic Intrinsics",
	categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
	breadcrumbs : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION, breadcrumbs.PANTHER_INTRINSICS],
	description : "Documentation for arithmetic intrinsics in the Panther programming language",
});


page.h2Searchable("@add", "add");
page.text(page.inline_code_block(Language.PANTHER, "func @add = <{T: Type, MAY_WRAP: Bool}> (lhs: T, rhs: T) -> T;"));
page.text(`Integer addition. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);
page.text(`Wrapping when ${html.inline_code("MAY_WRAP")} is ${page.inline_code_block(Language.PANTHER, "false")} is ${terms.get("undefined behavior")}.`);

page.h2Searchable("@addWrap", "addWrap");
page.text(page.inline_code_block(Language.PANTHER, "func @addWrap = <{T: Type}> (lhs: T, rhs: T) -> (result: T, wrapped: Bool);"));
page.text(`Integer addition where ${html.inline_code("wrapped")} is ${page.inline_code_block(Language.PANTHER, "true")} if wrapping occured. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

page.h2Searchable("@addSat", "addSat");
page.text(page.inline_code_block(Language.PANTHER, "func @addSat = <{T: Type}> (lhs: T, rhs: T) -> T;"));
page.text(`Integer saturating addition. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

page.h2Searchable("@fadd", "fadd");
page.text(page.inline_code_block(Language.PANTHER, "func @fadd = <{T: Type}> (lhs: T, rhs: T) -> T;"));
page.text(`Float addition. ${html.inline_code("T")} must be ${terms.get("floating-point")} or a ${terms.get("vector")} of ${terms.get("floating-point")}.`);

page.h2Searchable("@sub", "sub");
page.text(page.inline_code_block(Language.PANTHER, "func @sub = <{T: Type, MAY_WRAP: Bool}> (lhs: T, rhs: T) -> T;"));
page.text(`Integer subtraction. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);
page.text(`Wrapping when ${html.inline_code("MAY_WRAP")} is ${page.inline_code_block(Language.PANTHER, "false")} is ${terms.get("undefined behavior")}.`);

page.h2Searchable("@subWrap", "subWrap");
page.text(page.inline_code_block(Language.PANTHER, "func @subWrap = <{T: Type}> (lhs: T, rhs: T) -> (result: T, wrapped: Bool);"));
page.text(`Integer subtraction where ${html.inline_code("wrapped")} is ${page.inline_code_block(Language.PANTHER, "true")} if wrapping occured. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

page.h2Searchable("@subSat", "subSat");
page.text(page.inline_code_block(Language.PANTHER, "func @subSat = <{T: Type}> (lhs: T, rhs: T) -> T;"));
page.text(`Integer saturating subtraction. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

page.h2Searchable("@fsub", "fsub");
page.text(page.inline_code_block(Language.PANTHER, "func @fsub = <{T: Type}> (lhs: T, rhs: T) -> T;"));
page.text(`Float subtraction. ${html.inline_code("T")} must be ${terms.get("floating-point")} or a ${terms.get("vector")} of ${terms.get("floating-point")}.`);

page.h2Searchable("@mul", "mul");
page.text(page.inline_code_block(Language.PANTHER, "func @mul = <{T: Type, MAY_WRAP: Bool}> (lhs: T, rhs: T) -> T;"));
page.text(`Integer multiplication. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);
page.text(`Wrapping when ${html.inline_code("MAY_WRAP")} is ${page.inline_code_block(Language.PANTHER, "false")} is ${terms.get("undefined behavior")}.`);

page.h2Searchable("@mulWrap", "mulWrap");
page.text(page.inline_code_block(Language.PANTHER, "func @mulWrap = <{T: Type}> (lhs: T, rhs: T) -> (result: T, wrapped: Bool);"));
page.text(`Integer multiplication where ${html.inline_code("wrapped")} is ${page.inline_code_block(Language.PANTHER, "true")} if wrapping occured. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

page.h2Searchable("@mulSat", "mulSat");
page.text(page.inline_code_block(Language.PANTHER, "func @mulSat = <{T: Type}> (lhs: T, rhs: T) -> T;"));
page.text(`Integer saturating multiplication. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

page.h2Searchable("@fmul", "fmul");
page.text(page.inline_code_block(Language.PANTHER, "func @fmul = <{T: Type}> (lhs: T, rhs: T) -> T;"));
page.text(`Float multiplication. ${html.inline_code("T")} must be ${terms.get("floating-point")} or a ${terms.get("vector")} of ${terms.get("floating-point")}.`);

page.h2Searchable("@div", "div");
page.text(page.inline_code_block(Language.PANTHER, "func @div = <{T: Type, IS_EXACT: Bool}> (lhs: T, rhs: T) -> T;"));
page.text(`Integer division. ${html.inline_code("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);
page.text(`If ${html.inline_code("IS_EXACT")} is ${page.inline_code_block(Language.PANTHER, "true")}, it is ${terms.get("undefined behavior")} if ${page.inline_code_block(Language.PANTHER, "(@div<{TYPE, true}>(a, b) * b) != a")}.`);

page.h2Searchable("@fdiv", "fdiv");
page.text(page.inline_code_block(Language.PANTHER, "func @fdiv = <{T: Type}> (lhs: T, rhs: T) -> T;"));
page.text(`Float division. ${html.inline_code("T")} must be ${terms.get("floating-point")} or a ${terms.get("vector")} of ${terms.get("floating-point")}.`);

page.h2Searchable("@rem", "rem");
page.text(page.inline_code_block(Language.PANTHER, "func @rem = <{T: Type}> (lhs: T, rhs: T) -> T;"));
page.text(`Division remainder. ${html.inline_code("T")} must be ${terms.get("integral")}, a ${terms.get("vector")} of ${terms.get("integral")}, ${terms.get("floating-point")},  or a ${terms.get("vector")} of ${terms.get("floating-point")}.`);

page.h2Searchable("@fneg", "fneg");
page.text(page.inline_code_block(Language.PANTHER, "func @fneg = <{T: Type}> (arg: T) -> T;"));
page.text(`Float negation. ${html.inline_code("T")} must be ${terms.get("floating-point")} or a ${terms.get("vector")} of ${terms.get("floating-point")}.`);





page.generate();

