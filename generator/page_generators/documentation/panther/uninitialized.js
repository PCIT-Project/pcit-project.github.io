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


let page = new Page(__filename, {
	path: "documentation/panther/uninitialized.html",
	title: "Uninitialized | Panther Documentation",
	on_page_title: "Uninitialized",
	categories: [search.Category.PANTHER, search.Category.DOCUMENTATION],
	description: "Documentation for \"uninitialized\" in the Panther programming language",
});


page.paragraph(`The term "uninitialized" refers to any value is not initialized and therefore in an unusable state. If a value is uninitialized, the only valid operations on it are writes. The only way for an uninitialized value to stop being uninitialized is for it to undergo ${terms.get("initialization")}. This does not include ${terms.get("assignment")} even if the ${terms.get("operator delete")} of the type of the value does not contain any read operations.`);


page.text("Examples:");
page.bullets([
	`variables defined an ${terms.get("initializer value")}`,
	`value that undergoes ${terms.get("operator delete")}`,
	`value that undergoes ${terms.get("operator destructive move")}`,
	`value that undergoes ${terms.get("operator forward")}`,
	`element of an ${terms.get("array")} after the ${terms.get("array")} undergoes ${terms.get("initialization")}`
]);


page.generate();

