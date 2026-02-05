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
				path                : "documentation/panther/intrinsics/trunc.html",
				title               : "@trunc",
				categories          : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs         : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				on_site_description : `Truncate any ${terms.get("integral")} type to any other smaller ${terms.get("integral")} type`,
				symbol_kind         : Page.SymbolKind.INTRINSIC_FUNCTION,
			})
		},
		(page) => {
			page.addSymbolDecls(["func @trunc = <{FROM: Type, TO: Type}> (from: FROM) #unsafe -> TO;"]);

			page.addSymbolDescription(`Truncate any ${terms.get("integral")} type to any other smaller ${terms.get("integral")} type. Requires that ${page.inlineCode("@numBits<{FROM, false}>() > @numBits<{TO, false}>()")}.`);


			page.addSymbolTemplateParams([
				new Page.TemplateParam("FROM", `type to convert from - must be ${terms.get("integral")} or ${terms.get("vector")} or ${terms.get("integral")}`),
				new Page.TemplateParam("TO", `type to convert to - must be ${terms.get("integral")} or ${terms.get("vector")} or ${terms.get("integral")}`),
			]);


			page.addSymbolParams([
				new Page.Param("from", "value to convert"),
			]);

			page.addSymbolReturn("Returns converted value");


			page.addSymbolNotes(`${html.highlight("FROM")} and ${html.highlight("TO")} must be both a ${terms.get("vector")} or neither a ${terms.get("vector")}. If they are a ${terms.get("vector")}, they must contain the same number of elements.`);


			page.addSymbolExampleTodo();

			page.addSymbolSeeAlso(["@ftrunc"]);
		}
	);
}
