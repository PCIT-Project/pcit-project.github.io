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
				path        : "documentation/panther/primitive_types.html",
				title       : "Primitive Types",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION],
				description : "Documentation for Primitive Types in the Panther programming language",
			});
		},
		(page) => {
			page.h2Searchable("Primitive Integral Types", "integral");

			page.h3Searchable("Specified Width Integral Types", "width_integral");
			page.paragraph(`An integer type can be specified to be signed or unsigned and can be any bitwidth from 1 all the way up to 8388608 (2${html.superscript("23")}). The type is written with an ${html.highlight("I")} for signed and ${html.highlight("UI")} for unsigned, followed by the bitwidth.`);
			page.table([
				["Type", "Description"],
				[page.inlineCode("I32"), "32-bit signed integer"],
				[page.inlineCode("UI64"), "64-bit unsigned integer"],
				[page.inlineCode("I1"), "1-bit signed integer"],
				[page.inlineCode("UI46824"), "46,824-bit unsigned integer"],
			])

			page.h3Searchable("Target-Dependent Integral Types", "target_integral");
			page.table([
				["Type", "Description"],
				[page.inlineCode("Int"), "Signed integer that has the same width of a general register on the target (64 on x86_64)"],
				[page.inlineCode("UInt"), "Unsigned integer that has the same width of a general register on the target (64 on x86_64)"],
				[page.inlineCode("ISize"), "Signed integer that has the same width of a pointer on the target (64 on x86_64)"],
				[page.inlineCode("USize"), "Unsigned integer that has the same width of a pointer on the target (64 on x86_64)"],
			]);
			search.addSearchTarget("Int", page.getPath() + "#target_integral", page.getCategories());
			search.addSearchTarget("UInt", page.getPath() + "#target_integral", page.getCategories());
			search.addSearchTarget("ISize", page.getPath() + "#target_integral", page.getCategories());
			search.addSearchTarget("USize", page.getPath() + "#target_integral", page.getCategories());



			page.h3Searchable("Integral Types for C/C++ Compatibility", "c_integral");
			page.table([
				["Type", "C/C++ equivalent"],
				[page.inlineCode("CWChar"), page.inlineCode("wchar_t", Page.Language.C)],
				[page.inlineCode("CShort"), page.inlineCode("short", Page.Language.C)],
				[page.inlineCode("CUShort"), page.inlineCode("unsigned short", Page.Language.C)],
				[page.inlineCode("CInt"), page.inlineCode("int", Page.Language.C)],
				[page.inlineCode("CUInt"), page.inlineCode("unsigned int", Page.Language.C)],
				[page.inlineCode("CLong"), page.inlineCode("long", Page.Language.C)],
				[page.inlineCode("CULong"), page.inlineCode("unsigned long", Page.Language.C)],
				[page.inlineCode("CLongLong"), page.inlineCode("long long", Page.Language.C)],
				[page.inlineCode("CULongLong"), page.inlineCode("unsigned long long", Page.Language.C)],
			]);
			search.addSearchTarget("CWChar", page.getPath() + "#c_integral", page.getCategories());
			search.addSearchTarget("CShort", page.getPath() + "#c_integral", page.getCategories());
			search.addSearchTarget("CUShort", page.getPath() + "#c_integral", page.getCategories());
			search.addSearchTarget("CInt", page.getPath() + "#c_integral", page.getCategories());
			search.addSearchTarget("CUInt", page.getPath() + "#c_integral", page.getCategories());
			search.addSearchTarget("CLong", page.getPath() + "#c_integral", page.getCategories());
			search.addSearchTarget("CULong", page.getPath() + "#c_integral", page.getCategories());
			search.addSearchTarget("CLongLong", page.getPath() + "#c_integral", page.getCategories());
			search.addSearchTarget("CULongLong", page.getPath() + "#c_integral", page.getCategories());



			page.h2Searchable("Primitive Floating Point Types", "float");
			page.table([
				["Type", "Description"],
				[page.inlineCode("F16"), "16-bit floating point (IEEE-754 binary16)"],
				[page.inlineCode("BF16"), "16-bit floating point (bfloat16)"],
				[page.inlineCode("F32"), "32-bit floating point (IEEE-754 binary32)"],
				[page.inlineCode("F64"), "64-bit floating point (IEEE-754 binary64)"],
				[page.inlineCode("F80"), "80-bit floating point (x87)"],
				[page.inlineCode("F128"), "128-bit floating point (IEEE-754 binary128)"],
				[page.inlineCode("CLongDouble"), "C/C++ compatibility type for " + page.inlineCode("long double", Page.Language.C)],
			]);
			search.addSearchTarget("F16", page.getPath() + "#float", page.getCategories());
			search.addSearchTarget("BF16", page.getPath() + "#float", page.getCategories());
			search.addSearchTarget("F32", page.getPath() + "#float", page.getCategories());
			search.addSearchTarget("F64", page.getPath() + "#float", page.getCategories());
			search.addSearchTarget("F80", page.getPath() + "#float", page.getCategories());
			search.addSearchTarget("F128", page.getPath() + "#float", page.getCategories());
			search.addSearchTarget("CLongDouble", page.getPath() + "#float", page.getCategories());



			page.h2Searchable("Miscellaneous Primitive Types", "misc");
			page.table([
				["Type", "Description"],
				[page.inlineCode("Void"), `Nothing (for example, to signify that a ${terms.get("function")} returns nothing)`],
				[page.inlineCode("Byte"), "A single byte"],
				[page.inlineCode("Bool"), `Boolean type (${page.inlineCode("true")} or ${page.inlineCode("false")})`],
				[page.inlineCode("Char"), "ASCII Character"],
				[page.inlineCode("RawPtr"), `Opaque pointer type (like ${page.inlineCode("void*", Page.Language.C)} in C/C++)`],
				[page.inlineCode("TypeID"), "Type that represents the unique ID of a type (value not guaranteed to be consistent between compiles)"],
			]);
			search.addSearchTarget("Void", page.getPath() + "#misc", page.getCategories());
			search.addSearchTarget("Byte", page.getPath() + "#misc", page.getCategories());
			search.addSearchTarget("Bool", page.getPath() + "#misc", page.getCategories());
			search.addSearchTarget("Char", page.getPath() + "#misc", page.getCategories());
			search.addSearchTarget("RawPtr", page.getPath() + "#misc", page.getCategories());
			search.addSearchTarget("TypeID", page.getPath() + "#misc", page.getCategories());
		}
	);
}
