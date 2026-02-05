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
				path                : "documentation/panther/intrinsics/breakpoint.html",
				title               : "@breakpoint",
				categories          : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs         : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				on_site_description : "Cause an execution trap to request the debugger break execution",
				symbol_kind         : Page.SymbolKind.INTRINSIC_FUNCTION,
			});
		},
		(page) => {
			page.addSymbolDecls(["func @breakpoint = () -> Void;"]);

			page.addSymbolDescription("Cause an execution trap to request the debugger break execution.");

			page.addSymbolParams([]);

			page.addSymbolReturnVoid();

			page.addSymbolExampleTodo();

			page.addSymbolSeeAlso(["@abort"]);
		}
	);
}

