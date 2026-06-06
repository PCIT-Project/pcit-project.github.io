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
const syntax_highlighting = require("../../../../syntax_highlighting/syntax_highlighting.js");



exports.getPageGenerator = function(){
	return new (require("../../../../PageGenerator.js").PageGenerator)(
		() => {
			let page = new Page.Page(__filename, {
				path        : "documentation/panther/intrinsics/builtin_module_config.html",
				title       : "Builtin Module @config",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				description : "Documentation for the builtin module @config in the Panther programming language",
			});
			
			syntax_highlighting.addPantherIntrinsicType("@config.architecture", page, "architecture");
			syntax_highlighting.addPantherIntrinsicType("@config.platform", page, "platform");
			syntax_highlighting.addPantherIntrinsicType("@config.mode", page, "mode");
			syntax_highlighting.addPantherIntrinsicType("@config.optMode", page, "optMode");

			return page;
		},
		(page) => {
			
			page.h2Anchor("architecture", "architecture");
			search.addSearchTarget("@config.architecture", page.path + "#architecture", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`def architecture: @pthr.Architecture;`
			));
			page.text(`Get the current architecture the compiler is compiling for / on.`);


			page.h2Anchor("platform", "platform");
			search.addSearchTarget("@config.platform", page.path + "#platform", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`def platform: @pthr.Platform;`
			));
			page.text(`Get the current platform the compiler is compiling for / on.`);


			page.h2Anchor("mode", "mode");
			search.addSearchTarget("@config.mode", page.path + "#mode", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`def mode: @pthr.Mode;`
			));
			page.text(`Get the current mode the compiler is running in.`);


			page.h2Anchor("optMode", "optMode");
			search.addSearchTarget("@config.optMode", page.path + "#optMode", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`def optMode: @pthr.OptMode;`
			));
			page.text(`Get the current optimization mode the compiler compiling with.`);


			page.h2Anchor("includeDebugInfo", "includeDebugInfo");
			search.addSearchTarget("@config.includeDebugInfo", page.path + "#includeDebugInfo", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`def includeDebugInfo: Bool;`
			));
			page.text(`Get if the compiler is including debug info.`);


		}
	);
}

