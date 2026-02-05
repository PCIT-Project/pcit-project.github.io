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
				path                : "documentation/panther/intrinsics/makeInitPtr.html",
				title               : "@makeInitPtr",
				categories          : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs         : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				on_site_description : "Converts an uninitialized-qualified pointer to a pointer",
				symbol_kind         : Page.SymbolKind.INTRINSIC_FUNCTION,
			});
		},
		(page) => {
			page.addSymbolDecls([
				"func @makeInitPtr = (uninit_ptr: $T*!) -> T*mut;"
			]);

			page.addSymbolDescription(`Converts an ${terms.get("uninitialized-qualified pointer")} to a ${terms.get("pointer")}. Paramter ${html.highlight("uninit_ptr")} must be ${terms.get("concrete")}, a local variable, and the ${terms.get("pointee")} must be known by the compiler to be initialized (otherwise it is a compile error).`);

			page.addSymbolParams([
				new Page.Param("uninit_ptr", "The pointer to convert")
			]);

			page.addSymbolReturn("Returns the converted pointer");

			page.addSymbolExampleTodo();

			page.addSymbolSeeAlsoNone();
		}
	);
}

