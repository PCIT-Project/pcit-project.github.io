//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../Page.js").Page;
const html = require("../../../html.js");
const terms = require("../../../terms.js");
const search = require("../../../search.js");

let page = new Page({
	path: "documentation/panther/value_stages.html",
	title: "Panther Value Stages | Panther Documentation",
	on_page_title: "Panther Value Stages",
	categories: [search.Category.PANTHER, search.Category.DOCUMENTATION],
	description: "Documentation for value stages in the Panther programming language",
});

page.text("All expressions have a value stage which dictate which stage of compilation it may be used in.");


page.h2Searchable("Constexpr Value Stage", "constexpr");
page.text("Constexpr values are values that are known at compile-time and can be used as constexpr expressions. Anywhere that requires a comptime or a runtime value also accept constexpr values.");
page.text("The following are constexpr expressions:");
page.bullets([
	terms.get("literals"),
	terms.get("def variables"),
	"template parameters",
	"constexpr function calls with all arguments being constexpr",
]);



page.h2Searchable("Comptime Value Stage", "comptime");
page.text("Comptime values are values that may be used inside a constexpr function but are not constexpr themselves. Anywhere that requires a runtime values also accept comptime values.");
page.text("The following are comptime expressions:");
page.bullets([
	"global " + terms.get("const variables"),
	terms.get("const variables") + " defined in a constexpr function",
	terms.get("var variables") + " defined in a constexpr function",
	"function parameters in a constexpr function",
	"return parameters in a constexpr function",
	"error parameters in a constexpr function",
	"constexpr function calls with all arguments being constexpr and/or comptime (must have at least 1 comptime parameter, or else it's constexpr)",
]);



page.h2Searchable("Runtime Value Stage", "runtime");
page.text("Runtime values are values that may only be used at runtime as they are not known and/or cannot be calculated at compile-time. Anywhere that that requires a runtime value also accept comptime and constexpr values.");
page.text("The following are runtime expressions:");
page.bullets([
	"global " + terms.get("var variables"),
	`${terms.get("var variables")} and ${terms.get("const variables")} declared in function scope`,
	"calls to external functions that are unknown / not linked in by the build system",
	"calls to runtime functions",
	"calls to comptime functions with at least 1 runtime argument",
]);



page.generate();

