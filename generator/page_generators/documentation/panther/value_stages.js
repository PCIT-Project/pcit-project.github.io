//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../Page.js");
const html = require("../../../html.js");
const terms = require("../../../terms.js");
const search = require("../../../search.js");


exports.getPageGenerator = function(){
	return new (require("../../../PageGenerator.js").PageGenerator)(
		() => {
			return new Page.Page(__filename, {
				path        : "documentation/panther/value_stages.html",
				title       : "Value Stages",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION],
				description : "Documentation for value stages in the Panther programming language",
			});
		},
		(page) => {
			page.text("All expressions have a value stage which dictate which stage of compilation it may be used in.");


			page.h2Searchable("Comptime Value Stage", "comptime");
			page.text("Comptime values are values that are known at compile-time and can be used as comptime expressions. Anywhere that requires a interptime or a runtime value also accept comptime values.");
			page.text("The following are comptime expressions:");
			page.bullets([
				terms.get("literals"),
				terms.get("def variables"),
				"template parameters",
				"comptime function calls with all arguments being comptime",
			]);



			page.h2Searchable("Interptime Value Stage", "interptime");
			page.text("Interptime values are values that may be used inside a comptime function but are not comptime themselves. Anywhere that requires a runtime values also accept interptime values.");
			page.text("The following are interptime expressions:");
			page.bullets([
				"global " + terms.get("const variables"),
				terms.get("const variables") + " defined in a comptime function",
				terms.get("var variables") + " defined in a comptime function",
				"function parameters in a comptime function",
				"return parameters in a comptime function",
				"error parameters in a comptime function",
				"comptime function calls with all arguments being comptime and/or interptime (must have at least 1 interptime parameter, or else it's comptime)",
			]);



			page.h2Searchable("Runtime Value Stage", "runtime");
			page.text("Runtime values are values that may only be used at runtime as they are not known and/or cannot be calculated at compile-time. Anywhere that that requires a runtime value also accept interptime and comptime values.");
			page.text("The following are runtime expressions:");
			page.bullets([
				"global " + terms.get("var variables"),
				`${terms.get("var variables")} and ${terms.get("const variables")} declared in function scope`,
				"calls to external functions that are unknown / not linked in by the build system",
				"calls to runtime functions",
				"calls to comptime functions with at least 1 runtime argument",
			]);
		}
	);
}


