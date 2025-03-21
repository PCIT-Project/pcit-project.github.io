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
const syntax_highlighting = require("../../../syntax_highlighting/syntax_highlighting.js");



let page = new Page({
	path: "documentation/panther/literals.html",
	title: "Literals | Panther Documentation",
	on_page_title: "Literals",
	categories: [search.Category.PANTHER, search.Category.DOCUMENTATION],
	description: "Documentation for literals in the Panther programming language",
});


page.text(`Literals are ${terms.get("ephemeral")} expressions that allow expressing a fixed value directly.`);

const nums = {
	0: html.inline_code("0"),
	1: html.inline_code("1"),
	2: html.inline_code("2"),
	3: html.inline_code("3"),
	4: html.inline_code("4"),
	5: html.inline_code("5"),
	6: html.inline_code("6"),
	7: html.inline_code("7"),
	8: html.inline_code("8"),
	9: html.inline_code("9"),
	"a": html.inline_code("a"),
	"A": html.inline_code("A"),
	"b": html.inline_code("b"),
	"B": html.inline_code("B"),
	"c": html.inline_code("c"),
	"C": html.inline_code("C"),
	"d": html.inline_code("d"),
	"D": html.inline_code("D"),
	"e": html.inline_code("e"),
	"E": html.inline_code("E"),
	"f": html.inline_code("f"),
	"F": html.inline_code("F"),
};


page.h2Searchable("Integer Literals", "integer-literals");
page.text(`Integer literals are expressions that represent an unsigned integral value. They are ${terms.get("fluid")} and thus not explicitly typed, but they may only convert to integral types. They are represented as one of the following:`);
page.bullets([
	nums[0],
	`non-zero decimal digit (${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]}, ${nums[8]}, ${nums[9]}) followed by 0 or more decimal digits (${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]}, ${nums[8]}, ${nums[9]})`,
	`${html.inline_code("0b")} followed by 1 or more binary digits (${nums[0]}, ${nums[1]})`,
	`${html.inline_code("0o")} followed by 1 or more octal digits (${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]})`,
	`${html.inline_code("0x")} followed by 1 or more hexadecimal digits (${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]}, ${nums[8]}, ${nums[9]}, ${nums['a']}, ${nums['A']}, ${nums['b']}, ${nums['B']}, ${nums['c']}, ${nums['C']}, ${nums['d']}, ${nums['D']}, ${nums['e']}, ${nums['E']}, ${nums['f']}, ${nums['F']})`,
]);
page.text(`An integer literal may optionally have a suffix of scientific notation which is: an ${html.inline_code("E")} or an ${html.inline_code("e")}, followed by an optional ${html.inline_code("+")} or ${html.inline_code("-")} (omitting is equivalent to ${html.inline_code("+")}), followed by 1 or more decimal digits (${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]}, ${nums[8]}, ${nums[9]}).`);
page.text(`Integer literals may optionally be broken up by underscores ( ${html.inline_code('_')} ) anywhere except for the beginning. This means that ${html.inline_code(syntax_highlighting.panther("12_345_"))} is equivalent to ${html.inline_code(syntax_highlighting.panther("12345"))}.`);


page.h2Searchable("Float Literals", "float-literals");
page.text(`Float literals are expressions that represent an unsigned floating value. They are ${terms.get("fluid")} and thus not explicitly typed, but they may only convert to floating types. They are represented by one of the following:`);
page.bullets([
	`1 or more decimal digits (${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]}, ${nums[8]}, ${nums[9]}), followed by  followed a period (${html.inline_code('.')}), followed by 1 or more decimal digits (${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]}, ${nums[8]}, ${nums[9]}). This may optionally be have suffix of scientific notation which is: an ${html.inline_code("E")} or an ${html.inline_code("e")}, followed by an optional ${html.inline_code("+")} or ${html.inline_code("-")} (omitting is equivalent to ${html.inline_code("+")}), followed by 1 or more decimal digits (${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]}, ${nums[8]}, ${nums[9]}).`,
	`${html.inline_code("0x")}, followed by 1 or more hexadecimal digits (${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]}, ${nums[8]}, ${nums[9]}, ${nums['a']}, ${nums['A']}, ${nums['b']}, ${nums['B']}, ${nums['c']}, ${nums['C']}, ${nums['d']}, ${nums['D']}, ${nums['e']}, ${nums['E']}, ${nums['f']}, ${nums['F']}), followed by a period (${html.inline_code('.')}), followed by 1 or more hexadecimal digits (${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]}, ${nums[8]}, ${nums[9]}, ${nums['a']}, ${nums['A']}, ${nums['b']}, ${nums['B']}, ${nums['c']}, ${nums['C']}, ${nums['d']}, ${nums['D']}, ${nums['e']}, ${nums['E']}, ${nums['f']}, ${nums['F']})`,
]);
page.text(`Float literals may optionally be broken up by underscores ( ${html.inline_code('_')} ) anywhere except for the beginning. This means that ${html.inline_code(syntax_highlighting.panther("1_234.5"))} is equivalent to ${html.inline_code(syntax_highlighting.panther("1234.5"))}.`);



page.h2Searchable("Boolean Literals", "boolean-literals");
page.text(`Boolean literals are expressions represent a single boolean value. They are type ${html.inline_code(syntax_highlighting.panther("Bool"))} and are represented by the following:`);
page.bullets([
	html.inline_code(syntax_highlighting.panther("true")),
	html.inline_code(syntax_highlighting.panther("false")),
]);


page.h2Searchable("Character Literals", "character-literals");
page.text(`Character literals are expressions that represent a single character and are represented as ASCII. They are type ${html.inline_code(syntax_highlighting.panther("Char"))}. They are represented by two single-quote characters (${html.inline_code('\'')}) containing one the following:`);
page.bullets([
	`Any basic ASCII printable character excluding ${html.inline_code('\'')}, ${html.inline_code("\\")}, new-line, or carriage return`,
	`A ${terms.get("character escape code")}`
]);


page.h2Searchable("String Literals", "string-literals");
page.text(`String literals are expressions that represent a string of text. They are type ${html.inline_code(syntax_highlighting.panther("[Char:N;'\\0']"))} where ${html.inline_code("N")} is the number of characters in the string literal. They are represented by two double-quotes characters (${html.inline_code('"')}) containing 0 or more of the following:`);
page.bullets([
	`Any basic ASCII printable character excluding ${html.inline_code('"')}, and ${html.inline_code("\\")}`,
	`A ${terms.get("character escape code")}`
]);

page.h3("Notes");
page.text(`As suggested by the type, string literals automatically have a null-terminator appended. This means that ${html.inline_code(syntax_highlighting.panther("\"\\0\""))} is represented in memory as two null-terminator.`);
page.text("Unlike languages like C/C++ and Zig, nothing special needs to be done to allow string literals to be multi-line.");


page.h2("Examples");
page.code_block(Language.Panther, 
`// integer literals
def INTEGER: Int = 12;
def SCIENTIFIC_INTEGER: USize = 14e2; // 1400
def BINARY_FLUID_INTEGER = 0b11010; // 26

// float literals
def FLOAT: F32 = 12.4;

// boolean literals
def BOOL: Bool = true;

// character literals
def CHARACTER: Char = 'a';
def NULL_TERMINATOR: Char = '\\0';

// string literals literals
def STRING_LITERAL: [Char:28;'\\0'] = "Hello, I am a string literal";
def MULTI_LINE_STRING_LITERAL: [Char:38;'\\0'] = "Hello, I 
am a
	multi-line\\n string 
literal";`);




page.generate();

