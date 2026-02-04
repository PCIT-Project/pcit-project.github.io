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
				path        : "documentation/panther/intrinsics/comparative_intrinsics.html",
				title       : "Comparative Intrinsics",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				description : "Documentation for comparative intrinsics in the Panther programming language",
			});
		},
		(page) => {
			page.h2Searchable("@eq", "eq");
			page.text(page.inlineCode("func @eq = <{T: Type}> (lhs: T, rhs: T) -> Bool;"));
			page.text(`Calcualte equality. ${html.highlight("T")} must be ${terms.get("primitive")} (excluding ${page.inlineCode("Void")}), ${terms.get("vector")} or $fterms.get("primitive")}, (excluding ${page.inlineCode("Void")}) or ${terms.get("pointer")}.`);

			page.h2Searchable("@neq", "neq");
			page.text(page.inlineCode("func @neq = <{T: Type}> (lhs: T, rhs: T) -> Bool;"));
			page.text(`Calcualte non-equality. ${html.highlight("T")} must be ${terms.get("primitive")} (excluding ${page.inlineCode("Void")}), ${terms.get("vector")} or $fterms.get("primitive")}, (excluding ${page.inlineCode("Void")}) or ${terms.get("pointer")}.`);

			page.h2Searchable("@lt", "lt");
			page.text(page.inlineCode("func @lt = <{T: Type}> (lhs: T, rhs: T) -> Bool;"));
			page.text(`Calcualte less than. ${html.highlight("T")} must be ${terms.get("primitive")} (excluding ${page.inlineCode("Void")}, ${page.inlineCode("RawPtr")}, and ${page.inlineCode("TypeID")}) or a ${terms.get("vector")} of ${terms.get("primitive")} (excluding ${page.inlineCode("Void")}, ${page.inlineCode("RawPtr")}, and ${page.inlineCode("TypeID")}).`);

			page.h2Searchable("@lte", "lte");
			page.text(page.inlineCode("func @lte = <{T: Type}> (lhs: T, rhs: T) -> Bool;"));
			page.text(`Calcualte less than or equal to. ${html.highlight("T")} must be ${terms.get("primitive")} (excluding ${page.inlineCode("Void")}, ${page.inlineCode("RawPtr")}, and ${page.inlineCode("TypeID")}) or a ${terms.get("vector")} of ${terms.get("primitive")} (excluding ${page.inlineCode("Void")}, ${page.inlineCode("RawPtr")}, and ${page.inlineCode("TypeID")}).`);

			page.h2Searchable("@gt", "gt");
			page.text(page.inlineCode("func @gt = <{T: Type}> (lhs: T, rhs: T) -> Bool;"));
			page.text(`Calcualte greater than. ${html.highlight("T")} must be ${terms.get("primitive")} (excluding ${page.inlineCode("Void")}, ${page.inlineCode("RawPtr")}, and ${page.inlineCode("TypeID")}) or a ${terms.get("vector")} of ${terms.get("primitive")} (excluding ${page.inlineCode("Void")}, ${page.inlineCode("RawPtr")}, and ${page.inlineCode("TypeID")}).`);

			page.h2Searchable("@gte", "gte");
			page.text(page.inlineCode("func @gte = <{T: Type}> (lhs: T, rhs: T) -> Bool;"));
			page.text(`Calcualte greater than or equal to. ${html.highlight("T")} must be ${terms.get("primitive")} (excluding ${page.inlineCode("Void")}, ${page.inlineCode("RawPtr")}, and ${page.inlineCode("TypeID")}) or a ${terms.get("vector")} of ${terms.get("primitive")} (excluding ${page.inlineCode("Void")}, ${page.inlineCode("RawPtr")}, and ${page.inlineCode("TypeID")}).`);
		}
	);
}


