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
				path                : "documentation/panther/intrinsics/atomicStore.html",
				title               : "@atomicStore",
				categories          : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs         : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION, breadcrumbs.PANTHER_INTRINSICS],
				on_site_description : "Atomically store a value"
			})
		},
		(page) => {
			page.addDecls(["func @atomicStore = <{TARGET: Type, VALUE: Type, ORDER: @pthr.AtomicOrdering}> (target: TARGET, value: VALUE in) -> Void;"]);

			page.addDescription(`Atomically store a value.`);


			page.addTemplateParams([
				new SymbolDocumentationPage.TemplateParam("TARGET", `must be a non-optional pointer, and is a pointer to the type of value to store to`),
				new SymbolDocumentationPage.TemplateParam("VALUE", `must be the result of a dereference of ${html.inline_code("TARGET")}, ${terms.get("trivially-copyable")}, and cannot be ${page.inlineCode("F80")}`),
				new SymbolDocumentationPage.TemplateParam("ORDER", `cannot be ${page.inlineCode("@pthr.AtomicOrdering.ACQUIRE")} or ${page.inlineCode("@pthr.AtomicOrdering.ACQ_REL")}`),
			]);


			page.addParams([
				new SymbolDocumentationPage.Param("target", "target to store to"),
				new SymbolDocumentationPage.Param("value", "value to store to target"),
			]);


			page.addReturnVoid();



			page.addExampleTodo();


			page.addSeeAlso(["@atomicLoad", "@atomicRMW", "@cmpxchg"]);
		}
	);
}
