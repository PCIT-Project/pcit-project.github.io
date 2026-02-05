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
				path                : "documentation/panther/intrinsics/xor.html",
				title               : "@xor",
				categories          : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs         : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				on_site_description : "Bitwise xor",
				symbol_kind         : Page.SymbolKind.INTRINSIC_FUNCTION,
			})
		},
		(page) => {
			page.addSymbolDecls(["func @xor = <{T: Type}> (lhs: T, rhs: T) -> T;"]);

			page.addSymbolDescription(`Bitwise xor.`);


			page.addSymbolTemplateParams([
				new Page.TemplateParam("T", `type of arguments and output - must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}`),
			]);


			page.addSymbolParams([
				new Page.Param("lhs", "left-hand-side value of operation"),
				new Page.Param("rhs", "right-hand-side value of operation"),
			]);


			page.addSymbolReturn("Result value of the bitwise xor");


			page.addSymbolExampleTodo();

			page.addSymbolSeeAlso(["@and", "@or"]);
		}
	);
}
