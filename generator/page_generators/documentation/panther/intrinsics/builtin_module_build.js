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
			syntax_highlighting.addPantherIntrinsicType("@build.BuildOutput", page, "BuildOutput");
			syntax_highlighting.addPantherIntrinsicType("@build.BuildExecutableOutput", page, "BuildExecutableOutput");
			syntax_highlighting.addPantherIntrinsicType("@build.BuildObjectOutput", page, "BuildObjectOutput");
			syntax_highlighting.addPantherIntrinsicType("@build.BuildAssemblyOutput", page, "BuildAssemblyOutput");
			syntax_highlighting.addPantherIntrinsicType("@build.BuildLLVMIROutput", page, "BuildLLVMIROutput");
			syntax_highlighting.addPantherIntrinsicType("@build.BuildPIROutput", page, "BuildPIROutput");
			syntax_highlighting.addPantherIntrinsicType("@build.BuildASTOutput", page, "BuildASTOutput");
			syntax_highlighting.addPantherIntrinsicType("@build.BuildTokensOutput", page, "BuildTokensOutput");
			syntax_highlighting.addPantherIntrinsicType("@build.PantherPackage", page, "PantherPackage");
			syntax_highlighting.addPantherIntrinsicType("@build.PackageOption", page, "PackageOption");
			syntax_highlighting.addPantherIntrinsicType("@build.PackageOptionValue", page, "PackageOptionValue");
			syntax_highlighting.addPantherIntrinsicType("@build.PantherDirectory", page, "PantherDirectory");
			syntax_highlighting.addPantherIntrinsicType("@build.CFamilyHeader", page, "CFamilyHeader");
			syntax_highlighting.addPantherIntrinsicType("@build.PackageWarningSettings", page, "PackageWarningSettings");

			return page;
		},
		(page) => {
			page.h2Anchor("PantherBuildConfig", "PantherBuildConfig");
			search.addSearchTarget("@build.PantherBuildConfig", page.path + "#PantherBuildConfig", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PantherBuildConfig = struct #ordered {
	var output         : @build.BuildOutput;
	var numThreads     : UI32; // 0 means single-threaded
	var addDebugInfo   : Bool;
	var packages       : [@build.PantherPackage:*];
	var cFamilyHeaders : [@build.CFamilyHeader:*];
}`
			));
			page.text(`Struct to describe a panther build. Meant for use with ${page.inlineCode("@createPantherBuild")}.`);


			page.h2Anchor("BuildOutput", "BuildOutput");
			search.addSearchTarget("@build.BuildOutput", page.path + "#BuildOutput", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type BuildOutput = union {
	tokens           : @build.BuildObjectOutput,
	ast              : @build.BuildAssemblyOutput,
	semanticAnalysis : Void,
	pir              : @build.BuildLLVMIROutput,
	llvmir           : @build.BuildPIROutput,
	assembly         : @build.BuildASTOutput,
	object           : @build.BuildTokensOutput,
	run              : Void,
	executable       : @build.BuildExecutableOutput,
}`
			));
			page.text(`Struct to describe a panther build output.`);


			page.h2Anchor("BuildExecutableOutput", "BuildExecutableOutput");
			search.addSearchTarget("@build.BuildExecutableOutput", page.path + "#BuildExecutableOutput", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type BuildExecutableOutput = struct #ordered {
	var path       : [Char:*];
	var objectPath : [Char:*];
	var isConsole  : Bool; // meaningless if not targeting Windows
}`
			));
			page.text(`Struct to describe a panther build for an exectuable output.`);

			page.h2Anchor("BuildObjectOutput", "BuildObjectOutput");
			search.addSearchTarget("@build.BuildObjectOutput", page.path + "#BuildObjectOutput", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type BuildObjectOutput = struct #ordered {
	var path: [Char:*];
}`
			));
			page.text(`Struct to describe a panther build for an object output.`);

			page.h2Anchor("BuildAssemblyOutput", "BuildAssemblyOutput");
			search.addSearchTarget("@build.BuildAssemblyOutput", page.path + "#BuildAssemblyOutput", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type BuildAssemblyOutput = struct #ordered {
	var path: [Char:*]?; // null to print to stdout
}`
			));
			page.text(`Struct to describe a panther build for an assembly output.`);

			page.h2Anchor("BuildLLVMIROutput", "BuildLLVMIROutput");
			search.addSearchTarget("@build.BuildLLVMIROutput", page.path + "#BuildLLVMIROutput", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type BuildLLVMIROutput = struct #ordered {
	var path: [Char:*]?; // null to print to stdout
}`
			));
			page.text(`Struct to describe a panther build for an LLVM-IR output.`);

			page.h2Anchor("BuildPIROutput", "BuildPIROutput");
			search.addSearchTarget("@build.BuildPIROutput", page.path + "#BuildPIROutput", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type BuildPIROutput = struct #ordered {
	var path: [Char:*]?; // null to print to stdout
}`
			));
			page.text(`Struct to describe a panther build for a PIR output.`);

			page.h2Anchor("BuildASTOutput", "BuildASTOutput");
			search.addSearchTarget("@build.BuildASTOutput", page.path + "#BuildASTOutput", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type BuildASTOutput = struct #ordered {
	var path: [Char:*]?; // null to print to stdout
}`
			));
			page.text(`Struct to describe a panther build for an AST output.`);

			page.h2Anchor("BuildTokensOutput", "BuildTokensOutput");
			search.addSearchTarget("@build.BuildTokensOutput", page.path + "#BuildTokensOutput", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type BuildTokensOutput = struct #ordered {
	var path: [Char:*]?; // null to print to stdout
}`
			));
			page.text(`Struct to describe a panther build for a tokens output.`);


			page.h2Anchor("PantherPackage", "PantherPackage");
			search.addSearchTarget("@build.PantherPackage", page.path + "#PantherPackage", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PantherPackage = struct #ordered {
	var path              : [Char:*];
	var name              : [Char:*];
	var warnings          : @build.PackageWarningSettings;
	var options           : [@build.PackageOption:*];
	var sourceFiles       : [[Char:*]:*];
	var sourceDirectories : [@build.PantherDirectory:*];
}`
			));
			page.text("Struct to describe a package for a panther build.");


			page.h2Anchor("PackageOption", "PackageOption");
			search.addSearchTarget("@build.PackageOption", page.path + "#PackageOption", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PackageOption = struct #ordered {
	var name  : [Char:*];
	var value : @build.PackageOptionValue;
}`
			));
			page.text("Struct to describe a package option.");

	
			page.h2Anchor("PackageOptionValue", "PackageOptionValue");
			search.addSearchTarget("@build.PackageOptionValue", page.path + "#PackageOptionValue", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PackageOptionValue = union {
	bool   : Bool,
	ui8    : UI8,
	ui16   : UI16,
	ui32   : UI32,
	ui64   : UI64,
	i8     : I8,
	i16    : I16,
	i32    : I32,
	i64    : I64,
	f32    : F32,
	f64    : F64,
	string : [Char:*],
}`
			));
			page.text("Union to describe a package option value.");


			page.h2Anchor("PantherDirectory", "PantherDirectory");
			search.addSearchTarget("@build.PantherDirectory", page.path + "#PantherDirectory", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type PantherDirectory = struct #ordered {
	var path        : [Char:*];
	var isRecursive : Bool;
}`
			));
			page.text("Struct to describe a source directory for a panther build.");


			page.h2Anchor("CFamilyHeader", "CFamilyHeader");
			search.addSearchTarget("@build.CFamilyHeader", page.path + "#CFamilyHeader", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type CFamilyHeader = struct #ordered {
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



