//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../../Page.js").Page;
const breadcrumbs = require("../../../../Page.js").breadcrumbs;
const html = require("../../../../html.js");
const terms = require("../../../../terms.js");
const search = require("../../../../search.js");
const Language = require("../../../../Page.js").Language;
const syntax_highlighting = require("../../../../syntax_highlighting/syntax_highlighting.js");



exports.getPageGenerator = function(){
	return new (require("../../../../PageGenerator.js").PageGenerator)(
		() => {
			return new Page(__filename, {
				path        : "documentation/panther/intrinsics/builtin_module_pthr.html",
				title       : "Builtin Module @pthr",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION, breadcrumbs.PANTHER_INTRINSICS],
				description : "Documentation for the builtin module @pthr in the Panther programming language",
			});
		},
		(page) => {
			page.h2Anchor("AtomicOrdering", "AtomicOrdering");
			search.addSearchTarget("@pthr.AtomicOrdering", page.path + "#AtomicOrdering", page.categories);
			page.text(page.inline_code_block(Language.PANTHER,
`type AtomicOrdering = enum {
	MONOTONIC,
	ACQUIRE,
	RELEASE,
	ACQ_REL,
	SEQ_CST,
}`
			));
			page.text(`Enum to specify the different atomic orderings. All orderings guarantee atomicity. Use of any ordering other than ${html.inline_code("SEQ_CST")} should only be done if the developer is 100% sure it is safe to do so.`);

			page.h3("MONOTONIC");
			page.paragraph("Has no synchronization or ordering constraints. Can be used on any atomic operation.");
			page.paragraph("This is equivalent to \"relaxed\" in C/C++.");

			page.h3("ACQUIRE");
			page.paragraph("No memory operations in the current thread can be reordered to before this operation. Can be used on load atomic operations.");

			page.h3("RELEASE");
			page.paragraph("No memory operations in the current thread can be reordered to after this operation. Can be used on store atomic operations.");

			page.h3("ACQ_REL");
			page.paragraph("Acquire Release. Performs an acquire and a release operation. No memory operations in the current thread can be reordered to before acquire or to after the release. Can be used on read-modify-write atomic operation.");

			page.h3("SEQ_CST");
			page.paragraph("Sequentially-consistent. Performs an acquire for a load, a release for a store, acquire-release for a read-modify-write operation. In addition, all threads observe all modifications in the same order. Can be used on any atomic operation.");



			page.h2Anchor("AtomicRMWOp", "AtomicRMWOp");
			search.addSearchTarget("@pthr.AtomicRMWOp", page.path + "#AtomicRMWOp", page.categories);
			page.text(page.inline_code_block(Language.PANTHER,
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
			page.paragraph(`For use in ${html.link(page.inline_code(Language.PANTHER, "@atomicRMW"), "/site/documentation/panther/intrinsics/atomic_intrinsics.html#atomicRMW")} to denote the operation to use.`);




			page.h2Searchable("Iterable Interfaces");

			page.h3Anchor("IIterable / IIterableRT", "IIterable");
			search.addSearchTarget("@pthr.IIterable", page.path + "#IIterable", page.categories);
			search.addSearchTarget("@pthr.IIterableRT", page.path + "#IIterable", page.categories);
			page.text(page.inline_code_block(Language.PANTHER,
`interface IIterable = {
	func createIterator = (this) -> impl($$:@pthr.IIterator);
	func createIterator = (this mut) -> impl($$:@pthr.IMutIterator);
}

interface IIterableRT = {
	func createIterator = (this) #rt -> impl($$:@pthr.IIterator);
	func createIterator = (this mut) #rt -> impl($$:@pthr.IMutIterator);
}`
			));
			page.text("Interface to define iterable types. Should be used if the type uses the array iterable model.");


			page.h3Anchor("IIterableRef / IIterableRefRT", "IIterableRef");
			search.addSearchTarget("@pthr.IIterableRef", page.path + "#IIterableRef", page.categories);
			search.addSearchTarget("@pthr.IIterableRefRT", page.path + "#IIterableRef", page.categories);
			page.text(page.inline_code_block(Language.PANTHER,
`interface IIterableRef = {
	func createIterator = (this) -> impl($$:@pthr.IIterator);
}

interface IIterableRefRT = {
	func createIterator = (this) #rt -> impl($$:@pthr.IIterator);
}`
			));
			page.text("Interface to define iterable types. Should be used if the type uses the array reference iterable model.");


			page.h3Anchor("IIterableMutRef / IIterableMutRefRT", "IIterableMutRef");
			search.addSearchTarget("@pthr.IIterableMutRef", page.path + "#IIterableMutRef", page.categories);
			search.addSearchTarget("@pthr.IIterableMutRefRT", page.path + "#IIterableMutRef", page.categories);
			page.text(page.inline_code_block(Language.PANTHER,
`interface IIterableMutRef = {
	func createIterator = (this) -> impl($$:@pthr.IMutIterator);
}

interface IIterableMutRefRT = {
	func createIterator = (this) #rt -> impl($$:@pthr.IMutIterator);
}`
			));
			page.text("Interface to define iterable types. Should be used if the type uses the mutable array reference iterable model.");



			page.h2Searchable("Iterator Interfaces");

			page.h3Anchor("IIterator / IIteratorRT", "IIterator");
			search.addSearchTarget("@pthr.IIterator", page.path + "#IIterator", page.categories);
			search.addSearchTarget("@pthr.IIteratorRT", page.path + "#IIterator", page.categories);
			page.text(page.inline_code_block(Language.PANTHER,
`interface IIterator = {
	func next = (this mut) -> Void;
	func get = (this) -> $$*;
	func atEnd = (this) -> Bool;
}

interface IIteratorRT = {
	func next = (this mut) #rt -> Void;
	func get = (this) #rt -> $$*;
	func atEnd = (this) #rt -> Bool;
}`
			));
			page.text("Interface to define an iterator.");


			page.h3Anchor("IMutIterator / IMutIteratorRT", "IMutIterator");
			search.addSearchTarget("@pthr.IMutIterator", page.path + "#IMutIterator", page.categories);
			search.addSearchTarget("@pthr.IMutIteratorRT", page.path + "#IMutIterator", page.categories);
			page.text(page.inline_code_block(Language.PANTHER,
`interface IMutIterator = {
	func next = (this mut) -> Void;
	func get = (this) -> $$*mut;
	func atEnd = (this) -> Bool;
}

interface IMutIteratorRT = {
	func next = (this mut) #rt -> Void;
	func get = (this) #rt -> $$*mut;
	func atEnd = (this) #rt -> Bool;
}`
			));
			page.text("Interface to define a mut iterator.");
		}
	);
}

