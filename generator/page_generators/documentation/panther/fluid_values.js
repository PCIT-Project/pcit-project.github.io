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
const Language = require("../../../Page.js").Language;
const syntax_highlighting = require("../../../syntax_highlighting/syntax_highlighting.js");



let page = new Page(__filename, {
	path: "documentation/panther/fluid_values.html",
	title: "Fluid Values | Panther Documentation",
	on_page_title: "Fluid Values",
	categories: [search.Category.PANTHER, search.Category.DOCUMENTATION],
	description: "Documentation for fluid values in the Panther programming language",
});


page.paragraph(`Fluid values are a special category of values that are not explicitly typed. They come in two kinds: integral and float. A fluid integral may implicitly convert to any builtin integral type, and a fluid float may implicitly convert to any builtin float type. ${terms.get("Integer literals")} are fluid integrals and ${terms.get("float literals")} are fluid floats.`);

page.paragraph(`In addition, the result of a operator where all operands are fluid is itself also fluid. The fluid kind of the result is the same as the operands. The use of parentheses are also supported.`);

page.code_block(Language.PANTHER, 
` // valid
const fluid_int_1: UInt = 12;
const fluid_int_2: I32 = 2 * (5 + -1) + 4;
const fluid_float_1: F32 = 12.4;
const fluid_float_2: F64 = 3.0 + 9.0;

// invalid becase \`12\` is fluid (and not explicitly typed), therefore the type cannot be inferred
const fluid_int_3 = 12; 

// invalid because \`12.4\` is a fluid float, and cannot be implicitly converted to an integral type
const fluid_int_4: Int = 12.4;

// invalid because \`12\` is a fluid integral, and cannot be implicitly converted to a float type
const fluid_float_3: F32 = 12;`);



page.paragraph(`${terms.get("def variables")} that are implicitly typed and are declared with a fluid value are themselves fluid.`);

page.code_block(Language.PANTHER, 
` // valid becase this \`def\` variable has no explicit type and therefore is fluid
def NUM = 12;
const num: Int = NUM;
const num_2: Int = NUM + 14;

// invalid because NUM is fluid (not explicitly typed), therefore the type cannot be inferred
const num_3 = NUM;`);


page.generate();

