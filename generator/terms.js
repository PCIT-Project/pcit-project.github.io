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

term("undefined behavior");

term("ephemeral", "/site/documentation/panther/value_categories.html#ephemeral");
term("concrete", "/site/documentation/panther/value_categories.html#concrete");
term("concrete-mutable", "/site/documentation/panther/value_categories.html#concrete_mutable");
term("concrete-const", "/site/documentation/panther/value_categories.html#concrete_const");
term("concrete-const-movable", "/site/documentation/panther/value_categories.html#concrete_const_movable");


term("literal");
term("literals");

term("fluid literals");
term("Fluid literals");


term("copy");
term("move");
term("destructive move");


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


///////////////////////////////////
// C/C++

term("lvalue", "https://en.cppreference.com/w/cpp/language/value_category#lvalue");
term("rvalue", "https://en.cppreference.com/w/cpp/language/value_category#rvalue");

