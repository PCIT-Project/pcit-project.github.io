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
				path                : "documentation/panther/intrinsics/isComptime.html",
				title               : "@isComptime",
				categories          : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs         : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				on_site_description : "Get if currently in comptime scope",
				symbol_kind         : Page.SymbolKind.INTRINSIC_FUNCTION,
			});
		},
		(page) => {
			page.addSymbolDecls(["func @isComptime = () #ct -> Bool;"]);

			page.addSymbolDescription("Gets if currently in a comptime scope. If the scope is ambiguous (both comptime and runtime), it is a compilation error.");

			page.addSymbolParams([]);

			page.addSymbolReturn("Returns true if currently in a comptime scope.");

			page.addSymbolNotes(`This function is meant for use in a function with attribute ${page.inlineCode("#rtDiff")}.`);

			page.addSymbolExampleTodo();

			page.addSymbolSeeAlsoNone();
		}
	);
}

