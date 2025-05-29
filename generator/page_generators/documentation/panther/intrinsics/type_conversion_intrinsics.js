//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../../Page.js").Page;
const html = require("../../../../html.js");
const terms = require("../../../../terms.js");
const search = require("../../../../search.js");
const Language = require("../../../../Page.js").Language;
const syntax_highlighting = require("../../../../syntax_highlighting/syntax_highlighting.js");



let page = new Page(__filename, {
	path: "documentation/panther/intrinsics/type_conversion_intrinsics.html",
	title: "Type Conversion Intrinsics | Panther Documentation",
	on_page_title: "Type Conversion Intrinsics",
	categories: [search.Category.PANTHER, search.Category.DOCUMENTATION],
	description: "Documentation for type conversion intrinsics in the Panther programming language",
});


page.h2Searchable("@bitCast", "bitCast");
page.text(page.inline_code_block(Language.PANTHER, "func @bitCast = <{FROM: Type, TO: Type}> (from: FROM) -> TO;"));
page.text(`Convert a value of any type to any other of the same size. Requires that ${page.inline_code_block(Language.PANTHER, "@sizeOf<{FROM}>() == @sizeOf<{TO}>()")}. ${html.inline_code("FROM")} and ${html.inline_code("TO")} must be different types.`);

page.h2Searchable("@trunc", "trunc");
page.text(page.inline_code_block(Language.PANTHER, "func @trunc = <{FROM: Type, TO: Type}> (from: FROM) -> TO;"));
page.text(`Truncate any ${terms.get("integral")} type to any other smaller ${terms.get("integral")} type. Both ${html.inline_code("FROM")} and ${html.inline_code("TO")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}. Requires ${page.inline_code_block(Language.PANTHER, "@sizeOf<{FROM}>() > @sizeOf<{TO}>()")}. If is a ${terms.get("vector")}, the lenghts of the vectors must be the same size.`);

page.h2Searchable("@ftrunc", "ftrunc");
page.text(page.inline_code_block(Language.PANTHER, "func @ftrunc = <{FROM: Type, TO: Type}> (from: FROM) -> TO;"));
page.text(`Truncate any ${terms.get("floating-point")} type to any other smaller ${terms.get("floating-point")} type. Both ${html.inline_code("FROM")} and ${html.inline_code("TO")} must be ${terms.get("floating-point")} or a ${terms.get("vector")} of ${terms.get("floating-point")}. Requires the ${terms.get("floating-point")} width of ${html.inline_code("FROM")} to be greater than that of ${html.inline_code("TO")}. If is a ${terms.get("vector")}, the lenghts of the vectors must be the same size.`);

page.h2Searchable("@sext", "sext");
page.text(page.inline_code_block(Language.PANTHER, "func @sext = <{FROM: Type, TO: Type}> (from: FROM) -> TO;"));
page.text(`Sign extend any ${terms.get("integral")} type to any other larger ${terms.get("integral")} type. Both ${html.inline_code("FROM")} and ${html.inline_code("TO")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}. Requires ${page.inline_code_block(Language.PANTHER, "@sizeOf<{FROM}>() < @sizeOf<{TO}>()")}. If is a ${terms.get("vector")}, the lenghts of the vectors must be the same size.`);

page.h2Searchable("@zext", "zext");
page.text(page.inline_code_block(Language.PANTHER, "func @zext = <{FROM: Type, TO: Type}> (from: FROM) -> TO;"));
page.text(`Zero extend any ${terms.get("integral")} type to any other larger ${terms.get("integral")} type. Both ${html.inline_code("FROM")} and ${html.inline_code("TO")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}. Requires ${page.inline_code_block(Language.PANTHER, "@sizeOf<{FROM}>() < @sizeOf<{TO}>()")}. If is a ${terms.get("vector")}, the lenghts of the vectors must be the same size.`);


page.h2Searchable("@fext", "fext");
page.text(page.inline_code_block(Language.PANTHER, "func @fext = <{FROM: Type, TO: Type}> (from: FROM) -> TO;"));
page.text(`Extend any ${terms.get("floating-point")} type to any other larger ${terms.get("floating-point")} type. Both ${html.inline_code("FROM")} and ${html.inline_code("TO")} must be ${terms.get("floating-point")} or a ${terms.get("vector")} of ${terms.get("floating-point")}. Requires the ${terms.get("floating-point")} width of ${html.inline_code("FROM")} to be smaller than that of ${html.inline_code("TO")}. If is a ${terms.get("vector")}, the lenghts of the vectors must be the same size.`);

page.h2Searchable("@iToF", "iToF");
page.text(page.inline_code_block(Language.PANTHER, "func @iToF = <{FROM: Type, TO: Type}> (from: FROM) -> TO;"));
page.text(`Convert any ${terms.get("integral")} or ${terms.get("vector")} of ${terms.get("integral")} type to any ${terms.get("floating-point")} type. ${html.inline_code("FROM")} must be ${terms.get("integral")} and ${html.inline_code("TO")} must be ${terms.get("floating-point")}.`);

page.h2Searchable("@fToI", "fToI");
page.text(page.inline_code_block(Language.PANTHER, "func @fToI = <{FROM: Type, TO: Type}> (from: FROM) -> TO;"));
page.text(`Convert any ${terms.get("floating-point")} or ${terms.get("vector")} of ${terms.get("floating-point")} type to any ${terms.get("integral")}. ${html.inline_code("FROM")} must be ${terms.get("floating-point")} and ${html.inline_code("TO")} must be ${terms.get("integral")}.`);



page.generate();

