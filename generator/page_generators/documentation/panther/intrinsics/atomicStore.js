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
				path                : "documentation/panther/intrinsics/atomicStore.html",
				title               : "@atomicStore",
				categories          : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs         : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				on_site_description : "Atomically store a value",
				symbol_kind         : Page.SymbolKind.INTRINSIC_FUNCTION,
			})
		},
		(page) => {
			page.addSymbolDecls(["func @atomicStore = <{TARGET: Type, VALUE: Type, ORDER: @pthr.AtomicOrdering}> (target: TARGET, value: VALUE in) -> Void;"]);

			page.addSymbolDescription(`Atomically store a value.`);


			page.addSymbolTemplateParams([
				new Page.TemplateParam("TARGET", `must be a non-optional pointer, and is a pointer to the type of value to store to`),
				new Page.TemplateParam("VALUE", `must be the result of a dereference of ${html.highlight("TARGET")}, ${terms.get("trivially-copyable")}, and cannot be ${page.inlineCode("F80")}`),
				new Page.TemplateParam("ORDER", `cannot be ${page.inlineCode("@pthr.AtomicOrdering.ACQUIRE")} or ${page.inlineCode("@pthr.AtomicOrdering.ACQ_REL")}`),
			]);


			page.addSymbolParams([
				new Page.Param("target", "target to store to"),
				new Page.Param("value", "value to store to target"),
			]);


			page.addSymbolReturnVoid();



			page.addSymbolExampleTodo();


			page.addSymbolSeeAlso(["@atomicLoad", "@atomicRMW", "@cmpxchg"]);
		}
	);
}
