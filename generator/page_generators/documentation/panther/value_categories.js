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

let page = new Page("Panther Value Categories", "documentation/panther/value_categories.html", [search.Category.PANTHER, search.Category.DOCUMENTATION]);

page.h1("Panther Value Categories");


page.text(`All expressions have a value category. In C-like languages, the two main value categories are usually ${terms.get("lvalue")} and ${terms.get("rvalue")}. In Panther, there are also two main categories: ${terms.get("concrete")} and ${terms.get("ephemeral")}. These are very similar to ${terms.get("lvalue")} and ${terms.get("rvalue")} respectively, but they are different enough that it warranted new names.`);



page.anchor("ephemeral");
page.h2("Ephemeral");
search.addSearchTarget("Ephemeral Value Category", "documentation/panther/value_categories.html#ephemeral", [search.Category.PANTHER, search.Category.DOCUMENTATION]);
page.text(`Ephemeral values are very similar to ${terms.get("rvalue")} values. Ephemeral values are any values that do not have storage. This means they cannot be assigned to nor can the address of them be gotten. Ephemeral values are not necessarily explicitly typed as ${terms.get("fluid literals")} are ephemeral.`);
page.text("The following are ephemeral expressions:");
page.bullets([
	terms.get("literals"),
	"values returned from functions / built-in operators",
	terms.get("def variables"),
	"template parameters",
]);


page.anchor("concrete");
page.h2("Concrete");
search.addSearchTarget("Concrete Value Category", "documentation/panther/value_categories.html#concrete", [search.Category.PANTHER, search.Category.DOCUMENTATION]);
page.text(`Concrete values are similar to ${terms.get("lvalue")} values. Concrete values are any value that have storage. An important difference between concrete values ${terms.get("lvalue")} values is that ephemeral values cannot be used as an assignment value. The correct way to use a concrete value as an assignment value is with an ${terms.get("operator copy")}, a ${terms.get("operator move")}, or a ${terms.get("operator destructive move")}. There are three subcategories of concrete values: ${terms.get("concrete-mutable")}, ${terms.get("concrete-const")}, and ${terms.get("destructive-movable-concrete-const")}`);


page.anchor("concrete_mutable");
page.h3("Concrete-Mutable");
search.addSearchTarget("Concrete Mutable Value Category", "documentation/panther/value_categories.html#concrete_mutable", [search.Category.PANTHER, search.Category.DOCUMENTATION]);
page.text(`Concrete-mutable values are values that are ${terms.get("concrete")} and mutable.`);
page.text("The following are concrete-mutable expressions:");
page.bullets([
	terms.get("var variables"),
	terms.get("dereference") + " of a non-read-only pointer",
	terms.get("mut parameters"),
	`${terms.get("unwrap")} of a non-const ${terms.get("optional")}`,
	terms.get("accessor") + " of a concrete-mutable value",
]);



page.anchor("concrete_forwardable");
page.h3("Concrete-Forwardable");
search.addSearchTarget("Concrete-Forwardable Value Category", "documentation/panther/value_categories.html#concrete_forwardable", [search.Category.PANTHER, search.Category.DOCUMENTATION]);
page.text(`Concrete-forwardable values are values that are ${terms.get("concrete")}, and mutable. Concrete-forwardable is the only value category that is allowed to be argument of an ${terms.get("operator forward")}.`);
page.text("The following are concrete-forwardable expressions:");
page.bullets([
	terms.get("in parameters"),
]);



page.anchor("concrete_const");
page.h3("Concrete-Const");
search.addSearchTarget("Concrete-Const Value Category", "documentation/panther/value_categories.html#concrete_const", [search.Category.PANTHER, search.Category.DOCUMENTATION]);
page.text(`Concrete-const values are values that are ${terms.get("concrete")} and non-mutable. Mutating a concrete-const value is ${terms.get("undefined behavior")}.`);
page.text("The following are concrete-const expressions:");
page.bullets([
	terms.get("const variables") + " in global scope scope",
	terms.get("read parameters"),
	terms.get("dereference") + " of a read-only pointer",
	terms.get("accessor") + " of a concrete-const value",
]);



page.anchor("destructive_movable_concrete_const");
page.h3("Destructive-Movable-Concrete-Const");
search.addSearchTarget("Destructive-Movable-Concrete-Const Value Category", "documentation/panther/value_categories.html#destructive_movable_concrete_const", [search.Category.PANTHER, search.Category.DOCUMENTATION]);
page.text(`Destructive-movable-concrete-const values are values that are ${terms.get("concrete")} and only mutable by ${terms.get("operator destructive move")}. Mutating a destructive-movable-concrete-const value in any way other than ${terms.get("operator destructive move")} is ${terms.get("undefined behavior")}.`);
page.text("The following are destructive-movable-concrete-const expressions:");
page.bullets([
	terms.get("const variables") + " in function scope",
	`${terms.get("unwrap")} of a const ${terms.get("optional")}`,
]);




page.generate();

