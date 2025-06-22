//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../Page.js").Page;
const Language = require("../../../Page.js").Language;
const breadcrumbs = require("../../../Page.js").breadcrumbs;
const html = require("../../../html.js");
const search = require("../../../search.js");
const terms = require("../../../terms.js");


let page = new Page(__filename, {
	path                    : "documentation/panther/operators.html",
	title                   : "Operators",
	categories              : [search.Category.PANTHER, search.Category.DOCUMENTATION],
	breadcrumbs             : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION],
	description             : "Documentation for operators in the Panther programming language",
});


page.paragraph(`Operators are a set of operations that create an expression from one or more sub-expressions. Unless remarked otherwise, all operators support operator overloading and forwarding of ${terms.get("fluid")} values. In addition, all operators are constexpr (unless they are overloaded, in which case it is overload specific).`);


function box_item(str){
	return html.tag("p", str, "margin: 0.5em 0;");
}



page.h2Searchable("Arithmetic Operators", "arithmetic");
page.table([
	["Name", "Syntax", "Supported Builtin Types", "Example", "Remarks"],
	[
		"Addition",
		page.inline_code_block(Language.PANTHER, "a + b"),
		box_item(terms.get("integral")) + box_item(terms.get("floating-point")) + box_item(terms.get("vector") + " of " + terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("floating-point")),
		page.inline_code_block(Language.PANTHER, "1 + 2 // 3"),
		box_item("Type of return is the type of arguments.") + box_item(`Integer overflowing is ${terms.get("undefined behavior")}.`),
	],
	[
		"Wrapping Arithmetic",
		page.inline_code_block(Language.PANTHER, "a +% b"),
		box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
		page.inline_code_block(Language.PANTHER, "1 +% (255 as UI8) // 0"),
		box_item("Type of return is the type of arguments.") + box_item(`Integer overflowing is allowed (two's compliment).`),
	],
	[
		"Saturating Addition",
		page.inline_code_block(Language.PANTHER, "a +| b"),
		box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
		page.inline_code_block(Language.PANTHER, "1 +| (255 as UI8) // 255"),
		box_item("Type of return is the type of arguments."),
	],
	[
		"Subtraction",
		page.inline_code_block(Language.PANTHER, "a - b"),
		box_item(terms.get("integral")) + box_item(terms.get("floating-point")) + box_item(terms.get("vector") + " of " + terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("floating-point")),
		page.inline_code_block(Language.PANTHER, "5 - 2 // 3"),
		box_item("Type of return is the type of arguments.") + box_item(`Integer overflowing is ${terms.get("undefined behavior")}.`),
	],
	[
		"Wrapping Subtraction",
		page.inline_code_block(Language.PANTHER, "a -% b"),
		box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
		page.inline_code_block(Language.PANTHER, "5 -% (6 as UI8) // 255"),
		box_item("Type of return is the type of arguments.") + box_item(`Integer overflowing is allowed (two's compliment).`),
	],
	[
		"Saturating Subtraction",
		page.inline_code_block(Language.PANTHER, "a -| b"),
		box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
		page.inline_code_block(Language.PANTHER, "5 -| (6 as UI8) // 0"),
		box_item("Type of return is the type of arguments."),
	],
	[
		"Multiplication",
		page.inline_code_block(Language.PANTHER, "a * b"),
		box_item(terms.get("integral")) + box_item(terms.get("floating-point")) + box_item(terms.get("vector") + " of " + terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("floating-point")),
		page.inline_code_block(Language.PANTHER, "5 * 2 // 10"),
		box_item("Type of return is the type of arguments.") + box_item(`Integer overflowing is ${terms.get("undefined behavior")}.`),
	],
	[
		"Wrapping Multiplication",
		page.inline_code_block(Language.PANTHER, "a *% b"),
		box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
		page.inline_code_block(Language.PANTHER, "32 *% (8 as UI8) // 0"),
		box_item("Type of return is the type of arguments.") + box_item(`Integer overflowing is allowed (two's compliment).`),
	],
	[
		"Saturating Multiplication",
		page.inline_code_block(Language.PANTHER, "a *| b"),
		box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
		page.inline_code_block(Language.PANTHER, "32 *| (8 as UI8) // 255"),
		box_item("Type of return is the type of arguments."),
	],
	[
		"Division",
		page.inline_code_block(Language.PANTHER, "a / b"),
		box_item(terms.get("integral")) + box_item(terms.get("floating-point")) + box_item(terms.get("vector") + " of " + terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("floating-point")),
		page.inline_code_block(Language.PANTHER, "7 / 3 // 2"),
		box_item("Type of return is the type of arguments.") + box_item(`Integer overflowing is ${terms.get("undefined behavior")}.`),
	],
	[
		"Division Remainder",
		page.inline_code_block(Language.PANTHER, "a % b"),
		box_item(terms.get("integral")) + box_item(terms.get("floating-point")) + box_item(terms.get("vector") + " of " + terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("floating-point")),
		page.inline_code_block(Language.PANTHER, "7 % 3 // 1"),
		box_item("Type of return is the type of arguments.") + box_item(`Integer overflowing is allowed (two's compliment).`),
	],
	[
		"Negate",
		page.inline_code_block(Language.PANTHER, "-a"),
		box_item(terms.get("integral")) + box_item(terms.get("floating-point")) + box_item(terms.get("vector") + " of " + terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("floating-point")),
		page.inline_code_block(Language.PANTHER, "-12 // -12"),
		box_item("Type of return is the type of argument."),
	],
], "68.7em");



