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
				path        : "documentation/panther/intrinsics/bitwise_intrinsics.html",
				title       : "Bitwise Intrinsics",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				description : "Documentation for bitwise intrinsics in the Panther programming language",
			});
		},
		(page) => {
			page.h2Searchable("@and", "and");
			page.text(page.inlineCode("func @and = <{T: Type}> (lhs: T, rhs: T) -> T;"));
			page.text(`Bitwise and. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

			page.h2Searchable("@or", "or");
			page.text(page.inlineCode("func @or = <{T: Type}> (lhs: T, rhs: T) -> T;"));
			page.text(`Bitwise or. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

			page.h2Searchable("@xor", "xor");
			page.text(page.inlineCode("func @xor = <{T: Type}> (lhs: T, rhs: T) -> T;"));
			page.text(`Bitwise exclusive or. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

			page.h2Searchable("@shl", "shl");
			page.text(page.inlineCode("func @shl = <{T: Type, SHIFT_T: Type, MAY_WRAP: Bool}> (lhs: T, rhs: SHIFT_T) -> T;"));
			page.text(`Bitwise shift left. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}. ${html.highlight("SHIFT_T")} must be ${terms.get("unsigned integral")} with a width of ${page.inlineCode("ceil(log2(@numBits<{T, false}>()))")}`);
			page.text(`If ${html.highlight("T")} is ${terms.get("unsigned integral")} and ${html.highlight("MAY_WRAP")} is ${page.inlineCode("false")}, it is ${terms.get("undefined behavior")} if any ${html.highlight("1")} bits are shifted out.`);
			page.text(`If ${html.highlight("T")} is ${terms.get("signed integral")} and ${html.highlight("MAY_WRAP")} is ${page.inlineCode("false")}, it is ${terms.get("undefined behavior")} if the result is a different sign than lhs.`);

			page.h2Searchable("@shlSat", "shlSat");
			page.text(page.inlineCode("func @shlSat = <{T: Type, SHIFT_T: Type}> (lhs: T, rhs: T) -> T;"));
			page.text(`Bitwise saturating shift left. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}. ${html.highlight("SHIFT_T")} must be ${terms.get("unsigned integral")} with a width of ${page.inlineCode("ceil(log2(@numBits<{T, false}>()))")} (${html.italic("this restriction most likely will change in the future, but more consideration is required")}).`);

			page.h2Searchable("@shr", "shr");
			page.text(page.inlineCode("func @shr = <{T: Type, SHIFT_T: Type, MAY_WRAP: Bool}> (lhs: T, rhs: SHIFT_T) -> T;"));
			page.text(`Bitwise shift right. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}. ${html.highlight("SHIFT_T")} must be ${terms.get("unsigned integral")} with a width of ${page.inlineCode("ceil(log2(@numBits<{T, false}>()))")}.`);
			page.text(`If ${html.highlight("MAY_WRAP")} is ${page.inlineCode("false")}, it is ${terms.get("undefined behavior")} if any ${html.highlight("1")} bits are shifted out.`);

			page.h2Searchable("@bitReverse", "bitReverse");
			page.text(page.inlineCode("func @bitReverse = <{T: Type}> (arg: T) -> T;"));
			page.text(`Reverse the bits. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

			page.h2Searchable("@byteSwap", "byteSwap");
			page.text(page.inlineCode("func @byteSwap = <{T: Type}> (arg: T) -> T;"));
			page.text(`Swap the bytes . ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}, and must have an even number of bytes (bit-width is a multiple of 16).`);

			page.h2Searchable("@ctPop", "ctPop");
			page.text(page.inlineCode("func @ctPop = <{T: Type}> (arg: T) -> T;"));
			page.text(`Count the number of one bits. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

			page.h2Searchable("@ctlz", "ctlz");
			page.text(page.inlineCode("func @ctlz = <{T: Type}> (arg: T) -> T;"));
			page.text(`Count number of leading zero bits. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);

			page.h2Searchable("@cttz", "cttz");
			page.text(page.inlineCode("func @cttz = <{T: Type}> (arg: T) -> T;"));
			page.text(`Count number of trailing zero bits. ${html.highlight("T")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}.`);
		}
	);
}

