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
				path        : "documentation/panther/intrinsics/atomic_intrinsics.html",
				title       : "Atomic Intrinsics",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION, breadcrumbs.PANTHER_INTRINSICS],
				description : "Documentation for atomic intrinsics in the Panther programming language",
			});
		},
		(page) => {
			///////////////////////////////////
			// @atomicLoad

			page.h2Searchable("@atomicLoad", "atomicLoad");
			page.text(page.inline_code(Language.PANTHER, "func @atomicLoad = <{TARGET: Type, VALUE: Type, ORDER: @pthr.AtomicOrdering}> (target: TARGET) -> VALUE;"));
			page.text(`Atomically load a value.`);

			page.h4("Template Arguments");
			page.ordered_list([
				`${html.inline_code("TARGET")}: must be a non-optional pointer, and is a pointer to the type of value to load.`,
				`${html.inline_code("VALUE")}: must be the result of a dereference of ${html.inline_code("TARGET")}, ${terms.get("trivially-copyable")}, and cannot be ${page.inline_code(Language.PANTHER, "F80")}.`,
				`${html.inline_code("ORDER")}: cannot be ${page.inline_code(Language.PANTHER, "@pthr.RELEASE")} or ${page.inline_code(Language.PANTHER, "@pthr.ACQ_REL")}.`,
			]);

			page.h4("Arguments");
			page.ordered_list([
				`${html.inline_code("target")}: target to load`
			]);

			page.h4("Returns");
			page.paragraph(`The atomically loaded value`);


			///////////////////////////////////
			// @atomicStore

			page.h2Searchable("@atomicStore", "atomicStore");
			page.text(page.inline_code(Language.PANTHER, "func @atomicStore = <{TARGET: Type, VALUE: Type, ORDER: @pthr.AtomicOrdering}> (target: TARGET, value: VALUE in) -> Void;"));
			page.text(`Atomically store a value.`);

			page.h4("Template Arguments");
			page.ordered_list([
				`${html.inline_code("TARGET")}: must be a non-optional pointer, and is a pointer to the type of value to store to.`,
				`${html.inline_code("VALUE")}: must be the result of a dereference of ${html.inline_code("TARGET")}, ${terms.get("trivially-copyable")}, and cannot be ${page.inline_code(Language.PANTHER, "F80")}.`,
				`${html.inline_code("ORDER")}: cannot be ${page.inline_code(Language.PANTHER, "@pthr.ACQUIRE")} or ${page.inline_code(Language.PANTHER, "@pthr.ACQ_REL")}.`,
			]);

			page.h4("Arguments");
			page.ordered_list([
				`${html.inline_code("target")}: target to store to`,
				`${html.inline_code("value")}: value to store`,
			]);


			// page.text(`Atomic load. ${html.inline_code("TARGET")} must be a non-optional pointer. ${html.inline_code("VALUE")} must be the result of a dereference of ${html.inline_code("TARGET")}. ${html.inline_code("VALUE")} must be ${terms.get("trivially-copyable")} and cannot be ${page.inline_code(Language.PANTHER, "F80")}. ${html.inline_code("ORDER")} cannot be ${page.inline_code(Language.PANTHER, "@pthr.ACQUIRE")} or ${page.inline_code(Language.PANTHER, "ACQ_REL")}.`);


			///////////////////////////////////
			// @cmpxchg

			page.h2Searchable("@cmpxchg", "cmpxchg");
			page.text(page.inline_code(Language.PANTHER, "func @cmpxchg = <{TARGET: Type, VALUE: Type, IS_WEAK: Bool, SUCCESS_ORDER: @pthr.AtomicOrdering, FAILURE_ORDER: @pthr.AtomicOrdering}> (target: TARGET, expected: VALUE, desired: VALUE in) -> (loaded: VALUE, succeeded: Bool);"));
			page.text(`Atomic compare-exchange. ${html.inline_code("TARGET")} must be a non-optional pointer. ${html.inline_code("VALUE")} must be the result of a dereference of ${html.inline_code("TARGET")}. Return parameter ${html.inline_code("loaded")} is the value of ${html.inline_code("target")} that was atomically loaded. Return parameter ${html.inline_code("succeeded")} is ${page.inline_code(Language.PANTHER, "true")} if the exchange was successful.`);


			///////////////////////////////////
			// @atomicRMW

			page.h2Searchable("@atomicRMW", "atomicRMW");
			page.text(page.inline_code(Language.PANTHER, "func @atomicRMW = <{TARGET: Type, VALUE: Type, OP: @pthr.AtomicRMWOp, ORDER: @pthr.AtomicOrdering}> (target: TARGET, value: VALUE in) -> VALUE;"));
			page.text(`Atomic read-modify-write. Returns the value loaded before selected operation ${html.inline_code("OP")}. ${html.inline_code("TARGET")} must be a non-optional pointer. ${html.inline_code("VALUE")} must be the result of a dereference of ${html.inline_code("TARGET")}.`);
		}
	);
}