page.h2Searchable("Comparative Operators", "comparative");
page.table([
	["Name", "Syntax", "Supported Builtin Types", "Example", "Remarks"],
	[
		"Equal To",
		page.inline_code_block(Language.PANTHER, "a == b"),
		"any " + terms.get("compatable types"),
		page.inline_code_block(Language.PANTHER, "12 == 10 // false<br/>\n12 == 12 // true<br/>\n12 == 14 // false"),
		box_item(`Type of return is ${page.inline_code_block(Language.PANTHER, "Bool")}.`),
	],
	[
		"Not Equal To",
		page.inline_code_block(Language.PANTHER, "a != b"),
		"any " + terms.get("compatable types"),
		page.inline_code_block(Language.PANTHER, "12 != 10 // false<br/>\n12 != 12 // true<br/>\n12 != 14 // false"),
		box_item(`Type of return is ${page.inline_code_block(Language.PANTHER, "Bool")}.`),
	],
	[
		"Less Than",
		page.inline_code_block(Language.PANTHER, "a < b"),
		"any " + terms.get("compatable types"),
		page.inline_code_block(Language.PANTHER, "12 < 10 // false<br/>\n12 < 12 // false<br/>\n12 < 14 // true"),
		box_item(`Type of return is ${page.inline_code_block(Language.PANTHER, "Bool")}.`),
	],
	[
		"Less Than or Equal To",
		page.inline_code_block(Language.PANTHER, "a <= b"),
		"any " + terms.get("compatable types"),
		page.inline_code_block(Language.PANTHER, "12 <= 10 // false<br/>\n12 <= 12 // true<br/>\n12 <= 14 // true"),
		box_item(`Type of return is ${page.inline_code_block(Language.PANTHER, "Bool")}.`),
	],
	[
		"Greater Than",
		page.inline_code_block(Language.PANTHER, "a > b"),
		"any " + terms.get("compatable types"),
		page.inline_code_block(Language.PANTHER, "12 > 10 // true<br/>\n12 > 12 // false<br/>\n12 > 14 // false"),
		box_item(`Type of return is ${page.inline_code_block(Language.PANTHER, "Bool")}.`),
	],
	[
		"Greater Than or Equal To",
		page.inline_code_block(Language.PANTHER, "a >= b"),
		"any " + terms.get("compatable types"),
		page.inline_code_block(Language.PANTHER, "12 >= 10 // true<br/>\n12 >= 12 // true<br/>\n12 >= 14 // false"),
		box_item(`Type of return is ${page.inline_code_block(Language.PANTHER, "Bool")}.`),
	],
], "68.7em");


