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
				path                : "documentation/panther/intrinsics/shl.html",
				title               : "@shl",
				categories          : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs         : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				on_site_description : "Bitwise shift left",
				symbol_kind         : Page.SymbolKind.INTRINSIC_FUNCTION,
			})
		},
		(page) => {
			page.addSymbolDecls(["func @shl = <{T: Type, SHIFT_T: Type, MAY_WRAP: Bool}> (lhs: T, rhs: SHIFT_T) -> T;"]);

			page.addSymbolDescription(`Bitwise shift left.`);


			page.addSymbolTemplateParams([
				new Page.TemplateParam("T", `type of value to bitwise shift left - must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}`),
				new Page.TemplateParam("SHIFT_T", `must be ${terms.get("unsigned integral")} with a width of ${page.inlineCode("ceil(log2(@numBits<{T, false}>()))")}`),
				new Page.TemplateParam("MAY_WRAP", `If ${page.inlineCode("true")}, operation is allowed to wrap`),
			]);


			page.addSymbolParams([
				new Page.Param("lhs", "value to bitwise shift left"),
				new Page.Param("rhs", `amount to bitwise shift left ${html.highlight("value")} by`)
			]);


			page.addSymbolReturn("Returns the result of the bitwise shift left");

			page.addSymbolNotes(`If ${html.highlight("T")} is ${terms.get("unsigned integral")} and ${html.highlight("MAY_WRAP")} is ${page.inlineCode("false")}, it is ${terms.get("undefined behavior")} if any ${html.highlight("1")} bits are shifted out.`);
			page.paragraph(`If ${html.highlight("T")} is ${terms.get("signed integral")} and ${html.highlight("MAY_WRAP")} is ${page.inlineCode("false")}, it is ${terms.get("undefined behavior")} if the result is a different sign than lhs.`)



			page.addSymbolExampleTodo();

			page.addSymbolSeeAlso(["@shlSat", "@shr"]);
		}
	);
}
