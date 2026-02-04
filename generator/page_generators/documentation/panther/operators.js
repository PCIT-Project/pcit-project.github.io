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

exports.getPageGenerator = function(){
	return new (require("../../../PageGenerator.js").PageGenerator)(
		() => {
			return new Page(__filename, {
				path                    : "documentation/panther/operators.html",
				title                   : "Operators",
				categories              : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs             : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION],
				description             : "Documentation for operators in the Panther programming language",
			});
		},
		(page) => {
			page.paragraph(`Operators are a set of operations that create an expression from one or more sub-expressions. Unless remarked otherwise, all operators support operator overloading and forwarding of ${terms.get("fluid")} values. In addition, all operators are constexpr (unless they are overloaded, in which case it is overload specific).`);


			function box_item(str){
				return html.tag("p", str, "margin: 0.5em 0;");
			}



			page.h2Searchable("Arithmetic Operators", "arithmetic");
			page.table([
				["Name", "Syntax", "Supported Builtin Types", "Example", "Remarks"],
				[
					html.anchor("Addition", "addition"),
					page.inline_code(Language.PANTHER, "a + b"),
					box_item(terms.get("integral")) + box_item(terms.get("floating-point")) + box_item(terms.get("vector") + " of " + terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("floating-point")),
					page.inline_code(Language.PANTHER, "1 + 2 // 3"),
					box_item("Type of return is the type of arguments.") + box_item(`Integer overflowing is ${terms.get("undefined behavior")}.`),
				],
				[
					html.anchor("Wrapping Addition", "wrapping_addition"),
					page.inline_code(Language.PANTHER, "a +% b"),
					box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
					page.inline_code(Language.PANTHER, "1 +% (255 as UI8) // 0"),
					box_item("Type of return is the type of arguments.") + box_item(`Integer overflowing is allowed (two's compliment).`),
				],
				[
					html.anchor("Saturating Addition", "saturating_addition"),
					page.inline_code(Language.PANTHER, "a +| b"),
					box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
					page.inline_code(Language.PANTHER, "1 +| (255 as UI8) // 255"),
					box_item("Type of return is the type of arguments."),
				],
				[
					html.anchor("Subtraction", "subtraction"),
					page.inline_code(Language.PANTHER, "a - b"),
					box_item(terms.get("integral")) + box_item(terms.get("floating-point")) + box_item(terms.get("vector") + " of " + terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("floating-point")),
					page.inline_code(Language.PANTHER, "5 - 2 // 3"),
					box_item("Type of return is the type of arguments.") + box_item(`Integer overflowing is ${terms.get("undefined behavior")}.`),
				],
				[
					html.anchor("Wrapping Subtraction", "wrapping_subtraction"),
					page.inline_code(Language.PANTHER, "a -% b"),
					box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
					page.inline_code(Language.PANTHER, "5 -% (6 as UI8) // 255"),
					box_item("Type of return is the type of arguments.") + box_item(`Integer overflowing is allowed (two's compliment).`),
				],
				[
					html.anchor("Saturating Subtraction", "saturating_subtraction"),
					page.inline_code(Language.PANTHER, "a -| b"),
					box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
					page.inline_code(Language.PANTHER, "5 -| (6 as UI8) // 0"),
					box_item("Type of return is the type of arguments."),
				],
				[
					html.anchor("Multiplication", "multiplication"),
					page.inline_code(Language.PANTHER, "a * b"),
					box_item(terms.get("integral")) + box_item(terms.get("floating-point")) + box_item(terms.get("vector") + " of " + terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("floating-point")),
					page.inline_code(Language.PANTHER, "5 * 2 // 10"),
					box_item("Type of return is the type of arguments.") + box_item(`Integer overflowing is ${terms.get("undefined behavior")}.`),
				],
				[
					html.anchor("Wrapping Multiplication", "wrapping_multiplication"),
					page.inline_code(Language.PANTHER, "a *% b"),
					box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
					page.inline_code(Language.PANTHER, "32 *% (8 as UI8) // 0"),
					box_item("Type of return is the type of arguments.") + box_item(`Integer overflowing is allowed (two's compliment).`),
				],
				[
					html.anchor("Saturating Multiplication", "saturating_multiplication"),
					page.inline_code(Language.PANTHER, "a *| b"),
					box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
					page.inline_code(Language.PANTHER, "32 *| (8 as UI8) // 255"),
					box_item("Type of return is the type of arguments."),
				],
				[
					html.anchor("Division", "division"),
					page.inline_code(Language.PANTHER, "a / b"),
					box_item(terms.get("integral")) + box_item(terms.get("floating-point")) + box_item(terms.get("vector") + " of " + terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("floating-point")),
					page.inline_code(Language.PANTHER, "7 / 3 // 2"),
					box_item("Type of return is the type of arguments.") + box_item(`Integer overflowing is ${terms.get("undefined behavior")}.`),
				],
				[
					html.anchor("Division Remainder", "division_remainder"),
					page.inline_code(Language.PANTHER, "a % b"),
					box_item(terms.get("integral")) + box_item(terms.get("floating-point")) + box_item(terms.get("vector") + " of " + terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("floating-point")),
					page.inline_code(Language.PANTHER, "7 % 3 // 1"),
					box_item("Type of return is the type of arguments.") + box_item(`Integer overflowing is allowed (two's compliment).`),
				],
				[
					html.anchor("Negate", "negate"),
					page.inline_code(Language.PANTHER, "-a"),
					box_item(terms.get("integral")) + box_item(terms.get("floating-point")) + box_item(terms.get("vector") + " of " + terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("floating-point")),
					page.inline_code(Language.PANTHER, "-12 // -12"),
					box_item("Type of return is the type of argument."),
				],
			], "68.7em");
			search.addSearchTarget("Operator Addition", page.getPath() + "#addition", page.getCategories());
			search.addSearchTarget("Operator +", page.getPath() + "#addition", page.getCategories());
			search.addSearchTarget("Operator Wrapping Addition", page.getPath() + "#wrapping_addition", page.getCategories());
			search.addSearchTarget("Operator +%", page.getPath() + "#wrapping_addition", page.getCategories());
			search.addSearchTarget("Operator Saturating Addition", page.getPath() + "#saturating_addition", page.getCategories());
			search.addSearchTarget("Operator +|", page.getPath() + "#saturating_addition", page.getCategories());
			search.addSearchTarget("Operator Subtraction", page.getPath() + "#subtraction", page.getCategories());
			search.addSearchTarget("Operator - (infix)", page.getPath() + "#subtraction", page.getCategories());
			search.addSearchTarget("Operator Wrapping Subtraction", page.getPath() + "#wrapping_subtraction", page.getCategories());
			search.addSearchTarget("Operator -%", page.getPath() + "#wrapping_subtraction", page.getCategories());
			search.addSearchTarget("Operator Saturating Subtraction", page.getPath() + "#saturating_subtraction", page.getCategories());
			search.addSearchTarget("Operator -|", page.getPath() + "#saturating_subtraction", page.getCategories());
			search.addSearchTarget("Operator Multiplication", page.getPath() + "#multiplication", page.getCategories());
			search.addSearchTarget("Operator *", page.getPath() + "#multiplication", page.getCategories());
			search.addSearchTarget("Operator Wrapping Multiplication", page.getPath() + "#wrapping_multiplication", page.getCategories());
			search.addSearchTarget("Operator *%", page.getPath() + "#wrapping_multiplication", page.getCategories());
			search.addSearchTarget("Operator Saturating Multiplication", page.getPath() + "#saturating_multiplication", page.getCategories());
			search.addSearchTarget("Operator *|", page.getPath() + "#saturating_multiplication", page.getCategories());
			search.addSearchTarget("Operator Division", page.getPath() + "#division", page.getCategories());
			search.addSearchTarget("Operator /", page.getPath() + "#division", page.getCategories());
			search.addSearchTarget("Operator Division Remainder", page.getPath() + "#division_remainder", page.getCategories());
			search.addSearchTarget("Operator %", page.getPath() + "#division_remainder", page.getCategories());
			search.addSearchTarget("Operator Negate", page.getPath() + "#negate", page.getCategories());
			search.addSearchTarget("Operator - (prefix)", page.getPath() + "#negate", page.getCategories());



			page.h2Searchable("Comparative Operators", "comparative");
			page.table([
				["Name", "Syntax", "Supported Builtin Types", "Example", "Remarks"],
				[
					html.anchor("Equal To", "eq"),
					page.inline_code(Language.PANTHER, "a == b"),
					"any " + terms.get("compatable types"),
					page.inline_code(Language.PANTHER, "12 == 10 // false<br/>\n12 == 12 // true<br/>\n12 == 14 // false"),
					box_item(`Type of return is ${page.inline_code(Language.PANTHER, "Bool")}.`),
				],
				[
					html.anchor("Not Equal To", "neq"),
					page.inline_code(Language.PANTHER, "a != b"),
					"any " + terms.get("compatable types"),
					page.inline_code(Language.PANTHER, "12 != 10 // false<br/>\n12 != 12 // true<br/>\n12 != 14 // false"),
					box_item(`Type of return is ${page.inline_code(Language.PANTHER, "Bool")}.`),
				],
				[
					html.anchor("Less Than", "lt"),
					page.inline_code(Language.PANTHER, "a < b"),
					"any " + terms.get("compatable types"),
					page.inline_code(Language.PANTHER, "12 < 10 // false<br/>\n12 < 12 // false<br/>\n12 < 14 // true"),
					box_item(`Type of return is ${page.inline_code(Language.PANTHER, "Bool")}.`),
				],
				[
					html.anchor("Less Than or Equal To", "lte"),
					page.inline_code(Language.PANTHER, "a <= b"),
					"any " + terms.get("compatable types"),
					page.inline_code(Language.PANTHER, "12 <= 10 // false<br/>\n12 <= 12 // true<br/>\n12 <= 14 // true"),
					box_item(`Type of return is ${page.inline_code(Language.PANTHER, "Bool")}.`),
				],
				[
					html.anchor("Greater Than", "gt"),
					page.inline_code(Language.PANTHER, "a > b"),
					"any " + terms.get("compatable types"),
					page.inline_code(Language.PANTHER, "12 > 10 // true<br/>\n12 > 12 // false<br/>\n12 > 14 // false"),
					box_item(`Type of return is ${page.inline_code(Language.PANTHER, "Bool")}.`),
				],
				[
					html.anchor("Greater Than or Equal To", "gte"),
					page.inline_code(Language.PANTHER, "a >= b"),
					"any " + terms.get("compatable types"),
					page.inline_code(Language.PANTHER, "12 >= 10 // true<br/>\n12 >= 12 // true<br/>\n12 >= 14 // false"),
					box_item(`Type of return is ${page.inline_code(Language.PANTHER, "Bool")}.`),
				],
			], "68.7em");
			search.addSearchTarget("Operator Equal To", page.getPath() + "#eq", page.getCategories());
			search.addSearchTarget("Operator ==", page.getPath() + "#eq", page.getCategories());
			search.addSearchTarget("Operator Not Equal To", page.getPath() + "#neq", page.getCategories());
			search.addSearchTarget("Operator !=", page.getPath() + "#neq", page.getCategories());
			search.addSearchTarget("Operator Less Than", page.getPath() + "#lt", page.getCategories());
			search.addSearchTarget("Operator <", page.getPath() + "#lt", page.getCategories());
			search.addSearchTarget("Operator Less Than or Equal To", page.getPath() + "#lte", page.getCategories());
			search.addSearchTarget("Operator <=", page.getPath() + "#lte", page.getCategories());
			search.addSearchTarget("Operator Greater Than", page.getPath() + "#gt", page.getCategories());
			search.addSearchTarget("Operator >", page.getPath() + "#gt", page.getCategories());
			search.addSearchTarget("Operator Greater Than or Equal To", page.getPath() + "#gte", page.getCategories());
			search.addSearchTarget("Operator >=", page.getPath() + "#gte", page.getCategories());


			page.h2Searchable("Bitwise Operators", "bitwise");
			page.table([
				["Name", "Syntax", "Supported Builtin Types", "Example", "Remarks"],
				[
					html.anchor("Bitwise And", "bitwise_and"),
					page.inline_code(Language.PANTHER, "a & b"),
					box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
					page.inline_code(Language.PANTHER, "0b1010 & 0b0110 // 0b0010"),
					box_item("Type of return is the type of arguments."),
				],
				[
					html.anchor("Bitwise Or", "bitwise_or"),
					page.inline_code(Language.PANTHER, "a | b"),
					box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
					page.inline_code(Language.PANTHER, "0b1010 | 0b0110 // 0b1110"),
					box_item("Type of return is the type of arguments."),
				],
				[
					html.anchor("Bitwise Xor", "bitwise_xor"),
					page.inline_code(Language.PANTHER, "a ^ b"),
					box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
					page.inline_code(Language.PANTHER, "0b1010 | 0b0110 // 0b1100"),
					box_item("Type of return is the type of arguments."),
				],
				[
					html.anchor("Bit Shift Left", "bit_shift_left"),
					page.inline_code(Language.PANTHER, "a << b"),
					box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
					page.inline_code(Language.PANTHER, "0b0101 << 2 // 0b10100"),
					box_item(`Type of return is the type of ${terms.get("LHS")}.`) + box_item(`RHS must be ${page.inline_code(Language.PANTHER, "ceil(log2(@numBits<{LHS}>()))")}.`),
				],
				[
					html.anchor("Saturating Bit Shift Left", "saturating_bit_shift_left"),
					page.inline_code(Language.PANTHER, "a <<| b"),
					box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
					page.inline_code(Language.PANTHER, "(0b11 as UI8) << 7 // 255"),
					box_item(`Type of return is the type of ${terms.get("LHS")}.`) + box_item(`RHS must be ${page.inline_code(Language.PANTHER, "ceil(log2(@numBits<{LHS}>()))")}.<br/>${html.italic("This restriction most likely will change in the future,<br/>but more consideration is required.")}`),
				],
				[
					html.anchor("Bit Shift Right", "bit_shift_right"),
					page.inline_code(Language.PANTHER, "a >> b"),
					box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
					page.inline_code(Language.PANTHER, "0b11000 >> 2 // 0b110"),
					box_item(`Type of return is the type of ${terms.get("LHS")}.`) + box_item(`RHS must be ${page.inline_code(Language.PANTHER, "ceil(log2(@numBits<{LHS}>()))")}.`),
				],
				[
					html.anchor("Bitwise Not", "bitwise_not"),
					page.inline_code(Language.PANTHER, "~a"),
					box_item(terms.get("integral")) + box_item(terms.get("vector") + " of " + terms.get("integral")),
					page.inline_code(Language.PANTHER, "~(0b10101110 as UI8) // 0b01010001"),
					box_item("Type of return is the type of argument.") + box_item("Does not support fluid values"),
				],
			], "68.7em");
			search.addSearchTarget("Operator Bitwise And", page.getPath() + "#bitwise_and", page.getCategories());
			search.addSearchTarget("Operator & (infix)", page.getPath() + "#bitwise_and", page.getCategories());
			search.addSearchTarget("Operator Bitwise Or", page.getPath() + "#bitwise_or", page.getCategories());
			search.addSearchTarget("Operator |", page.getPath() + "#bitwise_or", page.getCategories());
			search.addSearchTarget("Operator Bitwise Xor", page.getPath() + "#bitwise_xor", page.getCategories());
			search.addSearchTarget("Operator ^", page.getPath() + "#bitwise_xor", page.getCategories());
			search.addSearchTarget("Operator Bit Shift Left", page.getPath() + "#bit_shift_left", page.getCategories());
			search.addSearchTarget("Operator <<", page.getPath() + "#bit_shift_left", page.getCategories());
			search.addSearchTarget("Operator Saturating Bit Shift Left", page.getPath() + "#saturating_bit_shift_left", page.getCategories());
			search.addSearchTarget("Operator <<|", page.getPath() + "#saturating_bit_shift_left", page.getCategories());
			search.addSearchTarget("Operator Bit Shift Right", page.getPath() + "#bit_shift_right", page.getCategories());
			search.addSearchTarget("Operator >>", page.getPath() + "#bit_shift_right", page.getCategories());
			search.addSearchTarget("Operator Bitwise Not", page.getPath() + "#bitwise_not", page.getCategories());
			search.addSearchTarget("Operator ~", page.getPath() + "#bitwise_not", page.getCategories());


			page.h2Searchable("Pointer/Optional Operators", "pointer_optional");
			page.table([
				["Name", "Syntax", "Supported Builtin Types", "Example", "Remarks"],
				[
					html.anchor("Address Of", "address_of"),
					page.inline_code(Language.PANTHER, "&a"),
					box_item("Any"),
					page.inline_code(Language.PANTHER, "var num: Int = 12;") + "<br/>" + page.inline_code(Language.PANTHER, "const num_ptr: Int* = &num;") + "<br/>" + page.inline_code(Language.PANTHER, "num_ptr.* // 12"),
					box_item(`Argument must be ${terms.get("concrete")}.`) + box_item(`Using on a mutable object returns a ${terms.get("mut-qualified pointer")},<br/>otherwise is a ${terms.get("pointer")}.`),
				],
				[
					html.anchor("Dereference", "dereference"),
					page.inline_code(Language.PANTHER, "a.*"),
					box_item("Any " + terms.get("pointer")),
					page.inline_code(Language.PANTHER, "var num: Int = 12;") + "<br/>" + page.inline_code(Language.PANTHER, "const num_ptr: Int* = &num;") + "<br/>" + page.inline_code(Language.PANTHER, "num_ptr.* // 12"),
					box_item(`Dereferencing a ${terms.get("mut-qualified pointer")} results in a<br/>mutable value, otherwise the value is constant.`),
				],
				[
					html.anchor("Unwrap", "unwrap"),
					page.inline_code(Language.PANTHER, "a.?"),
					box_item("Any " + terms.get("optional")),
					page.inline_code(Language.PANTHER, "var opt_num: Int? = 12;") + "<br/>" + page.inline_code(Language.PANTHER, "opt_num.? // 12"),
					box_item(`It is ${terms.get("undefined behavior")} to unwrap an optional<br/> that is ${terms.get("null")}.`),
				],
			], "68.7em");
			search.addSearchTarget("Operator Address Of", page.getPath() + "#address_of", page.getCategories());
			search.addSearchTarget("Operator & (prefix)", page.getPath() + "#address_of", page.getCategories());
			search.addSearchTarget("Operator Dereference", page.getPath() + "#dereference", page.getCategories());
			search.addSearchTarget("Operator .*", page.getPath() + "#dereference", page.getCategories());
			search.addSearchTarget("Operator Unwrap", page.getPath() + "#unwrap", page.getCategories());
			search.addSearchTarget("Operator .?", page.getPath() + "#unwrap", page.getCategories());


			page.h2Searchable("Boolean", "boolean");
			page.table([
				["Name", "Syntax", "Supported Builtin Types", "Example", "Remarks"],
				[
					html.anchor("Logical And", "logical_and"),
					page.inline_code(Language.PANTHER, "a && b"),
					box_item(page.inline_code(Language.PANTHER, "Bool")),
					box_item(page.inline_code(Language.PANTHER, "true && false // false")),
					box_item(`Type of return is ${page.inline_code(Language.PANTHER, "Bool")}.`) + box_item(`If ${terms.get("LHS")} is ${page.inline_code(Language.PANTHER, "false")}, don't evaluate ${terms.get("RHS")} and return ${page.inline_code(Language.PANTHER, "false")}.`),
				],
				[
					html.anchor("Logical Or", "logical_or"),
					page.inline_code(Language.PANTHER, "a || b"),
					box_item(page.inline_code(Language.PANTHER, "Bool")),
					box_item(page.inline_code(Language.PANTHER, "true || false // false")),
					box_item(`Type of return is ${page.inline_code(Language.PANTHER, "Bool")}.`) + box_item(`If ${terms.get("LHS")} is ${page.inline_code(Language.PANTHER, "true")}, don't evaluate ${terms.get("RHS")} and return ${page.inline_code(Language.PANTHER, "true")}.`),
				],
				[
					html.anchor("Boolean Not", "boolean_not"),
					page.inline_code(Language.PANTHER, "!a"),
					box_item(page.inline_code(Language.PANTHER, "Bool")),
					box_item(page.inline_code(Language.PANTHER, "!true // false")),
					box_item(`Type of return is ${page.inline_code(Language.PANTHER, "Bool")}.`),
				],
			], "68.7em");
			search.addSearchTarget("Operator Logical And", page.getPath() + "#logical_and", page.getCategories());
			search.addSearchTarget("Operator &&", page.getPath() + "#logical_and", page.getCategories());
			search.addSearchTarget("Operator Logical Or", page.getPath() + "#logical_or", page.getCategories());
			search.addSearchTarget("Operator ||", page.getPath() + "#logical_or", page.getCategories());
			search.addSearchTarget("Operator Boolean Not", page.getPath() + "#boolean_not", page.getCategories());
			search.addSearchTarget("Operator !", page.getPath() + "#boolean_not", page.getCategories());


			page.h2Searchable("Object Operators", "type");
			page.paragraph(page.inline_code(Language.PANTHER, "copy a") + "&emsp;" + html.italic("(TODO)"));
			page.paragraph(page.inline_code(Language.PANTHER, "move a") + "&emsp;" + html.italic("(TODO)"));
			page.paragraph(page.inline_code(Language.PANTHER, "forward a") + "&emsp;" + html.italic("(TODO)"));

			page.h2Searchable("Type Conversion Operator", "type");
			page.paragraph(page.inline_code(Language.PANTHER, "a as b") + "&emsp;" + html.italic("(TODO)"));

			page.h2Searchable("Accessor Operator", "type");
			page.paragraph(page.inline_code(Language.PANTHER, "a.b") + "&emsp;" + html.italic("(TODO)"));


			page.h2Searchable("Composite Assignment Operators", "type");
			page.paragraph(html.italic("(TODO)"));


			page.h2Searchable("Operator Precedence", "precedence");
			page.table([
				["Precedence", "Operators"],
				["1", page.inline_code(Language.PANTHER, "a.b") + "&emsp;" + page.inline_code(Language.PANTHER, "a.*") + "&emsp;" + page.inline_code(Language.PANTHER, "a.?")],
				["2", page.inline_code(Language.PANTHER, "&a") + "&emsp;" + page.inline_code(Language.PANTHER, "copy a") + "&emsp;" + page.inline_code(Language.PANTHER, "move a") + "&emsp;" + page.inline_code(Language.PANTHER, "forward a") + "&emsp;" + page.inline_code(Language.PANTHER, "-a") + "&emsp;" + page.inline_code(Language.PANTHER, "!a") + "&emsp;" + page.inline_code(Language.PANTHER, "~a")],
				["3", page.inline_code(Language.PANTHER, "a as b")],
				["4", page.inline_code(Language.PANTHER, "a * b") + "&emsp;" + page.inline_code(Language.PANTHER, "a *% b") + "&emsp;" + page.inline_code(Language.PANTHER, "a *| b") + "&emsp;" + page.inline_code(Language.PANTHER, "a / b") + "&emsp;" + page.inline_code(Language.PANTHER, "a % b")],
				["5", page.inline_code(Language.PANTHER, "a + b") + "&emsp;" + page.inline_code(Language.PANTHER, "a +% b") + "&emsp;" + page.inline_code(Language.PANTHER, "a +| b") + "&emsp;" + page.inline_code(Language.PANTHER, "a - b") + "&emsp;" + page.inline_code(Language.PANTHER, "a -% b") + "&emsp;" + page.inline_code(Language.PANTHER, "a -| b")],
				["6", page.inline_code(Language.PANTHER, "a << b") + "&emsp;" + page.inline_code(Language.PANTHER, "a <<| b") + "&emsp;" + page.inline_code(Language.PANTHER, "a >> b")],
				["7", page.inline_code(Language.PANTHER, "a & b") + "&emsp;" + page.inline_code(Language.PANTHER, "a | b") + "&emsp;" + page.inline_code(Language.PANTHER, "a ^ b")],
				["8", page.inline_code(Language.PANTHER, "a == b") + "&emsp;" + page.inline_code(Language.PANTHER, "a != b") + "&emsp;" + page.inline_code(Language.PANTHER, "a < b") + "&emsp;" + page.inline_code(Language.PANTHER, "a <= b") + "&emsp;" + page.inline_code(Language.PANTHER, "a > b") + "&emsp;" + page.inline_code(Language.PANTHER, "a >= b")],
				["9", page.inline_code(Language.PANTHER, "a && b")],
				["10", page.inline_code(Language.PANTHER, "a || b")],
			]);
		}
	);
}

