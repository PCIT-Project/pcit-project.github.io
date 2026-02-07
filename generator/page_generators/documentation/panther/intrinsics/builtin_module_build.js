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
				path        : "documentation/panther/intrinsics/builtin_module_build.html",
				title       : "Builtin Module @build",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				description : "Documentation for the builtin module @build in the Panther programming language",
			});
		},
		(page) => {
			page.h2Anchor("PackageID", "PackageID");
			search.addSearchTarget("@pthr.PackageID", page.path + "#PackageID", page.categories);
			page.text(page.inlineCode(`type PackageID = alias UI32;`));
			page.text("Unique ID for a package.");


			page.h2Anchor("PackageWarningSettings", "PackageWarningSettings");
			search.addSearchTarget("@pthr.PackageWarningSettings", page.path + "#PackageWarningSettings", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PackageWarningSettings = struct {
	var methodCallOnNonMethod        : Bool = true;
	var deleteMovedFromExpr          : Bool = true;
	var deleteTriviallyDeletableType : Bool = true;
	var comptimeIfCond               : Bool = true;
	var alreadyUnsafe                : Bool = true;
	var experimentalF80              : Bool = true;
}`
		));
			page.text("Structure for which warning should be enabled for a package.");
		}
	);
}



