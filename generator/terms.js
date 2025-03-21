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
		terms[text] = html.inline_code(text);	
	}else{
		terms[text] = html.inline_code(html.link(text, link));	
	}	
}



exports.get = function(text){
	assert(terms[text] !== undefined, `term "${text}" was not defined`);
	return terms[text];
}



//////////////////////////////////////////////////////////////////////
// terms

term("undefined behavior", "/site/documentation/panther/undefined_behavior.html");
term("uninitialized", "/site/documentation/panther/uninitialized.html");

term("ephemeral", "/site/documentation/panther/value_categories.html#ephemeral");
term("concrete", "/site/documentation/panther/value_categories.html#concrete");
term("concrete-mutable", "/site/documentation/panther/value_categories.html#concrete_mutable");
term("concrete-forwardable", "/site/documentation/panther/value_categories.html#concrete_forwardable");
term("concrete-const", "/site/documentation/panther/value_categories.html#concrete_const");
term("destructive-movable-concrete-const", "/site/documentation/panther/value_categories.html#concrete_const_movable");

term("literal", "/site/documentation/panther/literals.html");
term("literals", "/site/documentation/panther/literals.html");

term("character escape code");

term("fluid");
term("Fluid");

term("RHS");
term("LHS");


term("operator copy");
term("operator move");
term("operator destructive move");
term("operator forward");


term("variables");
term("var variables");
term("const variables");
term("def variables");


term("read parameters");
term("mut parameters");
term("in parameters");

term("dereference");
term("accessor");
term("unwrap");
term("optional");


term("constexpr", "/site/documentation/panther/value_stages.html#constexpr");
term("comptime", "/site/documentation/panther/value_stages.html#comptime");
term("runtime", "/site/documentation/panther/value_stages.html#runtime");

term("when conditionals", "/site/documentation/panther/when_conditionals.html");


term("operator new");
term("operator delete");
term("in-place new");
term("in-place delete");

term("initialization");

term("assignment");

term("initializer value");

term("array");



///////////////////////////////////
// C/C++

term("lvalue", "https://en.cppreference.com/w/cpp/language/value_category#lvalue");
term("rvalue", "https://en.cppreference.com/w/cpp/language/value_category#rvalue");

