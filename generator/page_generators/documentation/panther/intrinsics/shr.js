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
				path                : "documentation/panther/intrinsics/shr.html",
				title               : "@shr",
				categories          : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs         : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				on_site_description : "Bitwise saturating shift left",
				symbol_kind         : Page.SymbolKind.INTRINSIC_FUNCTION,
			})
		},
		(page) => {
			page.addSymbolDecls(["func @shr = <{T: Type, SHIFT_T: Type}> (lhs: T, rhs: SHIFT_T) -> T;"]);

			page.addSymbolDescription(`Bitwise saturating shift left.`);


			page.addSymbolTemplateParams([
				new Page.TemplateParam("T", `type of value to bitwise saturating shift left - must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}`),
				new Page.TemplateParam("SHIFT_T", `must be ${terms.get("unsigned integral")} with a width of ${page.inlineCode("ceil(log2(@numBits<{T, false}>()))")} (${html.italic("this restriction most likely will change in the future, but more consideration is required")}).`),
			]);


			page.addSymbolParams([
				new Page.Param("lhs", "value to bitwise saturating shift left"),
				new Page.Param("rhs", `amount to bitwise saturating shift left ${html.highlight("value")} by`)
			]);


			page.addSymbolReturn("Returns the result of the bitwise saturating shift left");


			page.addSymbolExampleTodo();

			page.addSymbolSeeAlso(["@shl", "@shlSat"]);
		}
	);
}
