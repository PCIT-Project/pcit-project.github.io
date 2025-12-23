//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../Page.js").Page;
const breadcrumbs = require("../../../Page.js").breadcrumbs;
const Language = require("../../../Page.js").Language;
const html = require("../../../html.js");
const terms = require("../../../terms.js");
const search = require("../../../search.js");


let page = new Page(__filename, {
	path        : "documentation/panther/primitive_types.html",
	title       : "Primitive Types",
	categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
	breadcrumbs : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION],
	description : "Documentation for Primitive Types in the Panther programming language",
});


page.h2Searchable("Primitive Integral Types", "integral");

page.h3Searchable("Specified Width Integral Types", "width_integral");
page.paragraph(`An integer type can be specified to be signed or unsigned and can be any bitwidth from 1 all the way up to 8388608 (2${html.superscript("23")}). The type is written with an ${html.inline_code("I")} for signed and ${html.inline_code("UI")} for unsigned, followed by the bitwidth.`);
page.table([
	["Type", "Description"],
	[page.inline_code_block(Language.PANTHER, "I32"), "32-bit signed integer"],
	[page.inline_code_block(Language.PANTHER, "UI64"), "64-bit unsigned integer"],
	[page.inline_code_block(Language.PANTHER, "I1"), "1-bit signed integer"],
	[page.inline_code_block(Language.PANTHER, "UI46824"), "46,824-bit unsigned integer"],
])

page.h3Searchable("Target-Dependent Integral Types", "target_integral");
page.table([
	["Type", "Description"],
	[page.inline_code_block(Language.PANTHER, "Int"), "Signed integer that has the same width of a general register on the target (64 on x86_64)"],
	[page.inline_code_block(Language.PANTHER, "UInt"), "Unsigned integer that has the same width of a general register on the target (64 on x86_64)"],
	[page.inline_code_block(Language.PANTHER, "ISize"), "Signed integer that has the same width of a pointer on the target (64 on x86_64)"],
	[page.inline_code_block(Language.PANTHER, "USize"), "Unsigned integer that has the same width of a pointer on the target (64 on x86_64)"],
]);
search.addSearchTarget("Int", page.getPath() + "#target_integral", page.getCategories());
search.addSearchTarget("UInt", page.getPath() + "#target_integral", page.getCategories());
search.addSearchTarget("ISize", page.getPath() + "#target_integral", page.getCategories());
search.addSearchTarget("USize", page.getPath() + "#target_integral", page.getCategories());



page.h3Searchable("Integral Types for C/C++ Compatibility", "c_integral");
page.table([
	["Type", "C/C++ equivalent"],
	[page.inline_code_block(Language.PANTHER, "CWChar"), page.inline_code_block(Language.C, "wchar_t")],
	[page.inline_code_block(Language.PANTHER, "CShort"), page.inline_code_block(Language.C, "short")],
	[page.inline_code_block(Language.PANTHER, "CUShort"), page.inline_code_block(Language.C, "unsigned short")],
	[page.inline_code_block(Language.PANTHER, "CInt"), page.inline_code_block(Language.C, "int")],
	[page.inline_code_block(Language.PANTHER, "CUInt"), page.inline_code_block(Language.C, "unsigned int")],
	[page.inline_code_block(Language.PANTHER, "CLong"), page.inline_code_block(Language.C, "long")],
	[page.inline_code_block(Language.PANTHER, "CULong"), page.inline_code_block(Language.C, "unsigned long")],
	[page.inline_code_block(Language.PANTHER, "CLongLong"), page.inline_code_block(Language.C, "long long")],
	[page.inline_code_block(Language.PANTHER, "CULongLong"), page.inline_code_block(Language.C, "unsigned long long")],
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
	[page.inline_code_block(Language.PANTHER, "F16"), "16-bit floating point (IEEE-754 binary16)"],
	[page.inline_code_block(Language.PANTHER, "BF16"), "16-bit floating point (bfloat16)"],
	[page.inline_code_block(Language.PANTHER, "F32"), "32-bit floating point (IEEE-754 binary32)"],
	[page.inline_code_block(Language.PANTHER, "F64"), "64-bit floating point (IEEE-754 binary64)"],
	[page.inline_code_block(Language.PANTHER, "F80"), "80-bit floating point (x87)"],
	[page.inline_code_block(Language.PANTHER, "F128"), "128-bit floating point (IEEE-754 binary128)"],
	[page.inline_code_block(Language.PANTHER, "CLongDouble"), "C/C++ compatibility type for " + page.inline_code_block(Language.C, "long double")],
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
	[page.inline_code_block(Language.PANTHER, "Void"), `Nothing (for example, to signify that a ${terms.get("function")} returns nothing)`],
	[page.inline_code_block(Language.PANTHER, "Byte"), "A single byte"],
	[page.inline_code_block(Language.PANTHER, "Bool"), `Boolean type (${page.inline_code_block(Language.PANTHER, "true")} or ${page.inline_code_block(Language.PANTHER, "false")})`],
	[page.inline_code_block(Language.PANTHER, "Char"), "ASCII Character"],
	[page.inline_code_block(Language.PANTHER, "RawPtr"), `Opaque pointer type (like ${page.inline_code_block(Language.C, "void*")} in C/C++)`],
	[page.inline_code_block(Language.PANTHER, "TypeID"), "Type that represents the unique ID of a type (value not guaranteed to be consistent between compiles)"],
]);
search.addSearchTarget("Void", page.getPath() + "#misc", page.getCategories());
search.addSearchTarget("Byte", page.getPath() + "#misc", page.getCategories());
search.addSearchTarget("Bool", page.getPath() + "#misc", page.getCategories());
search.addSearchTarget("Char", page.getPath() + "#misc", page.getCategories());
search.addSearchTarget("RawPtr", page.getPath() + "#misc", page.getCategories());
search.addSearchTarget("TypeID", page.getPath() + "#misc", page.getCategories());


page.generate();