page.h2Searchable("Bitwise Operators", "bitwise");
page.table([
	["Name", "Syntax", "Supported Builtin Types", "Example", "Remarks"],
	[
		"Bitwise And",
		page.inline_code_block(Language.PANTHER, "a & b"),
		box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
		page.inline_code_block(Language.PANTHER, "0b1010 & 0b0110 // 0b0010"),
		box_item("Type of return is the type of arguments."),
	],
	[
		"Bitwise Or",
		page.inline_code_block(Language.PANTHER, "a | b"),
		box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
		page.inline_code_block(Language.PANTHER, "0b1010 | 0b0110 // 0b1110"),
		box_item("Type of return is the type of arguments."),
	],
	[
		"Bitwise Xor",
		page.inline_code_block(Language.PANTHER, "a ^ b"),
		box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
		page.inline_code_block(Language.PANTHER, "0b1010 | 0b0110 // 0b1100"),
		box_item("Type of return is the type of arguments."),
	],
	[
		"Bit Shift Left",
		page.inline_code_block(Language.PANTHER, "a << b"),
		box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
		page.inline_code_block(Language.PANTHER, "0b0101 << 2 // 0b10100"),
		box_item(`Type of return is the type of ${terms.get("LHS")}.`) + box_item(`RHS must be ${page.inline_code_block(Language.PANTHER, "ceil(log2(@numBits<{LHS}>()))")}.`),
	],
	[
		"Saturating Bit Shift Left",
		page.inline_code_block(Language.PANTHER, "a <<| b"),
		box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
		page.inline_code_block(Language.PANTHER, "(0b11 as UI8) << 7 // 255"),
		box_item(`Type of return is the type of ${terms.get("LHS")}.`) + box_item(`RHS must be ${page.inline_code_block(Language.PANTHER, "ceil(log2(@numBits<{LHS}>()))")}.<br/>${html.italic("This restriction most likely will change in the future,<br/>but more consideration is required.")}`),
	],
	[
		"Bit Shift Right",
		page.inline_code_block(Language.PANTHER, "a >> b"),
		box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
		page.inline_code_block(Language.PANTHER, "0b11000 >> 2 // 0b110"),
		box_item(`Type of return is the type of ${terms.get("LHS")}.`) + box_item(`RHS must be ${page.inline_code_block(Language.PANTHER, "ceil(log2(@numBits<{LHS}>()))")}.`),
	],
	[
		"Bitwise Not",
		page.inline_code_block(Language.PANTHER, "~a"),
		box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
		page.inline_code_block(Language.PANTHER, "~(0b10101110 as UI8) // 0b01010001"),
		box_item("Type of return is the type of argument.") + box_item("Does not support fluid values"),
	],
], "68.7em");


page.h2Searchable("Pointer/Optional Operators", "pointer_optional");
page.table([
	["Name", "Syntax", "Supported Builtin Types", "Example", "Remarks"],
	[
		"Address Of",
		page.inline_code_block(Language.PANTHER, "&a"),
		box_item("Any"),
		page.inline_code_block(Language.PANTHER, "var num: Int = 12;") + "<br/>" + page.inline_code_block(Language.PANTHER, "const num_ptr: Int* = &num;") + "<br/>" + page.inline_code_block(Language.PANTHER, "num_ptr.* // 12"),
		box_item(`Argument must be ${terms.get("concrete")}.`) + box_item(`Using on a const object returns a ${terms.get("read-only pointer")},<br/>otherwise is a ${terms.get("pointer")}.`),
	],
	[
		"Read-Only Address Of",
		page.inline_code_block(Language.PANTHER, "&|a"),
		box_item("Any"),
		page.inline_code_block(Language.PANTHER, "var num: Int = 12;") + "<br/>" + page.inline_code_block(Language.PANTHER, "const num_ptr: Int*| = &|num;") + "<br/>" + page.inline_code_block(Language.PANTHER, "num_ptr.* // 12"),
		box_item(`Argument must be ${terms.get("concrete")}.`),
	],
	[
		"Dereference",
		page.inline_code_block(Language.PANTHER, "a.*"),
		box_item("Any " + terms.get("pointer")),
		page.inline_code_block(Language.PANTHER, "var num: Int = 12;") + "<br/>" + page.inline_code_block(Language.PANTHER, "const num_ptr: Int* = &num;") + "<br/>" + page.inline_code_block(Language.PANTHER, "num_ptr.* // 12"),
		box_item(`Dereferencing a ${terms.get("read-only pointer")} results in a<br/>const value, otherwise the value is mutable.`),
	],
	[
		"Unwrap",
		page.inline_code_block(Language.PANTHER, "a.?"),
		box_item("Any " + terms.get("optional")),
		page.inline_code_block(Language.PANTHER, "var opt_num: Int? = 12;") + "<br/>" + page.inline_code_block(Language.PANTHER, "opt_num.? // 12"),
		box_item(`It is ${terms.get("undefined behavior")} to unwrap an optional<br/> that is ${terms.get("null")}.`),
	],
], "68.7em");


