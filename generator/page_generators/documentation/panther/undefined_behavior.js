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

let page = new Page("Undefined Behavior", "documentation/panther/undefined_behavior.html");

page.h1("Undefined Behavior");

page.paragraph("The term \"Undefined Behavior\" (commonly shortened to \"UB\") refers to any behavior cannot be defined by the language. This could be because the behavior differs depending on the platform, or because the compiler is allowed to expect that it will never happen. Anything that is undefined behavior is explicitly disallowed by the language and should be avoided.");


page.h2("Example");
page.code_block("Panther", `func entry = () #entry -> UI8 {
	const foo: UI8 = 12;


	// This is undefined behavior as addition is not allowed to overflow
	const sum_1: UI8 = foo + 255;

	// This is not undefined behavior as wrapping addition is allowed to overflow
	const sum_2: UI8 = foo +% 255;


	return 0;
}`);


page.generate();

