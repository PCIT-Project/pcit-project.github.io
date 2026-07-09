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
				path                : "documentation/panther/intrinsics/panic.html",
				title               : "@panic",
				categories          : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs         : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				on_site_description : "Direclty call the panic handler",
				symbol_kind         : Page.SymbolKind.INTRINSIC_FUNCTION,
			});
		},
		(page) => {
			page.addSymbolDecls(["func @panic = (message: [Char:*]) #noReturn -> Void;"]);

			page.addSymbolDescription("Direclty call the panic handler.");

			page.addSymbolParams([
				new Page.Param("message", "message to send to the panic handler"),
			]);

			page.addSymbolReturnVoid();

			page.addSymbolExampleTodo();

			page.addSymbolSeeAlso(["@entry"]);
		}
	);
}

