//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../../Page.js");
const html = require("../../../../html.js");
const terms = require("../../../../terms.js");
const search = require("../../../../search.js");



exports.getPageGenerator = function(){
	return new (require("../../../../PageGenerator.js").PageGenerator)(
		() => {
			return new Page.Page(__filename, {
				path: "documentation/panther/intrinsics/type_conversion_intrinsics.html",
				title: "Type Conversion Intrinsics",
				categories: [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				description: "Documentation for type conversion intrinsics in the Panther programming language",
			});
		},
		(page) => {
			page.h2Searchable("@bitCast", "bitCast");
			page.text(page.inlineCode("func @bitCast = <{FROM: Type, TO: Type}> (from: FROM) #unsafe -> TO;"));
			page.text(`Convert a value of any type to any other of the same size. Requires that ${page.inlineCode("@numBytes<{FROM, true}>() == @numBytes<{TO, true}>()")}. ${html.highlight("FROM")} and ${html.highlight("TO")} cannot be type ${page.inlineCode("Void")}.`);

			page.h2Searchable("@trunc", "trunc");
			page.text(page.inlineCode("func @trunc = <{FROM: Type, TO: Type}> (from: FROM) -> TO;"));
			page.text(`Truncate any ${terms.get("integral")} type to any other smaller ${terms.get("integral")} type. Both ${html.highlight("FROM")} and ${html.highlight("TO")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}. Requires ${page.inlineCode("@numBits<{FROM, false}>() > @numBits<{TO, false}>()")}. If is a ${terms.get("vector")}, the lengths of the vectors must be the same size.`);

			page.h2Searchable("@ftrunc", "ftrunc");
			page.text(page.inlineCode("func @ftrunc = <{FROM: Type, TO: Type}> (from: FROM) -> TO;"));
			page.text(`Truncate any ${terms.get("floating-point")} type to any other smaller ${terms.get("floating-point")} type. Both ${html.highlight("FROM")} and ${html.highlight("TO")} must be ${terms.get("floating-point")} or a ${terms.get("vector")} of ${terms.get("floating-point")}. Requires ${page.inlineCode("@numBits<{FROM, false}>() > @numBits<{TO, false}>()")}. If is a ${terms.get("vector")}, the lengths of the vectors must be the same size.`);

			page.h2Searchable("@sext", "sext");
			page.text(page.inlineCode("func @sext = <{FROM: Type, TO: Type}> (from: FROM) -> TO;"));
			page.text(`Sign extend any ${terms.get("integral")} type to any other larger ${terms.get("integral")} type. Both ${html.highlight("FROM")} and ${html.highlight("TO")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}. Requires ${page.inlineCode("@numBits<{FROM, false}>() < @numBits<{TO, false}>()")}. If is a ${terms.get("vector")}, the lengths of the vectors must be the same size.`);

			page.h2Searchable("@zext", "zext");
			page.text(page.inlineCode("func @zext = <{FROM: Type, TO: Type}> (from: FROM) -> TO;"));
			page.text(`Zero extend any ${terms.get("integral")} type to any other larger ${terms.get("integral")} type. Both ${html.highlight("FROM")} and ${html.highlight("TO")} must be ${terms.get("integral")} or a ${terms.get("vector")} of ${terms.get("integral")}. Requires ${page.inlineCode("@numBits<{FROM, false}>() < @numBits<{TO, false}>()")}. If is a ${terms.get("vector")}, the lengths of the vectors must be the same size.`);


			page.h2Searchable("@fext", "fext");
			page.text(page.inlineCode("func @fext = <{FROM: Type, TO: Type}> (from: FROM) -> TO;"));
			page.text(`Extend any ${terms.get("floating-point")} type to any other larger ${terms.get("floating-point")} type. Both ${html.highlight("FROM")} and ${html.highlight("TO")} must be ${terms.get("floating-point")} or a ${terms.get("vector")} of ${terms.get("floating-point")}. Requires ${page.inlineCode("@numBits<{FROM, false}>() < @numBits<{TO, false}>()")}. If is a ${terms.get("vector")}, the lengths of the vectors must be the same size.`);

			page.h2Searchable("@iToF", "iToF");
			page.text(page.inlineCode("func @iToF = <{FROM: Type, TO: Type}> (from: FROM) -> TO;"));
			page.text(`Convert any ${terms.get("integral")} or ${terms.get("vector")} of ${terms.get("integral")} type to any ${terms.get("floating-point")} type. ${html.highlight("FROM")} must be ${terms.get("integral")} and ${html.highlight("TO")} must be ${terms.get("floating-point")}.`);

			page.h2Searchable("@fToI", "fToI");
			page.text(page.inlineCode("func @fToI = <{FROM: Type, TO: Type}> (from: FROM) -> TO;"));
			page.text(`Convert any ${terms.get("floating-point")} or ${terms.get("vector")} of ${terms.get("floating-point")} type to any ${terms.get("integral")}. ${html.highlight("FROM")} must be ${terms.get("floating-point")} and ${html.highlight("TO")} must be ${terms.get("integral")}.`);
		}
	);
}

