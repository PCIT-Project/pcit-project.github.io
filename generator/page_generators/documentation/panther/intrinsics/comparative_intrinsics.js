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



exports.getPageGenerator = function(){
	return new (require("../../../../PageGenerator.js").PageGenerator)(
		() => {
			return new Page(__filename, {
				path        : "documentation/panther/intrinsics/comparative_intrinsics.html",
				title       : "Comparative Intrinsics",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION, breadcrumbs.PANTHER_INTRINSICS],
				description : "Documentation for comparative intrinsics in the Panther programming language",
			});
		},
		(page) => {
			page.h2Searchable("@eq", "eq");
			page.text(page.inline_code(Language.PANTHER, "func @eq = <{T: Type}> (lhs: T, rhs: T) -> Bool;"));
			page.text(`Calcualte equality. ${html.inline_code("T")} must be ${terms.get("primitive")} (excluding ${page.inline_code(Language.PANTHER, "Void")}), ${terms.get("vector")} or $fterms.get("primitive")}, (excluding ${page.inline_code(Language.PANTHER, "Void")}) or ${terms.get("pointer")}.`);

			page.h2Searchable("@neq", "neq");
			page.text(page.inline_code(Language.PANTHER, "func @neq = <{T: Type}> (lhs: T, rhs: T) -> Bool;"));
			page.text(`Calcualte non-equality. ${html.inline_code("T")} must be ${terms.get("primitive")} (excluding ${page.inline_code(Language.PANTHER, "Void")}), ${terms.get("vector")} or $fterms.get("primitive")}, (excluding ${page.inline_code(Language.PANTHER, "Void")}) or ${terms.get("pointer")}.`);

			page.h2Searchable("@lt", "lt");
			page.text(page.inline_code(Language.PANTHER, "func @lt = <{T: Type}> (lhs: T, rhs: T) -> Bool;"));
			page.text(`Calcualte less than. ${html.inline_code("T")} must be ${terms.get("primitive")} (excluding ${page.inline_code(Language.PANTHER, "Void")}, ${page.inline_code(Language.PANTHER, "RawPtr")}, and ${page.inline_code(Language.PANTHER, "TypeID")}) or a ${terms.get("vector")} of ${terms.get("primitive")} (excluding ${page.inline_code(Language.PANTHER, "Void")}, ${page.inline_code(Language.PANTHER, "RawPtr")}, and ${page.inline_code(Language.PANTHER, "TypeID")}).`);

			page.h2Searchable("@lte", "lte");
			page.text(page.inline_code(Language.PANTHER, "func @lte = <{T: Type}> (lhs: T, rhs: T) -> Bool;"));
			page.text(`Calcualte less than or equal to. ${html.inline_code("T")} must be ${terms.get("primitive")} (excluding ${page.inline_code(Language.PANTHER, "Void")}, ${page.inline_code(Language.PANTHER, "RawPtr")}, and ${page.inline_code(Language.PANTHER, "TypeID")}) or a ${terms.get("vector")} of ${terms.get("primitive")} (excluding ${page.inline_code(Language.PANTHER, "Void")}, ${page.inline_code(Language.PANTHER, "RawPtr")}, and ${page.inline_code(Language.PANTHER, "TypeID")}).`);

			page.h2Searchable("@gt", "gt");
			page.text(page.inline_code(Language.PANTHER, "func @gt = <{T: Type}> (lhs: T, rhs: T) -> Bool;"));
			page.text(`Calcualte greater than. ${html.inline_code("T")} must be ${terms.get("primitive")} (excluding ${page.inline_code(Language.PANTHER, "Void")}, ${page.inline_code(Language.PANTHER, "RawPtr")}, and ${page.inline_code(Language.PANTHER, "TypeID")}) or a ${terms.get("vector")} of ${terms.get("primitive")} (excluding ${page.inline_code(Language.PANTHER, "Void")}, ${page.inline_code(Language.PANTHER, "RawPtr")}, and ${page.inline_code(Language.PANTHER, "TypeID")}).`);

			page.h2Searchable("@gte", "gte");
			page.text(page.inline_code(Language.PANTHER, "func @gte = <{T: Type}> (lhs: T, rhs: T) -> Bool;"));
			page.text(`Calcualte greater than or equal to. ${html.inline_code("T")} must be ${terms.get("primitive")} (excluding ${page.inline_code(Language.PANTHER, "Void")}, ${page.inline_code(Language.PANTHER, "RawPtr")}, and ${page.inline_code(Language.PANTHER, "TypeID")}) or a ${terms.get("vector")} of ${terms.get("primitive")} (excluding ${page.inline_code(Language.PANTHER, "Void")}, ${page.inline_code(Language.PANTHER, "RawPtr")}, and ${page.inline_code(Language.PANTHER, "TypeID")}).`);
		}
	);
}


