//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../Page.js").Page;
const breadcrumbs = require("../../../Page.js").breadcrumbs;
const Language = require("../../../Page.js").Language;
const html = require("../../../html.js");
const terms = require("../../../terms.js");
const search = require("../../../search.js");

let page = new Page(__filename, {
	path        : "documentation/panther/functions.html",
	title       : "Functions",
	categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
	breadcrumbs : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION],
	description : "Documentation for functions in the Panther programming language",
});




page.paragraph(`Functions are a set of statements that are executable. They can take a number of inputs (known as parameters), and outputs (known as return/error parameters). By default, functions are able to run at compile-time (known as ${terms.get("constexpr")}).`);

page.h3("Syntax");
page.list_table(Language.PANTHER, [
	"func {IDENTIFIER|OPERATOR} = {TEMPLATE_PARAMETER_PACK?} ( {PARAMETERS*} ) {ATTRIBUTES*} -> {TYPE} { {STATEMENTS*} }",
	"func {IDENTIFIER|OPERATOR} = {TEMPLATE_PARAMETER_PACK?} ( {PARAMETERS*} ) {ATTRIBUTES*} -> ( {RETURN_PARAMETERS+} ) { {STATEMENTS*} }",
	"func {IDENTIFIER|OPERATOR} = {TEMPLATE_PARAMETER_PACK?} ( {PARAMETERS*} ) {ATTRIBUTES*} -> {TYPE} < {TYPE} > { {STATEMENTS*} }",
	"func {IDENTIFIER|OPERATOR} = {TEMPLATE_PARAMETER_PACK?} ( {PARAMETERS*} ) {ATTRIBUTES*} -> ( {RETURN_PARAMETERS+} ) < {ERROR_PARAMETERS*} > { {STATEMENTS*} }",

]);

page.paragraph(`Syntaxes 1, and 3 create a function that has a single return value. A return type of ${page.inline_code(Language.PANTHER, "Void")} means that the function doesn't return anything. Syntaxes 2 and 4 have explicit return parameters, which allows returning of multiple values. Syntaxes 3 and 4 are for functions that may ${html.link("error", "#error")}.`);

page.paragraph(`The list of parameters, return parameters, and error parameters are delimited by a comma (${html.inline_code(",")}). A comma may also go at the end of a parameter even if there is no following parameter(s).`);


page.paragraph(`To return a value from a function, the ${terms.get("return")} statement is used. Likewise, to error a function, the ${terms.get("error")} statement is used (although this may only happen if the declaration defines that the function errors).`);


page.paragraph("Function overloading is allowed. This means that two functions may have the same name if they have a different set of template parameters and parameters.");



page.h2Searchable("Function Parameters", "parameters");
page.h3("Syntax");
page.list_table(Language.PANTHER, [
	"{IDENTIFIER}: {TYPE} {ATTRIBUTES*}",
	"{IDENTIFIER}: {TYPE} {read|mut|in} {ATTRIBUTES*}",
	"this",
	"this {read|mut|in}",
]);

page.paragraph(`Parameters are references values. The value the parameter references may not be changed.`);
page.paragraph(`All parameters have a qualifier. If a parameter does not have an explicit qualifier (syntaxes 1 and 3), then they are defaulted to the ${page.inline_code(Language.PANTHER, "read")} qualifier.`);

page.h3Searchable("Read Parameter Qualifier", "read");
page.paragraph(`The ${page.inline_code(Language.PANTHER, "read")} parameter qualifier means that the parameter is read-only. They have a value category of ${"concrete-const"}. If the parameter type ${terms.get("trivially-sized")}, ${terms.get("trivially-copyable")}, and ${terms.get("trivially-deinitable")}, the ABI guarantees that the parameter passing will be by copy (instead of by pointer).`);

page.h3Searchable("Mut Parameter Qualifier", "mut");
page.paragraph(`The ${page.inline_code(Language.PANTHER, "mut")} parameter qualifier means that the parameter is mutable. If the parameter is not a ${page.inline_code(Language.PANTHER, "this")} parameter, it can only accept ${terms.get("concrete")} values. They have a value category of ${terms.get("concrete-mutable")}.`);

