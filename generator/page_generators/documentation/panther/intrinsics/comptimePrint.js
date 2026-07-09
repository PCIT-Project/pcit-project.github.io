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
				path                : "documentation/panther/intrinsics/comptimePrint.html",
				title               : "@comptimePrint",
				categories          : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs         : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				on_site_description : "Print to console at compile time",
				symbol_kind         : Page.SymbolKind.INTRINSIC_FUNCTION,
			});
		},
		(page) => {
			page.addSymbolDecls(["func @comptimePrint = (str: [Char:*]) #ct -> Void;"]);

			page.addSymbolDescription("Print to console at compile time.");

			page.addSymbolParams([
				new Page.Param("str", "string to print"),
			]);

			page.addSymbolReturnVoid();

			page.addSymbolExampleTodo();

			page.addSymbolSeeAlso(["@comptimePrintln"]);
		}
	);
}

