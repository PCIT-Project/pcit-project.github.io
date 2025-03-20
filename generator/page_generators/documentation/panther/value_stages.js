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


page.anchor("constexpr");
page.h2("Constexpr");
search.addSearchTarget("Constexpr Value Stage", "documentation/panther/value_stages.html#constexpr", [search.Category.PANTHER, search.Category.DOCUMENTATION]);
page.text("Constexpr values are values that are known at compile-time and can be used as constexpr expressions.");
page.text("The following are constexpr expressions:");
page.bullets([
	terms.get("def variables"),
	"template parameters",
	"constexpr function calls with all parameters being constexpr"
]);



page.anchor("comptime");
page.h2("Comptime");
search.addSearchTarget("Comptime Value Stage", "documentation/panther/value_stages.html#comptime", [search.Category.PANTHER, search.Category.DOCUMENTATION]);
page.text("Comptime values are values that may be used inside a constexpr function but are not constexpr themselves. Anywhere that requires a comptime value also accept constexpr values.");
page.text("The following are comptime expressions:");
page.bullets([
	"global " + terms.get("const variables"),
	"parameters in a constexpr function",
	"return parameters in a constexpr function",
	"error parameters in a constexpr function",
	terms.get("const variables") + " defined in a constexpr function",
	terms.get("var variables") + " defined in a constexpr function",
	"constexpr function calls with all parameters being constexpr and/or comptime (must have at least one comptime parameter, or else it's constexpr)",
]);



page.anchor("runtime");
page.h2("Runtime");
search.addSearchTarget("Runtime Value Stage", "documentation/panther/value_stages.html#runtime", [search.Category.PANTHER, search.Category.DOCUMENTATION]);
page.text("Runtime values are values that may only be used at runtime as they are not known and/or cannot be calculated at compile-time. Anywhere that that requires a runtime value also accept comptime and constexpr values.");
page.text("The following are runtime expressions:");
page.bullets([
	"global " + terms.get("var variables"),
	"calls to external functions that are unknown / not linked in by the build system",
	"functions that have runtime values in their bodies",
	`${terms.get("var variables")} and ${terms.get("const variables")} declared in function scope`
]);



page.generate();

