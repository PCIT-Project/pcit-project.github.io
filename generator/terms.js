//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////


const assert = require("node:assert");
const html = require("./html.js");


let terms = {};

function term(text, link=null){
	if(link === null){
		terms[text] = html.highlight(text);
	}else{
		terms[text] = html.highlight(html.link(text, link));	
	}	
}



exports.get = function(text){
	assert(terms[text] !== undefined, `term "${text}" was not defined`);
	return terms[text];
}



//////////////////////////////////////////////////////////////////////
// terms

term("Panther style guide");


term("undefined behavior", "/site/documentation/panther/undefined_behavior.html");

term("assignment");
term("initialization");
term("concrete initialization");
term("initialized");
term("initializer value");
term("uninitialized", "/site/documentation/panther/uninitialized.html");

term("ephemeral", "/site/documentation/panther/value_categories.html#ephemeral");
term("concrete", "/site/documentation/panther/value_categories.html#concrete");
term("concrete-mutable", "/site/documentation/panther/value_categories.html#concrete_mutable");
term("forwardable", "/site/documentation/panther/value_categories.html#forwardable");
term("concrete-const", "/site/documentation/panther/value_categories.html#concrete_const");

term("literal", "/site/documentation/panther/literals.html");
term("literals", "/site/documentation/panther/literals.html");

term("Integer literals", "/site/documentation/panther/literals.html#integer-literals");
term("integer literals", "/site/documentation/panther/literals.html#integer-literals");
term("float literals", "/site/documentation/panther/literals.html#float-literals");
term("Float literals", "/site/documentation/panther/literals.html#float-literals");
term("Character literals", "/site/documentation/panther/literals.html#character-literals");
term("character literals", "/site/documentation/panther/literals.html#character-literals");
term("String literals", "/site/documentation/panther/literals.html#string-literals");
term("string literals", "/site/documentation/panther/literals.html#string-literals");



term("character escape code", "/site/documentation/panther/character_escape_codes.html");

term("compatable types");

term("fluid", "/site/documentation/panther/fluid_values.html");
term("Fluid", "/site/documentation/panther/fluid_values.html");

term("RHS");
term("LHS");


term("operator copy");
term("operator move");
term("operator forward");

term("trivially-sized");
term("default-initable");
term("trivially-default-initable");
term("trivially-deinitable");
term("trivially-copyable");
term("copyable");
term("trivially-moveable");
term("moveable");
term("Trivially-compare");

term("operator as");

term("return");
term("error");



term("variables", "/site/documentation/panther/variables.html");
term("variable", "/site/documentation/panther/variables.html");
term("var variables", "/site/documentation/panther/variables.html#var_variables");
term("const variables", "/site/documentation/panther/variables.html#const_variables");
term("def variables", "/site/documentation/panther/variables.html#def_variables");


term("read parameters", "/site/documentation/panther/functions.html#parameters");
term("mut parameters", "/site/documentation/panther/functions.html#parameters");
term("in parameters", "/site/documentation/panther/functions.html#parameters");

term("dereference");
term("accessor");
term("unwrap");
term("optional");
term("pointer");
term("pointee");
term("mut-qualified pointer");
term("uninitialized-qualified pointer");

term("structs", "/site/documentation/panther/structs.html");


term("null");


term("constexpr", "/site/documentation/panther/value_stages.html#constexpr");
term("comptime", "/site/documentation/panther/value_stages.html#comptime");
term("runtime", "/site/documentation/panther/value_stages.html#runtime");

term("when conditionals", "/site/documentation/panther/when_conditionals.html");


term("operator new");
term("operator delete");
term("in-place new");
term("in-place delete");





term("array");
term("array reference");
term("vector");


term("attribute #rt");
term("attribute #pub");

term("intrinsic @import");

term("primitive", "/site/documentation/panther/primitive_types.html");
term("integral");
term("unsigned integral");
term("signed integral");
term("floating-point");


term("function", "/site/documentation/panther/functions.html");
term("try");





///////////////////////////////////
// C/C++

term("lvalue", "https://en.cppreference.com/w/cpp/language/value_category#lvalue");
term("rvalue", "https://en.cppreference.com/w/cpp/language/value_category#rvalue");

