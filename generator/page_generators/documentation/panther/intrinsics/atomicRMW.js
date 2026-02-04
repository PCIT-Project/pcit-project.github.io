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
				path                : "documentation/panther/intrinsics/atomicRMW.html",
				title               : "@atomicRMW",
				categories          : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs         : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION, breadcrumbs.PANTHER_INTRINSICS],
				on_site_description : "Atomic read-modify-write"
			})
		},
		(page) => {
			page.addDecls(["func @atomicRMW = <{TARGET: Type, VALUE: Type, OP: @pthr.AtomicRMWOp, ORDER: @pthr.AtomicOrdering}> (target: TARGET, value: VALUE in) -> VALUE;"]);

			page.addDescription(`Atomic read-modify-write operation.`);

			page.addTemplateParams([
				new SymbolDocumentationPage.TemplateParam("TARGET", `must be a non-optional pointer, and is a pointer to the type of value to store to`),
				new SymbolDocumentationPage.TemplateParam("VALUE", `must be the result of a dereference of ${html.inline_code("TARGET")}`),
				new SymbolDocumentationPage.TemplateParam("OP", `specific atomic read-modify-write operation to perform`),
				new SymbolDocumentationPage.TemplateParam("ORDER", `Atomic memory order for the operation`),
			]);


			page.addParams([
				new SymbolDocumentationPage.Param("target", "target to operate read-modify-write operation on"),
				new SymbolDocumentationPage.Param("value", "value to operate with"),
			]);


			page.addReturn(`Returns the value value loaded before selected read-modify-write operation ${html.inline_code("OP")}.`);



			page.addExampleTodo();


			page.addSeeAlso(["@atomicLoad", "@atomicStore", "@cmpxchg"]);
		}
	);
}
