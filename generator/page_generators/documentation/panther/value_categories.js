//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../Page.js").Page;
const breadcrumbs = require("../../../Page.js").breadcrumbs;
const html = require("../../../html.js");
const terms = require("../../../terms.js");
const search = require("../../../search.js");

let page = new Page(__filename, {
	path        : "documentation/panther/value_categories.html",
	title       : "Value Categories",
	categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
	breadcrumbs : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION],
	description : "Documentation for value categories in the Panther programming language",
});


page.text(`All expressions have a value category. In C-like languages, the two main value categories are usually ${terms.get("lvalue")} and ${terms.get("rvalue")}. In Panther, there are also two main categories: ${terms.get("concrete")} and ${terms.get("ephemeral")}. These are very similar to ${terms.get("lvalue")} and ${terms.get("rvalue")} respectively, but they are different enough that it warranted new names.`);


page.h2Searchable("Ephemeral Value Category", "ephemeral");
page.text(`Ephemeral values are very similar to ${terms.get("rvalue")} values. Ephemeral values are any values that do not have storage. This means they cannot be assigned to nor can the address of them be gotten. Ephemeral values are not necessarily explicitly typed as ${terms.get("fluid")} ${terms.get("literals")} are ephemeral but not explicitly typed.`);
page.text("The following are ephemeral expressions:");
page.bullets([
	terms.get("literals"),
	"values returned from functions / built-in operators",
	terms.get("def variables"),
	"template parameters",
]);


page.h2Searchable("Concrete Value Category", "concrete");
page.text(`Concrete values are similar to ${terms.get("lvalue")} values. Concrete values are any value that have storage. An important difference between concrete values ${terms.get("lvalue")} values is that ephemeral values cannot be used as an assignment value. The correct way to use a concrete value as an assignment value is with an ${terms.get("operator copy")} or a ${terms.get("operator move")}. There are three subcategories of concrete values: ${terms.get("concrete-mutable")}, ${terms.get("forwardable")}, and ${terms.get("concrete-const")}.`);


page.h3Searchable("Concrete-Mutable Value Category", "concrete_mutable");
page.text(`Concrete-mutable values are values that are ${terms.get("concrete")} and mutable.`);
page.text("The following are concrete-mutable expressions:");
page.bullets([
	terms.get("var variables"),
	terms.get("dereference") + " of a non-read-only pointer",
	terms.get("mut parameters"),
	`${terms.get("unwrap")} of a non-const ${terms.get("optional")}`,
	terms.get("accessor") + " of a concrete-mutable value",
]);



page.h3Searchable("Forwardable Value Category", "forwardable");
page.text(`forwardable values are values that are ${terms.get("concrete")}, and non-mutable other than by ${terms.get("operator forward")}. Forwardable is the only value category that is allowed to be argument of an ${terms.get("operator forward")}.`);
page.text("The following are forwardable expressions:");
page.bullets([
	terms.get("in parameters"),
]);



page.h3Searchable("Concrete-Const Value Category", "concrete_const");
page.text(`Concrete-const values are values that are ${terms.get("concrete")} and non-mutable. Mutating a concrete-const value is ${terms.get("undefined behavior")}.`);
page.text("The following are concrete-const expressions:");
page.bullets([
	terms.get("const variables"),
	terms.get("read parameters"),
	terms.get("dereference") + " of a read-only pointer",
	terms.get("accessor") + " of a concrete-const value",
]);



page.generate();

