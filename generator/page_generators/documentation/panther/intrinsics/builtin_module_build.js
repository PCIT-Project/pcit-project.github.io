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
			syntax_highlighting.addPantherIntrinsicType("@build.PantherBuildConfigOutput", page, "PantherBuildConfigOutput");
			syntax_highlighting.addPantherIntrinsicType("@build.PantherBuildConfigExecutableOutput", page, "PantherBuildConfigExecutableOutput");
			syntax_highlighting.addPantherIntrinsicType("@build.PantherBuildConfigObjectOutput", page, "PantherBuildConfigObjectOutput");
			syntax_highlighting.addPantherIntrinsicType("@build.PantherBuildConfigAssemblyOutput", page, "PantherBuildConfigAssemblyOutput");
			syntax_highlighting.addPantherIntrinsicType("@build.PantherBuildConfigLLVMIROutput", page, "PantherBuildConfigLLVMIROutput");
			syntax_highlighting.addPantherIntrinsicType("@build.PantherBuildConfigPIROutput", page, "PantherBuildConfigPIROutput");
			syntax_highlighting.addPantherIntrinsicType("@build.PantherBuildConfigASTOutput", page, "PantherBuildConfigASTOutput");
			syntax_highlighting.addPantherIntrinsicType("@build.PantherBuildConfigTokensOutput", page, "PantherBuildConfigTokensOutput");
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
`type PantherBuildConfig = struct #ordered {
	var output         : @build.PantherBuildConfigOutput;
	var numThreads     : UI32; // 0 means single-threaded
	var addDebugInfo   : Bool;
	var packages       : [@build.PantherBuildConfigPackage:*];
	var cFamilyHeaders : [@build.PantherBuildConfigCFamilyHeader:*];
}`
			));
			page.text(`Struct to describe a panther build. Meant for use with ${page.inlineCode("@createPantherBuild")}.`);


			page.h2Anchor("PantherBuildConfigOutput", "PantherBuildConfigOutput");
			search.addSearchTarget("@build.PantherBuildConfigOutput", page.path + "#PantherBuildConfigOutput", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PantherBuildConfigOutput = union {
	tokens           : @build.PantherBuildConfigObjectOutput,
	ast              : @build.PantherBuildConfigAssemblyOutput,
	semanticAnalysis : Void,
	pir              : @build.PantherBuildConfigLLVMIROutput,
	llvmir           : @build.PantherBuildConfigPIROutput,
	assembly         : @build.PantherBuildConfigASTOutput,
	object           : @build.PantherBuildConfigTokensOutput,
	run              : Void,
	executable       : @build.PantherBuildConfigExecutableOutput,
}`
			));
			page.text(`Struct to describe a panther build output.`);


			page.h2Anchor("PantherBuildConfigExecutableOutput", "PantherBuildConfigExecutableOutput");
			search.addSearchTarget("@build.PantherBuildConfigExecutableOutput", page.path + "#PantherBuildConfigExecutableOutput", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PantherBuildConfigExecutableOutput = struct #ordered {
	var path       : [Char:*];
	var objectPath : [Char:*];
	var isConsole  : Bool; // meaningless if not targeting Windows
}`
			));
			page.text(`Struct to describe a panther build for an exectuable output.`);

			page.h2Anchor("PantherBuildConfigObjectOutput", "PantherBuildConfigObjectOutput");
			search.addSearchTarget("@build.PantherBuildConfigObjectOutput", page.path + "#PantherBuildConfigObjectOutput", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PantherBuildConfigObjectOutput = struct #ordered {
	var path: [Char:*];
}`
			));
			page.text(`Struct to describe a panther build for an object output.`);

			page.h2Anchor("PantherBuildConfigAssemblyOutput", "PantherBuildConfigAssemblyOutput");
			search.addSearchTarget("@build.PantherBuildConfigAssemblyOutput", page.path + "#PantherBuildConfigAssemblyOutput", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PantherBuildConfigAssemblyOutput = struct #ordered {
	var path: [Char:*]?; // null to print to stdout
}`
			));
			page.text(`Struct to describe a panther build for an assembly output.`);

			page.h2Anchor("PantherBuildConfigLLVMIROutput", "PantherBuildConfigLLVMIROutput");
			search.addSearchTarget("@build.PantherBuildConfigLLVMIROutput", page.path + "#PantherBuildConfigLLVMIROutput", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PantherBuildConfigLLVMIROutput = struct #ordered {
	var path: [Char:*]?; // null to print to stdout
}`
			));
			page.text(`Struct to describe a panther build for an LLVM-IR output.`);

			page.h2Anchor("PantherBuildConfigPIROutput", "PantherBuildConfigPIROutput");
			search.addSearchTarget("@build.PantherBuildConfigPIROutput", page.path + "#PantherBuildConfigPIROutput", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PantherBuildConfigPIROutput = struct #ordered {
	var path: [Char:*]?; // null to print to stdout
}`
			));
			page.text(`Struct to describe a panther build for a PIR output.`);

			page.h2Anchor("PantherBuildConfigASTOutput", "PantherBuildConfigASTOutput");
			search.addSearchTarget("@build.PantherBuildConfigASTOutput", page.path + "#PantherBuildConfigASTOutput", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PantherBuildConfigASTOutput = struct #ordered {
	var path: [Char:*]?; // null to print to stdout
}`
			));
			page.text(`Struct to describe a panther build for an AST output.`);

			page.h2Anchor("PantherBuildConfigTokensOutput", "PantherBuildConfigTokensOutput");
			search.addSearchTarget("@build.PantherBuildConfigTokensOutput", page.path + "#PantherBuildConfigTokensOutput", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PantherBuildConfigTokensOutput = struct #ordered {
	var path: [Char:*]?; // null to print to stdout
}`
			));
			page.text(`Struct to describe a panther build for a tokens output.`);


			page.h2Anchor("PantherBuildConfigPackage", "PantherBuildConfigPackage");
			search.addSearchTarget("@build.PantherBuildConfigPackage", page.path + "#PantherBuildConfigPackage", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PantherBuildConfigPackage = struct #ordered {
	var path              : [Char:*];
	var name              : [Char:*];
	var warnings          : @build.PackageWarningSettings;
	var sourceFiles       : [[Char:*]:*];
	var sourceDirectories : [@build.PantherBuildConfigDirectory:*];
}`
			));
			page.text("Struct to describe a package for a panther build.");


			page.h2Anchor("PantherBuildConfigDirectory", "PantherBuildConfigDirectory");
			search.addSearchTarget("@build.PantherBuildConfigDirectory", page.path + "#PantherBuildConfigDirectory", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PantherBuildConfigDirectory = struct #ordered {
	var path        : [Char:*];
	var isRecursive : Bool;
}`
			));
			page.text("Struct to describe a source directory for a panther build.");


			page.h2Anchor("PantherBuildConfigCFamilyHeader", "PantherBuildConfigCFamilyHeader");
			search.addSearchTarget("@build.PantherBuildConfigCFamilyHeader", page.path + "#PantherBuildConfigCFamilyHeader", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PantherBuildConfigCFamilyHeader = struct #ordered {
	var path                : [Char:*];
	var isCPP               : Bool;
	var addIncludesToPubApi : Bool;
}`
			));
			page.text("Struct to describe a c-family header for a panther build.");


			page.h2Anchor("PackageWarningSettings", "PackageWarningSettings");
			search.addSearchTarget("@build.PackageWarningSettings", page.path + "#PackageWarningSettings", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PackageWarningSettings = struct #ordered {
	var methodCallOnNonMethod        : Bool = true;
	var deleteMovedFromExpr          : Bool = true;
	var deleteTriviallyDeletableType : Bool = true;
	var comptimeIfCond               : Bool = true;
	var alreadyUnsafe                : Bool = true;
	var experimentalF80              : Bool = true;
}`
			));
			page.text("Struct for which warning should be enabled for a package.");

		}
	);
}



