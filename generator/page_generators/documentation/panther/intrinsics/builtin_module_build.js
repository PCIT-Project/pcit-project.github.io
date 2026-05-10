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
				path        : "documentation/panther/intrinsics/builtin_module_build.html",
				title       : "Builtin Module @build",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				description : "Documentation for the builtin module @build in the Panther programming language",
			});

			syntax_highlighting.addPantherIntrinsicType("@build.PantherBuildConfig", page, "PantherBuildConfig");
			syntax_highlighting.addPantherIntrinsicType("@build.PantherBuildConfigPackage", page, "PantherBuildConfigPackage");
			syntax_highlighting.addPantherIntrinsicType("@build.PantherBuildConfigDirectory", page, "PantherBuildConfigDirectory");
			syntax_highlighting.addPantherIntrinsicType("@build.PantherBuildConfigCFamilyHeader", page, "PantherBuildConfigCFamilyHeader");
			syntax_highlighting.addPantherIntrinsicType("@build.PackageWarningSettings", page, "PackageWarningSettings");

			return page;
		},
		(page) => {
			page.h2Anchor("PantherBuildConfig", "PantherBuildConfig");
			search.addSearchTarget("@build.PantherBuildConfig", page.path + "#PantherBuildConfig", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PantherBuildConfig = struct {
	var output         : UI32; // an enum (changing in the future)
	var numThreads     : UI32; // 0 means single-threaded
	var addDebugInfo   : Bool;
	var packages       : [@build.PantherBuildConfigPackage:*];
	var cFamilyHeaders : [@build.PantherBuildConfigCFamilyHeader:*];
}`
			));
			page.text(`Structure to describe a panther build. Meant for use with ${page.inlineCode("@createPantherBuild")}.`);


			page.h2Anchor("PantherBuildConfigPackage", "PantherBuildConfigPackage");
			search.addSearchTarget("@build.PantherBuildConfigPackage", page.path + "#PantherBuildConfigPackage", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PantherBuildConfigPackage = struct {
	var path              : [Char:*];
	var name              : [Char:*];
	var warnings          : @build.PackageWarningSettings;
	var sourceFiles       : [[Char:*]:*];
	var sourceDirectories : [@build.PantherBuildConfigDirectory:*];
}`
			));
			page.text("Structure to describe a package for a panther build.");



			page.h2Anchor("PantherBuildConfigDirectory", "PantherBuildConfigDirectory");
			search.addSearchTarget("@build.PantherBuildConfigDirectory", page.path + "#PantherBuildConfigDirectory", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PantherBuildConfigDirectory = struct {
	var path        : [Char:*];
	var isRecursive : Bool;
}`
			));
			page.text("Structure to describe a source directory for a panther build.");


			page.h2Anchor("PantherBuildConfigCFamilyHeader", "PantherBuildConfigCFamilyHeader");
			search.addSearchTarget("@build.PantherBuildConfigCFamilyHeader", page.path + "#PantherBuildConfigCFamilyHeader", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PantherBuildConfigCFamilyHeader = struct {
	var path                : [Char:*];
	var isCPP               : Bool;
	var addIncludesToPubApi : Bool;
}`
			));
			page.text("Structure to describe a c-family header for a panther build.");


			page.h2Anchor("PackageWarningSettings", "PackageWarningSettings");
			search.addSearchTarget("@build.PackageWarningSettings", page.path + "#PackageWarningSettings", page.categories);
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



