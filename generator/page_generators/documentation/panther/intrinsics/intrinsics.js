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
				path        : "documentation/panther/intrinsics/intrinsics.html",
				title       : "Intrinsics",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION],
				description : "Documentation for intrinsics in the Panther programming language",
			});
		},
		(page) => {
			page.paragraph(`Instrinsics are special symbols builtin to the compiler. They are all either begin with an ${html.highlight("@")} or are part of a builtin module (which itself begins with an ${html.highlight("@")}).`);

			page.paragraph(`Intrinsic functions are almost always inlined and some (such as type trait intrinsics) don't have any runtime execution at all. As such, you cannot take the address of an intrinsic function.`);


			page.h2("Intrinsic Functions");

			page.text(html.link("Importing", "/site/documentation/panther/intrinsics/importing_intrinsics.html"));
			page.text(html.link("Operational", "/site/documentation/panther/intrinsics/operational_intrinsics.html"));



			page.h2("Intrinsic functions for Internal Use");

			page.paragraph(`These intrinsic functions are meant for internal use by the standard library. All functionality of these functions can be found in the standard library and/or in the language itself.`);

			page.h3("Atomic");
			page.symbolList(["@atomicLoad", "@atomicStore", "@atomicRMW", "@cmpxchg"]);


			page.h3("Arithmetic");
			page.text(html.link("Arithmetic", "/site/documentation/panther/intrinsics/arithmetic_intrinsics.html"));

			page.h3("Bitwise");
			page.text(html.link("Bitwise", "/site/documentation/panther/intrinsics/bitwise_intrinsics.html"));

			page.h3("Comparative");
			page.text(html.link("Comparative", "/site/documentation/panther/intrinsics/comparative_intrinsics.html"));

			page.h3("Type Conversion");
			page.text(html.link("Type Conversion", "/site/documentation/panther/intrinsics/type_conversion_intrinsics.html"));

			page.h3("Type Traits");
			page.text(html.link("Type Traits", "/site/documentation/panther/intrinsics/type_traits_intrinsics.html"));



			page.h2("Intrinsic modules for Internal Use");

			page.paragraph(`These intrinsic modules contain types that are helpers for intrinsics meant for internal use by the standard library.`);

			page.text(html.link("@pthr",  "/site/documentation/panther/intrinsics/builtin_module_pthr.html"));
			page.text(html.link("@build",  "/site/documentation/panther/intrinsics/builtin_module_build.html"));
		}
	);
}


