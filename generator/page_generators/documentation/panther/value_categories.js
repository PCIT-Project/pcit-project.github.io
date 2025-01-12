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

let page = new Page("Panther Value Categories", "documentation/panther/value_categories.html");

page.h1("Panther Value Categories");


page.text(`All expressions have a value category. In C-like languages, the two main value categories are usually ${terms.get("lvalue")} and ${terms.get("rvalue")}. In Panther, there are also two main categories: ${terms.get("concrete")} and ${terms.get("ephemeral")}. These are very similar to ${terms.get("lvalue")} and ${terms.get("rvalue")} respectively, but they are different enough that it warranted new names.`);


page.anchor("ephemeral");
page.h2("Ephemeral");
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
page.text(`Concrete values are similar to ${terms.get("lvalue")} values. Concrete values are any value that have storage. An important difference between concrete values ${terms.get("lvalue")} values is that ephemeral values cannot be used as an assignment value. The correct way to use a concrete value as an assignment value is with a ${terms.get("copy")}, a ${terms.get("move")}, or a ${terms.get("destructive move")}. There are three subcategories of concrete values: ${terms.get("concrete-mutable")}, ${terms.get("concrete-const")}, and ${terms.get("concrete-const-movable")}`);



page.anchor("concrete_mutable");
page.h3("Concrete-Mutable");

page.text(`Concrete-mutable values are values that are ${terms.get("concrete")} and mutable.`);
page.text("The following are concrete-mutable expressions:");
page.bullets([
	terms.get("var variables"),
	terms.get("dereference") + " of a non-read-only pointer",
	terms.get("mut parameters"),
	terms.get("in parameters"),
	`${terms.get("unwrap")} of a non-const ${terms.get("optional")}`,
	terms.get("accessor") + " of a concrete-mutable value",
]);


page.anchor("concrete_const");
page.h3("Concrete-Const");
page.text(`Concrete-const values are values that are ${terms.get("concrete")} and non-mutable. Mutating a concrete-const value is ${terms.get("undefined behavior")}.`);
page.text("The following are concrete-const expressions:");
page.bullets([
	terms.get("const variables") + " in global scope scope",
	terms.get("read parameters"),
	terms.get("dereference") + " of a read-only pointer",
	terms.get("accessor") + " of a concrete-const value",
]);

page.anchor("concrete_const_movable");
page.h3("Concrete-Const-Movable");
page.text(`Concrete-const values are values that are ${terms.get("concrete")} and non-mutable except by ${terms.get("destructive move")}. Mutating a concrete-const-movable value in any way other than ${terms.get("destructive move")} is ${terms.get("undefined behavior")}.`);
page.text("The following are concrete-const-movable expressions:");
page.bullets([
	terms.get("const variables") + " in function scope",
	`${terms.get("unwrap")} of a const ${terms.get("optional")}`,
]);


page.generate();

