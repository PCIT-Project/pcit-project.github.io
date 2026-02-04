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
const SymbolDocumentationPage = require("../../../../SymbolDocumentationPage.js");


exports.getPageGenerator = function(){
	return new (require("../../../../PageGenerator.js").PageGenerator)(
		() => {
			return new SymbolDocumentationPage.SymbolDocumentationPage(SymbolDocumentationPage.Kind.INTRINSIC_FUNCTION, __filename, {
				path                : "documentation/panther/intrinsics/cmpxchg.html",
				title               : "@cmpxchg",
				categories          : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs         : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION, breadcrumbs.PANTHER_INTRINSICS],
				on_site_description : "Atomic compare-exchange"
			})
		},
		(page) => {
			page.addDecls(["func @cmpxchg = <{TARGET: Type, VALUE: Type, IS_WEAK: Bool, SUCCESS_ORDER: @pthr.AtomicOrdering, FAILURE_ORDER: @pthr.AtomicOrdering}> (target: TARGET, expected: VALUE, desired: VALUE in) -> (loaded: VALUE, succeeded: Bool);"]);

			page.addDescription(`Atomic compare-exchange. ${terms.get("Trivially-compare")} the target against the expected value. If the are equal, store the desired value to target - this is considered a success. If the values differ, this is considered a failure, and no store is made.`);

			page.addTemplateParams([
				new SymbolDocumentationPage.TemplateParam("TARGET", `must be a non-optional pointer, and is a pointer to the type of value to store to`),
				new SymbolDocumentationPage.TemplateParam("VALUE", `must be the result of a dereference of ${html.inline_code("TARGET")}. Must be ${terms.get("integral")}, ${terms.get("pointer")}, or ${page.inlineCode("Bool")}`),
				new SymbolDocumentationPage.TemplateParam("IS_WEAK", `If true, the operation is allowed to spuriously fail`),
				new SymbolDocumentationPage.TemplateParam("SUCCESS_ORDER", `Atomic memory order for the operation if it successfully stores the desired value`),
				new SymbolDocumentationPage.TemplateParam("FAILURE_ORDER", `Atomic memory order for the operation if it fails to store the desired value - cannot be ${page.inlineCode("@pthr.AtomicOrdering.RELEASE")} or ${page.inlineCode("@pthr.AtomicOrdering.ACQ_REL")}`),
			]);


			page.addParams([
				new SymbolDocumentationPage.Param("target", "target to operate read-modify-write operation on"),
				new SymbolDocumentationPage.Param("expected", "value that is expected - only stores the desired value if the target value is expected"),
				new SymbolDocumentationPage.Param("desired", "value to store if the value is expected"),
			]);


			page.addReturnParams([
				new SymbolDocumentationPage.ReturnParam("loaded", "value loaded at target"),
				new SymbolDocumentationPage.ReturnParam("succeeded", `is ${page.inlineCode("true")} if the value was successfully stored`),
			]);


			page.addNotes(`If calling from a loop, ${html.inline_code("IS_WEAK")} should usually be ${page.inlineCode("true")} as it can result in better performance on the platforms that support weak compare-exchange. On platforms that do not support weak compare-exchange, setting ${html.inline_code("IS_WEAK")} to ${page.inlineCode("true")} has no effect.`);


			page.addExampleTodo();


			page.addSeeAlso(["@atomicLoad", "@atomicStore", "@atomicRMW"]);
		}
	);
}
