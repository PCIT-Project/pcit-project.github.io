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



let page = new Page(__filename, {
	path        : "documentation/panther/intrinsics/builtin_module_pthr.html",
	title       : "Builtin Module @pthr",
	categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
	breadcrumbs : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION, breadcrumbs.PANTHER_INTRINSICS],
	description : "Documentation for the builtin module @pthr in the Panther programming language",
});


page.h2("Iterable Interfaces");

page.h3Anchor("IIterable / IIterableRT", "IIterable");
search.addSearchTarget("@pthr.IIterable", page.path + "#IIterable", page.categories);
search.addSearchTarget("@pthr.IIterableRT", page.path + "#IIterable", page.categories);
page.text(page.inline_code_block(Language.PANTHER, `interface IIterable = {
	func createIterator = (this) -> impl($$:@pthr.IIterator);
	func createIterator = (this mut) -> impl($$:@pthr.IMutIterator);
}

interface IIterableRT = {
	func createIterator = (this) #rt -> impl($$:@pthr.IIterator);
	func createIterator = (this mut) #rt -> impl($$:@pthr.IMutIterator);
}`));
page.text("Interface to define iterable types. Should be used if the type uses the array iterable model.");


page.h3Anchor("IIterableRef / IIterableRefRT", "IIterableRef");
search.addSearchTarget("@pthr.IIterableRef", page.path + "#IIterableRef", page.categories);
search.addSearchTarget("@pthr.IIterableRefRT", page.path + "#IIterableRef", page.categories);
page.text(page.inline_code_block(Language.PANTHER, `interface IIterableRef = {
	func createIterator = (this) -> impl($$:@pthr.IIterator);
}

interface IIterableRefRT = {
	func createIterator = (this) #rt -> impl($$:@pthr.IIterator);
}`));
page.text("Interface to define iterable types. Should be used if the type uses the array reference iterable model.");


page.h3Anchor("IIterableMutRef / IIterableMutRefRT", "IIterableMutRef");
search.addSearchTarget("@pthr.IIterableMutRef", page.path + "#IIterableMutRef", page.categories);
search.addSearchTarget("@pthr.IIterableMutRefRT", page.path + "#IIterableMutRef", page.categories);
page.text(page.inline_code_block(Language.PANTHER, `interface IIterableMutRef = {
	func createIterator = (this) -> impl($$:@pthr.IMutIterator);
}

interface IIterableMutRefRT = {
	func createIterator = (this) #rt -> impl($$:@pthr.IMutIterator);
}`));
page.text("Interface to define iterable types. Should be used if the type uses the mutable array reference iterable model.");



page.h2("Iterator Interfaces");

page.h3Anchor("IIterator / IIteratorRT", "IIterator");
search.addSearchTarget("@pthr.IIterator", page.path + "#IIterator", page.categories);
search.addSearchTarget("@pthr.IIteratorRT", page.path + "#IIterator", page.categories);
page.text(page.inline_code_block(Language.PANTHER, `interface IIterator = {
	func next = (this mut) -> Void;
	func get = (this) -> $$*;
	func atEnd = (this) -> Bool;
}

interface IIteratorRT = {
	func next = (this mut) #rt -> Void;
	func get = (this) #rt -> $$*;
	func atEnd = (this) #rt -> Bool;
}`));
page.text("Interface to define an iterator.");


page.h3Anchor("IMutIterator / IMutIteratorRT", "IMutIterator");
search.addSearchTarget("@pthr.IMutIterator", page.path + "#IMutIterator", page.categories);
search.addSearchTarget("@pthr.IMutIteratorRT", page.path + "#IMutIterator", page.categories);
page.text(page.inline_code_block(Language.PANTHER, `interface IMutIterator = {
	func next = (this mut) -> Void;
	func get = (this) -> $$*mut;
	func atEnd = (this) -> Bool;
}

interface IMutIteratorRT = {
	func next = (this mut) #rt -> Void;
	func get = (this) #rt -> $$*mut;
	func atEnd = (this) #rt -> Bool;
}`));
page.text("Interface to define a mut iterator.");



page.generate();

