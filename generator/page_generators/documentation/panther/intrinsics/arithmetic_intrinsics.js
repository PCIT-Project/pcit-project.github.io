//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../../Page.js");
const html = require("../../../../html.js");
const terms = require("../../../../terms.js");
const search = require("../../../../search.js");



exports.getPageGenerator = function(){
	return new (require("../../../../PageGenerator.js").PageGenerator)(
		() => {
			return new Page.Page(__filename, {
				path        : "documentation/panther/intrinsics/arithmetic_intrinsics.html",
				title       : "Arithmetic Intrinsics",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				description : "Documentation for arithmetic intrinsics in the Panther programming language",
			});
		},
		(page) => {
			page.h2Searchable("@add", "add");
			page.text(page.inlineCode("func @add = <{T: Type, MAY_WRAP: Bool}> (lhs: T, rhs: T) -> T;"));
			page.text(`Integer addition. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);
			page.text(`Wrapping when ${html.highlight("MAY_WRAP")} is ${page.inlineCode("false")} is ${terms.get("undefined behavior")}.`);

			page.h2Searchable("@addWrap", "addWrap");
			page.text(page.inlineCode("func @addWrap = <{T: Type}> (lhs: T, rhs: T) -> (result: T, wrapped: Bool);"));
			page.text(`Integer addition where ${html.highlight("wrapped")} is ${page.inlineCode("true")} if wrapping occured. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

			page.h2Searchable("@addSat", "addSat");
			page.text(page.inlineCode("func @addSat = <{T: Type}> (lhs: T, rhs: T) -> T;"));
			page.text(`Integer saturating addition. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

			page.h2Searchable("@fadd", "fadd");
			page.text(page.inlineCode("func @fadd = <{T: Type}> (lhs: T, rhs: T) -> T;"));
			page.text(`Float addition. ${html.highlight("T")} must be ${terms.get("floating-point")} or a ${terms.get("vector")} of ${terms.get("floating-point")}.`);

			page.h2Searchable("@sub", "sub");
			page.text(page.inlineCode("func @sub = <{T: Type, MAY_WRAP: Bool}> (lhs: T, rhs: T) -> T;"));
			page.text(`Integer subtraction. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);
			page.text(`Wrapping when ${html.highlight("MAY_WRAP")} is ${page.inlineCode("false")} is ${terms.get("undefined behavior")}.`);

			page.h2Searchable("@subWrap", "subWrap");
			page.text(page.inlineCode("func @subWrap = <{T: Type}> (lhs: T, rhs: T) -> (result: T, wrapped: Bool);"));
			page.text(`Integer subtraction where ${html.highlight("wrapped")} is ${page.inlineCode("true")} if wrapping occured. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

			page.h2Searchable("@subSat", "subSat");
			page.text(page.inlineCode("func @subSat = <{T: Type}> (lhs: T, rhs: T) -> T;"));
			page.text(`Integer saturating subtraction. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

			page.h2Searchable("@fsub", "fsub");
			page.text(page.inlineCode("func @fsub = <{T: Type}> (lhs: T, rhs: T) -> T;"));
			page.text(`Float subtraction. ${html.highlight("T")} must be ${terms.get("floating-point")} or a ${terms.get("vector")} of ${terms.get("floating-point")}.`);

			page.h2Searchable("@mul", "mul");
			page.text(page.inlineCode("func @mul = <{T: Type, MAY_WRAP: Bool}> (lhs: T, rhs: T) -> T;"));
			page.text(`Integer multiplication. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);
			page.text(`Wrapping when ${html.highlight("MAY_WRAP")} is ${page.inlineCode("false")} is ${terms.get("undefined behavior")}.`);

			page.h2Searchable("@mulWrap", "mulWrap");
			page.text(page.inlineCode("func @mulWrap = <{T: Type}> (lhs: T, rhs: T) -> (result: T, wrapped: Bool);"));
			page.text(`Integer multiplication where ${html.highlight("wrapped")} is ${page.inlineCode("true")} if wrapping occured. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

			page.h2Searchable("@mulSat", "mulSat");
			page.text(page.inlineCode("func @mulSat = <{T: Type}> (lhs: T, rhs: T) -> T;"));
			page.text(`Integer saturating multiplication. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

			page.h2Searchable("@fmul", "fmul");
			page.text(page.inlineCode("func @fmul = <{T: Type}> (lhs: T, rhs: T) -> T;"));
			page.text(`Float multiplication. ${html.highlight("T")} must be ${terms.get("floating-point")} or a ${terms.get("vector")} of ${terms.get("floating-point")}.`);

			page.h2Searchable("@div", "div");
			page.text(page.inlineCode("func @div = <{T: Type, IS_EXACT: Bool}> (lhs: T, rhs: T) -> T;"));
			page.text(`Integer division. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);
			page.text(`If ${html.highlight("IS_EXACT")} is ${page.inlineCode("true")}, it is ${terms.get("undefined behavior")} if ${page.inlineCode("(@div<{TYPE, true}>(a, b) * b) != a")}.`);

			page.h2Searchable("@fdiv", "fdiv");
			page.text(page.inlineCode("func @fdiv = <{T: Type}> (lhs: T, rhs: T) -> T;"));
			page.text(`Float division. ${html.highlight("T")} must be ${terms.get("floating-point")} or a ${terms.get("vector")} of ${terms.get("floating-point")}.`);

			page.h2Searchable("@rem", "rem");
			page.text(page.inlineCode("func @rem = <{T: Type}> (lhs: T, rhs: T) -> T;"));
			page.text(`Division remainder. ${html.highlight("T")} must be ${terms.get("integral")}, a ${terms.get("vector")} of ${terms.get("integral")}, ${terms.get("floating-point")},  or a ${terms.get("vector")} of ${terms.get("floating-point")}.`);

			page.h2Searchable("@fneg", "fneg");
			page.text(page.inlineCode("func @fneg = <{T: Type}> (arg: T) -> T;"));
			page.text(`Float negation. ${html.highlight("T")} must be ${terms.get("floating-point")} or a ${terms.get("vector")} of ${terms.get("floating-point")}.`);
		}
	);
}

