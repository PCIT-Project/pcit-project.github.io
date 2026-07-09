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
				path        : "documentation/panther/intrinsics/builtin_module_pthr.html",
				title       : "Builtin Module @pthr",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				description : "Documentation for the builtin module @pthr in the Panther programming language",
			});

			syntax_highlighting.addPantherIntrinsicType("@pthr.Architecture", page, "Architecture");
			syntax_highlighting.addPantherIntrinsicType("@pthr.Platform", page, "Platform");
			syntax_highlighting.addPantherIntrinsicType("@pthr.Mode", page, "Mode");
			syntax_highlighting.addPantherIntrinsicType("@pthr.CompilerMode", page, "CompilerMode");
			syntax_highlighting.addPantherIntrinsicType("@pthr.WindowsSubsystem", page, "WindowsSubsystem");
			syntax_highlighting.addPantherIntrinsicType("@pthr.OptMode", page, "OptMode");

			syntax_highlighting.addPantherIntrinsicType("@pthr.AtomicOrdering", page, "AtomicOrdering");
			syntax_highlighting.addPantherIntrinsicType("@pthr.AtomicRMWOp", page, "AtomicRMWOp");
			syntax_highlighting.addPantherIntrinsicType("@pthr.CallingConvention", page, "CallingConvention");

			syntax_highlighting.addPantherIntrinsicType("@pthr.Iterable", page, "Iterable");
			syntax_highlighting.addPantherIntrinsicType("@pthr.IterableRT", page, "IterableRT");
			syntax_highlighting.addPantherIntrinsicType("@pthr.IterableRef", page, "IterableRef");
			syntax_highlighting.addPantherIntrinsicType("@pthr.IterableRefRT", page, "IterableRefRT");
			syntax_highlighting.addPantherIntrinsicType("@pthr.IterableMutRef", page, "IterableMutRef");
			syntax_highlighting.addPantherIntrinsicType("@pthr.IterableMutRefRT", page, "IterableMutRefRT");
			syntax_highlighting.addPantherIntrinsicType("@pthr.Iterator", page, "Iterator");
			syntax_highlighting.addPantherIntrinsicType("@pthr.IteratorRT", page, "IteratorRT");
			syntax_highlighting.addPantherIntrinsicType("@pthr.MutIterator", page, "MutIterator");
			syntax_highlighting.addPantherIntrinsicType("@pthr.MutIteratorRT", page, "MutIteratorRT");

			return page;
		},
		(page) => {


			page.h3Anchor("Architecture", "Architecture");
			search.addSearchTarget("@pthr.Architecture", page.path + "#Architecture", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type Architecture = enum {
	X86_64,
}`
			));
			page.text(`Enum to specify the architecture compiling for / on. Use ${page.inlineCode("@config.architecture")} to access the current target architecture.`);


			page.h3Anchor("Platform", "Platform");
			search.addSearchTarget("@pthr.Platform", page.path + "#Platform", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type Platform = enum {
	WINDOWS,
	LINUX,
}`
			));
			page.text(`Enum to specify the platform compiling for / on. Use ${page.inlineCode("@config.platform")} to access the current target platform.`);

			page.h3Anchor("Mode", "Mode");
			search.addSearchTarget("@pthr.Mode", page.path + "#Mode", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type Mode = enum {
	DEBUG,
	FAST,
	SMALL,
	SAFE,
}`
			));
			page.text(`Enum to specify the bulld mode. Use ${page.inlineCode("@config.compilerMode")} to access the current mode.`);



			page.h3Anchor("CompilerMode", "CompilerMode");
			search.addSearchTarget("@pthr.CompilerMode", page.path + "#CompilerMode", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type CompilerMode = enum {
	COMPILE,
	COMPILE_RUN,
	SCRIPT,
	BUILD,
}`
			));
			page.text(`Enum to specify the compiler mode. Use ${page.inlineCode("@config.compilerMode")} to access the current mode.`);


			page.h3Anchor("WindowsSubsystem", "WindowsSubsystem");
			search.addSearchTarget("@pthr.WindowsSubsystem", page.path + "#WindowsSubsystem", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type WindowsSubsystem = enum {
	COMPILE,
	COMPILE_RUN,
	SCRIPT,
	BUILD,
}`
			));
			page.text(`Enum to specify the target windows subsystem. Use ${page.inlineCode("@config.windowsSubsystem")} to access the current windows subsystem.`);



			page.h3Anchor("OptMode", "OptMode");
			search.addSearchTarget("@pthr.OptMode", page.path + "#OptMode", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type OptMode = enum {
	NONE,
	SPEED_MINOR,
	SPEED,
	SPEED_AGRESSIVE,
	SIZE,
	SIZE_AGRESSIVE,
}`
			));
			page.text(`Enum to specify the optimization mode. Use ${page.inlineCode("@config.optMode")} to access the current optimization mode.`);


			page.h3Anchor("CallingConvention", "CallingConvention");
			search.addSearchTarget("@pthr.CallingConvention", page.path + "#CallingConvention", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type CallingConvention = enum {
	FAST,
	COLD,
	C,
	WIN_API,
}`
			));
			page.text(`Enum to specify the different function calling conventions. For use in function attribute ${page.inlineCode("#callConv")} (not including attribute ${page.inlineCode("#callConv")} means the function has the ${html.highlight("FAST")} calling convention).`);



			//////////////////////////////////////////////////////////////////////
			// internal

			page.raw("<br/><br/><br/><br/>");
			page.h2Anchor("Symbols for Internal Internal Use", "internal");

			page.paragraph(`These intrinsic types are helpers for intrinsic functions meant for internal use by the standard library.`);


			page.h3Anchor("AtomicOrdering", "AtomicOrdering");
			search.addSearchTarget("@pthr.AtomicOrdering", page.path + "#AtomicOrdering", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type AtomicOrdering = enum {
	MONOTONIC,
	ACQUIRE,
	RELEASE,
	ACQ_REL,
	SEQ_CST,
}`
			));
			page.text(`Enum to specify the different atomic orderings. All orderings guarantee atomicity. Use of any ordering other than ${html.highlight("SEQ_CST")} should only be done if the developer is 100% sure it is safe to do so.`);

			page.h4("MONOTONIC");
			page.paragraph("Has no synchronization or ordering constraints. Can be used on any atomic operation.");
			page.paragraph("This is equivalent to \"relaxed\" in C/C++.");

			page.h4("ACQUIRE");
			page.paragraph("No memory operations in the current thread can be reordered to before this operation. Can be used on load atomic operations.");

			page.h4("RELEASE");
			page.paragraph("No memory operations in the current thread can be reordered to after this operation. Can be used on store atomic operations.");

			page.h4("ACQ_REL");
			page.paragraph("Acquire Release. Performs an acquire and a release operation. No memory operations in the current thread can be reordered to before acquire or to after the release. Can be used on read-modify-write atomic operation.");

			page.h4("SEQ_CST");
			page.paragraph("Sequentially-consistent. Performs an acquire for a load, a release for a store, acquire-release for a read-modify-write operation. In addition, all threads observe all modifications in the same order. Can be used on any atomic operation.");



			page.h3Anchor("AtomicRMWOp", "AtomicRMWOp");
			search.addSearchTarget("@pthr.AtomicRMWOp", page.path + "#AtomicRMWOp", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`type AtomicRMWOp = enum {
	XCHG,
	ADD,
	SUB,
	AND,
	NAND,
	OR,
	XOR,
	MIN,
	MAX,
}`
			));
			page.paragraph(`For use in ${html.link(page.inlineCode("@atomicRMW"), "/site/documentation/panther/intrinsics/atomic_intrinsics.html#atomicRMW")} to denote the operation to use.`);



			page.h3Searchable("Iterable Interfaces");

			page.h4Anchor("Iterable / IterableRT", "Iterable");
			search.addSearchTarget("@pthr.Iterable", page.path + "#Iterable", page.categories);
			search.addSearchTarget("@pthr.IterableRT", page.path + "#Iterable", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`interface Iterable = {
	func createIterator = (this) -> impl($$:@pthr.Iterator);
	func createIterator = (this mut) -> impl($$:@pthr.MutIterator);
}

interface IterableRT = {
	func createIterator = (this) #rt -> impl($$:@pthr.Iterator);
	func createIterator = (this mut) #rt -> impl($$:@pthr.MutIterator);
}`
			));
			page.text("Interface to define iterable types. Should be used if the type uses the array iterable model.");


			page.h4Anchor("IterableRef / IterableRefRT", "IterableRef");
			search.addSearchTarget("@pthr.IterableRef", page.path + "#IterableRef", page.categories);
			search.addSearchTarget("@pthr.IterableRefRT", page.path + "#IterableRef", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`interface IterableRef = {
	func createIterator = (this) -> impl($$:@pthr.Iterator);
}

interface IterableRefRT = {
	func createIterator = (this) #rt -> impl($$:@pthr.Iterator);
}`
			));
			page.text("Interface to define iterable types. Should be used if the type uses the array reference iterable model.");


			page.h4Anchor("IterableMutRef / IterableMutRefRT", "IterableMutRef");
			search.addSearchTarget("@pthr.IterableMutRef", page.path + "#IterableMutRef", page.categories);
			search.addSearchTarget("@pthr.IterableMutRefRT", page.path + "#IterableMutRef", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`interface IterableMutRef = {
	func createIterator = (this) -> impl($$:@pthr.MutIterator);
}

interface IterableMutRefRT = {
	func createIterator = (this) #rt -> impl($$:@pthr.MutIterator);
}`
			));
			page.text("Interface to define iterable types. Should be used if the type uses the mutable array reference iterable model.");



			page.h3Searchable("Iterator Interfaces");

			page.h4Anchor("Iterator / IteratorRT", "Iterator");
			search.addSearchTarget("@pthr.Iterator", page.path + "#Iterator", page.categories);
			search.addSearchTarget("@pthr.IteratorRT", page.path + "#Iterator", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`interface Iterator = {
	func next = (this mut) -> Void;
	func get = (this) -> $$*;
	func atEnd = (this) -> Bool;
}

interface IteratorRT = {
	func next = (this mut) #rt -> Void;
	func get = (this) #rt -> $$*;
	func atEnd = (this) #rt -> Bool;
}`
			));
			page.text("Interface to define an iterator.");


			page.h4Anchor("MutIterator / MutIteratorRT", "MutIterator");
			search.addSearchTarget("@pthr.MutIterator", page.path + "#MutIterator", page.categories);
			search.addSearchTarget("@pthr.MutIteratorRT", page.path + "#MutIterator", page.categories);
			page.text(page.inlineCodeBlock(Page.Language.PANTHER,
`interface MutIterator = {
	func next = (this mut) -> Void;
	func get = (this) -> $$*mut;
	func atEnd = (this) -> Bool;
}

interface MutIteratorRT = {
	func next = (this mut) #rt -> Void;
	func get = (this) #rt -> $$*mut;
	func atEnd = (this) #rt -> Bool;
}`
			));
			page.text("Interface to define a mut iterator.");
		}
	);
}

