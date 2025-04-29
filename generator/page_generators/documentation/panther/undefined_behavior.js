//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../Page.js").Page;
const Language = require("../../../Page.js").Language;
const html = require("../../../html.js");
const terms = require("../../../terms.js");
const search = require("../../../search.js");


let page = new Page(__filename, {
	path: "documentation/panther/undefined_behavior.html",
	title: "Undefined Behavior | Panther Documentation",
	on_page_title: "Undefined Behavior",
	categories: [search.Category.PANTHER, search.Category.DOCUMENTATION],
	description: "Documentation for Undefined Behavior in the Panther programming language",
});


page.paragraph("The term \"Undefined Behavior\" (commonly shortened to \"UB\") refers to any behavior that cannot be defined by the language. This could be because the behavior would differ depending on the platform, or because the compiler assumes that the behavior never happens and generates instructions accordingly. Anything that is undefined behavior is explicitly disallowed by the Panther language specification and should be avoided.");

page.paragraph("The Panther compiler attempts to detect undefined behavior at compile time. In addition, there are build settings that can be enabled that check for undefined behavior at runtime (both for debug and release builds). It is impossible to detect all undefined behavior however, so these detection mechanisms do not guarantee that no undefined behavior exists in the Panther code.");


page.h2("Example");
page.code_block(Language.PANTHER, `func entry = () #entry -> UI8 {
	const foo: UI8 = 12;


	// This is undefined behavior as addition is not allowed to overflow
	const sum_1: UI8 = foo + 255;

	// This is not undefined behavior as wrapping addition is allowed to overflow
	const sum_2: UI8 = foo +% 255;


	return 0;
}`);


page.generate();

