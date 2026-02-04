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
				path                : "documentation/panther/intrinsics/atomicRMW.html",
				title               : "@atomicRMW",
				categories          : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs         : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				on_site_description : "Atomic read-modify-write",
				symbol_kind         : Page.SymbolKind.INTRINSIC_FUNCTION,
			})
		},
		(page) => {
			page.addSymbolDecls(["func @atomicRMW = <{TARGET: Type, VALUE: Type, OP: @pthr.AtomicRMWOp, ORDER: @pthr.AtomicOrdering}> (target: TARGET, value: VALUE in) -> VALUE;"]);

			page.addSymbolDescription(`Atomic read-modify-write operation.`);

			page.addSymbolTemplateParams([
				new Page.TemplateParam("TARGET", `must be a non-optional pointer, and is a pointer to the type of value to store to`),
				new Page.TemplateParam("VALUE", `must be the result of a dereference of ${html.highlight("TARGET")}`),
				new Page.TemplateParam("OP", `specific atomic read-modify-write operation to perform`),
				new Page.TemplateParam("ORDER", `Atomic memory order for the operation`),
			]);


			page.addSymbolParams([
				new Page.Param("target", "target to operate read-modify-write operation on"),
				new Page.Param("value", "value to operate with"),
			]);


			page.addSymbolReturn(`Returns the value value loaded before selected read-modify-write operation ${html.highlight("OP")}.`);



			page.addSymbolExampleTodo();


			page.addSymbolSeeAlso(["@atomicLoad", "@atomicStore", "@cmpxchg"]);
		}
	);
}
