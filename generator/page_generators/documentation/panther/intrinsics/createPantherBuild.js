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
				path                : "documentation/panther/intrinsics/createPantherBuild.html",
				title               : "@createPantherBuild",
				categories          : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs         : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				on_site_description : "Create a Panther Build in the build-system",
				symbol_kind         : Page.SymbolKind.INTRINSIC_FUNCTION,
			})
		},
		(page) => {
			page.addSymbolDecls(["func @createPantherBuild = (config: @build.PantherBuildConfig) -> Bool;"]);

			page.addSymbolDescription(`Create a panther build in the build system. This function is only available in build-system mode.`);


			page.addSymbolParams([
				new Page.Param("config", "build configuration"),
			]);


			page.addSymbolReturn(`Result of the panther build (${page.inlineCode("true")} if no errors).`);


			page.addSymbolExampleTodo();

			page.addSymbolSeeAlsoNone();
		}
	);
}