page.h3Searchable("In Parameter Qualifier", "in");
page.paragraph(`The ${page.inline_code(Language.PANTHER, "in")} parameter qualifier means that the parameter is non-mutable other than by ${terms.get("operator forward")}. They can only accept ${terms.get("ephemeral")} values. They have a value category of ${terms.get("forwardable")}.`);

page.h4("ABI Note:");
page.paragraph(`In general, ${page.inline_code(Language.PANTHER, "in")} parameters are passed by pointer. This means that if the argument given is a copy or a move, the copy/move is not actually done at the call-site, rather it is done at a ${terms.get("operator forward")} ${terms.get("concrete initialization")} or ${terms.get("operator forward")} ${terms.get("assignment")}. This allows for automatic perfect forwarding - a pointer can be passed through arbitrary levels of function calls with ${terms.get("operator forward")} and the copy or move operation is only made once actually necessary. However, if the value is ${terms.get("trivially-copyable")} or ${terms.get("trivially-moveable")} (for a copy or move respectively) and it is ${terms.get("trivially-sized")}, the copy/move is done immediately and the value is passed by value instead.`);




page.h2Searchable("Explicit Function Return/Error Parameters", "returns");
page.h3("Syntax");
page.list_table(Language.PANTHER, [
	"{IDENTIFIER}: {TYPE}",
]);


page.paragraph("Explicit return/error parameters are pointers to the target, which means that using them guarantees Return-Value-Optimization (RVO).");
page.paragraph(`If a function explicit return parameters, a return statement in that function must be "${page.inline_code(Language.PANTHER, "return...;")}". Likewise, if a function has explicit error parameters, an error statement in that function must be "${page.inline_code(Language.PANTHER, "error...;")}". The "${page.inline_code(Language.PANTHER, "...")}" is a separate token which means there may be white-space in-between it and the respective keyword, although this goes against the ${terms.get("Panther style guide")}.`);
page.paragraph(`Explicit return/error parameters begin as ${terms.get("uninitialized")}. If the function returns, all return parameters must be ${terms.get("initialized")}, and all ${terms.get("initialized")} error parameters will automatically have their ${terms.get("operator delete")} called on them. This works similarly for if the function errors.`);



page.h2Searchable("Erroring Functions", "error");
page.paragraph(`If a function errors, it must be called through a ${terms.get("try")} expression or statement.`);
page.h4("ABI Note:");
page.paragraph(`Erroring functions signal if the error or not through returning boolean value. If the function has a single return value, that value becomes an "out" parameter. The error return values themselves are in a packed struct stored right on the stack. This allows for a single pointer to be passed to the function as a parameter in the ABI for all the error values needed so as to lower the performance affect on the normal return path as much as possible.`);


page.h2Searchable("Function Templates", "templates");
page.paragraph(html.italic("(TODO)"));



page.h2Searchable("Operator Overloading", "operator_overloading");
page.paragraph(html.italic("(TODO)"));


page.h2("Example");

page.code_block(Language.PANTHER, `def std = @import("std");


// Create a function called "sum" which adds together "lhs" and "rhs" and returns that sum
func sum = (lhs: Int, rhs: Int) -> Int {
	return lhs + rhs;
}

// Running sum at compile-time
def SUM_OF_1_AND_2: Int = sum(1, 2);


// Create a function called "divide" that divides "lhs" and "rhs" and returns that result
// If an error occurs, print out a message. This function must be runtime (#rt) as std.println is runtime
// If "rhs" is 0, error with no error return value
func divide = (lhs: Int, rhs: Int) #rt -> Int <Void> {
	if(rhs == 0){
		std.println("Cannot divide by 0");
		error;
	}

	return lhs / rhs;
}

// Call the divide function
// Use an explicit return parameter for the return
func divide_handled = (lhs: Int, rhs: Int) #rt -> (output: Int) {
	output = try divide(lhs, rhs) else 0;
	return...;
}


// template version of the "sum" function
func sum = <{T: Type}> (lhs: T, rhs: T) -> T {
	return lhs + rhs;
}`);



page.generate();

