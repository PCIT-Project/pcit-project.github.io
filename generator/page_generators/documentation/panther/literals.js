//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../Page.js");
const html = require("../../../html.js");
const terms = require("../../../terms.js");
const search = require("../../../search.js");


exports.getPageGenerator = function(){
	return new (require("../../../PageGenerator.js").PageGenerator)(
		() => {
			return new Page.Page(__filename, {
				path        : "documentation/panther/literals.html",
				title       : "Literals",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION],
				description : "Documentation for literals in the Panther programming language",
			});
		},
		(page) => {
			page.text(`Literals are ${terms.get("ephemeral")} expressions that allow expressing a fixed value directly.`);

			const nums = {
				0: html.highlight("0"),
				1: html.highlight("1"),
				2: html.highlight("2"),
				3: html.highlight("3"),
				4: html.highlight("4"),
				5: html.highlight("5"),
				6: html.highlight("6"),
				7: html.highlight("7"),
				8: html.highlight("8"),
				9: html.highlight("9"),
				"a": html.highlight("a"),
				"A": html.highlight("A"),
				"b": html.highlight("b"),
				"B": html.highlight("B"),
				"c": html.highlight("c"),
				"C": html.highlight("C"),
				"d": html.highlight("d"),
				"D": html.highlight("D"),
				"e": html.highlight("e"),
				"E": html.highlight("E"),
				"f": html.highlight("f"),
				"F": html.highlight("F"),
			};


			page.h2Searchable("Integer Literals", "integer-literals");
			page.text(`Integer literals are expressions that represent an unsigned integral value. They are ${terms.get("fluid")} and thus not explicitly typed, but they may only convert to integral types. They are represented as one of the following:`);
			page.bullets([
				nums[0],
				`${html.highlight("[1-9][0-9]*")}: non-zero decimal digit (${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]}, ${nums[8]}, ${nums[9]}) followed by 0 or more decimal digits (${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]}, ${nums[8]}, ${nums[9]})`,
				`${html.highlight("0b[0-1]+")}:  ${html.highlight("0b")} followed by 1 or more binary digits (${nums[0]}, ${nums[1]})`,
				`${html.highlight("0o[0-7]+")}:  ${html.highlight("0o")} followed by 1 or more octal digits (${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]})`,
				`${html.highlight("0x[0-9a-fA-F]+")}:  ${html.highlight("0x")} followed by 1 or more hexadecimal digits (${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]}, ${nums[8]}, ${nums[9]}, ${nums['a']}, ${nums['A']}, ${nums['b']}, ${nums['B']}, ${nums['c']}, ${nums['C']}, ${nums['d']}, ${nums['D']}, ${nums['e']}, ${nums['E']}, ${nums['f']}, ${nums['F']})`,
			]);
			page.text(`An integer literal may optionally have a suffix of scientific notation which is: an ${html.highlight("E")} or an ${html.highlight("e")}, followed by an optional ${html.highlight("+")} or ${html.highlight("-")} (omitting is equivalent to ${html.highlight("+")}), followed by 1 or more decimal digits (${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]}, ${nums[8]}, ${nums[9]}).`);
			page.text(`Integer literals may optionally be broken up by underscores ( ${html.highlight('_')} ) anywhere except for the beginning. This means that ${page.inlineCode("12_345")} and ${page.inlineCode("12__3_45_")} are both equivalent to ${page.inlineCode("12345")}.`);


			page.h2Searchable("Float Literals", "float-literals");
			page.text(`Float literals are expressions that represent an unsigned floating value. They are ${terms.get("fluid")} and thus not explicitly typed, but they may only convert to floating types. They are represented by one of the following:`);
			page.bullets([
				`1 or more decimal digits (${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]}, ${nums[8]}, ${nums[9]}), followed by  followed a period (${html.highlight('.')}), followed by 1 or more decimal digits (${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]}, ${nums[8]}, ${nums[9]}). This may optionally be have suffix of scientific notation which is: an ${html.highlight("E")} or an ${html.highlight("e")}, followed by an optional ${html.highlight("+")} or ${html.highlight("-")} (omitting is equivalent to ${html.highlight("+")}), followed by 1 or more decimal digits (${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]}, ${nums[8]}, ${nums[9]}).`,
				`${html.highlight("0x")}, followed by 1 or more hexadecimal digits (${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]}, ${nums[8]}, ${nums[9]}, ${nums['a']}, ${nums['A']}, ${nums['b']}, ${nums['B']}, ${nums['c']}, ${nums['C']}, ${nums['d']}, ${nums['D']}, ${nums['e']}, ${nums['E']}, ${nums['f']}, ${nums['F']}), followed by a period (${html.highlight('.')}), followed by 1 or more hexadecimal digits (${nums[0]}, ${nums[1]}, ${nums[2]}, ${nums[3]}, ${nums[4]}, ${nums[5]}, ${nums[6]}, ${nums[7]}, ${nums[8]}, ${nums[9]}, ${nums['a']}, ${nums['A']}, ${nums['b']}, ${nums['B']}, ${nums['c']}, ${nums['C']}, ${nums['d']}, ${nums['D']}, ${nums['e']}, ${nums['E']}, ${nums['f']}, ${nums['F']})`,
			]);
			page.text(`Float literals may optionally be broken up by underscores ( ${html.highlight('_')} ) anywhere except for the beginning. This means that ${page.inlineCode("1_234.5")} and ${page.inlineCode("1_23__4._5_")} is equivalent to ${page.inlineCode("1234.5")}.`);



			page.h2Searchable("Boolean Literals", "boolean-literals");
			page.text(`Boolean literals are expressions represent a single boolean value. They are type ${page.inlineCode("Bool")} and are represented by the following:`);
			page.bullets([
				page.inlineCode("true"),
				page.inlineCode("false"),
			]);


			page.h2Searchable("Character Literals", "character-literals");
			page.text(`Character literals are expressions that represent a single character and are represented as ASCII. They are type ${page.inlineCode("Char")}. They are represented by two single-quote characters (${html.highlight('\'')}) containing one the following:`);
			page.bullets([
				`Any basic ASCII printable character excluding ${html.highlight('\'')}, ${html.highlight("\\")}, new-line, or carriage return`,
				`A ${terms.get("character escape code")}`
			]);


			page.h2Searchable("String Literals", "string-literals");
			page.text(`String literals are expressions that represent a string of text. They are type ${page.inlineCode("[Char:N;'\\0']*")} where ${html.highlight("N")} is the number of characters in the string literal. They are represented by two double-quotes characters (${html.highlight('"')}) containing 0 or more of the following:`);
			page.bullets([
				`Any basic ASCII printable character excluding ${html.highlight('"')}, and ${html.highlight("\\")}`,
				`A ${terms.get("character escape code")}`
			]);

			page.h3("Notes");
			page.text(`As suggested by the type, string literals automatically have a null-terminator appended. This means that ${page.inlineCode("\"\\0\"")} is represented in memory as two null-terminators.`);
			page.text("Unlike most languages, nothing special needs to be done to allow string literals to be multi-line.");


			page.h2("Examples");
			page.codeBlock(Page.Language.PANTHER, 
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
def STRING_LITERAL: [Char:28;'\\0']* = "Hello, I am a string literal";
def MULTI_LINE_STRING_LITERAL: [Char:43;'\\0']* = "Hello, I 
am a
	multi-line\\n string 
literal";`
			);
		}
	);
}


