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
				path                : "documentation/panther/intrinsics/getTypeID.html",
				title               : "@getTypeID",
				categories          : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs         : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				on_site_description : `Get the ${html.highlight("TypeID")} of a type`,
				symbol_kind         : Page.SymbolKind.INTRINSIC_FUNCTION,
			})
		},
		(page) => {
			page.addSymbolDecls(["func @getTypeID = <{T: Type}> () -> TypeID;"]);

			page.addSymbolDescription(`Get the ${page.inlineCode("TypeID")} of a type.`);


			page.addSymbolTemplateParams([
				new Page.TemplateParam("T", `The type to get the ${page.inlineCode("TypeID")} of - cannot be ${page.inlineCode("Void")}`),
			]);


			page.addSymbolParams([]);

			page.addSymbolReturn(`The ${page.inlineCode("TypeID")} of type ${html.highlight("T")}`);



			page.addSymbolExampleTodo();

			page.addSymbolSeeAlso(["@arrayElementTypeID", "@arrayRefElementTypeID"]);
		}
	);
}