page.h2Searchable("Boolean", "boolean");
page.table([
	["Name", "Syntax", "Supported Builtin Types", "Example", "Remarks"],
	[
		"Logical And",
		page.inline_code_block(Language.PANTHER, "a && b"),
		box_item(page.inline_code_block(Language.PANTHER, "Bool")),
		box_item(page.inline_code_block(Language.PANTHER, "true && false // false")),
		box_item(`Type of return is ${page.inline_code_block(Language.PANTHER, "Bool")}.`) + box_item(`If ${terms.get("LHS")} is ${page.inline_code_block(Language.PANTHER, "false")}, don't evaluate ${terms.get("RHS")} and return ${page.inline_code_block(Language.PANTHER, "false")}.`),
	],
	[
		"Logical Or",
		page.inline_code_block(Language.PANTHER, "a || b"),
		box_item(page.inline_code_block(Language.PANTHER, "Bool")),
		box_item(page.inline_code_block(Language.PANTHER, "true || false // false")),
		box_item(`Type of return is ${page.inline_code_block(Language.PANTHER, "Bool")}.`) + box_item(`If ${terms.get("LHS")} is ${page.inline_code_block(Language.PANTHER, "true")}, don't evaluate ${terms.get("RHS")} and return ${page.inline_code_block(Language.PANTHER, "true")}.`),
	],
	[
		"Boolean Not",
		page.inline_code_block(Language.PANTHER, "!a"),
		box_item(page.inline_code_block(Language.PANTHER, "Bool")),
		box_item(page.inline_code_block(Language.PANTHER, "!true // false")),
		box_item(`Type of return is ${page.inline_code_block(Language.PANTHER, "Bool")}.`),
	],
], "68.7em");


page.h2Searchable("Object Operators", "type");
page.paragraph(page.inline_code_block(Language.PANTHER, "copy a") + "&emsp;" + html.italic("(TODO)"));
page.paragraph(page.inline_code_block(Language.PANTHER, "move a") + "&emsp;" + html.italic("(TODO)"));
page.paragraph(page.inline_code_block(Language.PANTHER, "forward a") + "&emsp;" + html.italic("(TODO)"));

page.h2Searchable("Type Conversion Operator", "type");
page.paragraph(page.inline_code_block(Language.PANTHER, "a as b") + "&emsp;" + html.italic("(TODO)"));

page.h2Searchable("Accessor Operator", "type");
page.paragraph(page.inline_code_block(Language.PANTHER, "a.b") + "&emsp;" + html.italic("(TODO)"));


page.h2Searchable("Composite Assignment Operators", "type");
page.paragraph(html.italic("(TODO)"));


page.h2Searchable("Operator Precedence", "precedence");
page.table([
	["Precedence", "Operators"],
	["1", page.inline_code_block(Language.PANTHER, "a.b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a.*") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a.?")],
	["2", page.inline_code_block(Language.PANTHER, "&a") + "&emsp;" + page.inline_code_block(Language.PANTHER, "&|a") + "&emsp;" + page.inline_code_block(Language.PANTHER, "copy a") + "&emsp;" + page.inline_code_block(Language.PANTHER, "move a") + "&emsp;" + page.inline_code_block(Language.PANTHER, "forward a") + "&emsp;" + page.inline_code_block(Language.PANTHER, "-a") + "&emsp;" + page.inline_code_block(Language.PANTHER, "!a") + "&emsp;" + page.inline_code_block(Language.PANTHER, "~a")],
	["3", page.inline_code_block(Language.PANTHER, "a as b")],
	["4", page.inline_code_block(Language.PANTHER, "a * b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a *% b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a *| b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a / b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a % b")],
	["5", page.inline_code_block(Language.PANTHER, "a + b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a +% b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a +| b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a - b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a -% b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a -| b")],
	["6", page.inline_code_block(Language.PANTHER, "a << b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a <<| b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a >> b")],
	["7", page.inline_code_block(Language.PANTHER, "a & b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a | b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a ^ b")],
	["8", page.inline_code_block(Language.PANTHER, "a == b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a != b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a < b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a <= b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a > b") + "&emsp;" + page.inline_code_block(Language.PANTHER, "a >= b")],
	["9", page.inline_code_block(Language.PANTHER, "a && b")],
	["10", page.inline_code_block(Language.PANTHER, "a || b")],
]);




page.generate();

