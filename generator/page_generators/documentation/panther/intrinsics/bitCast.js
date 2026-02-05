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
				path                : "documentation/panther/intrinsics/bitCast.html",
				title               : "@bitCast",
				categories          : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs         : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				on_site_description : "Bitwise convert a value of any type to any other tpe of the same size",
				symbol_kind         : Page.SymbolKind.INTRINSIC_FUNCTION,
			})
		},
		(page) => {
			page.addSymbolDecls(["func @bitCast = <{FROM: Type, TO: Type}> (from: FROM) #unsafe -> TO;"]);

			page.addSymbolDescription(`Bitwise convert a value of any type to any other tpe of the same size. Requires that ${page.inlineCode("@numBytes<{FROM, true}>() == @numBytes<{TO, true}>()")}.`);


			page.addSymbolTemplateParams([
				new Page.TemplateParam("FROM", `type to convert from - cannot be type ${page.inlineCode("Void")}`),
				new Page.TemplateParam("TO", `type to convert to - cannot be type ${page.inlineCode("Void")}`),
			]);


			page.addSymbolParams([
				new Page.Param("from", "value to convert"),
			]);

			page.addSymbolReturn("Returns converted value");



			page.addSymbolExampleTodo();

			page.addSymbolSeeAlsoNone();
		}
	);
}
