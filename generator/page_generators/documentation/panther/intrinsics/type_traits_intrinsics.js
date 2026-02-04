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
				path        : "documentation/panther/intrinsics/type_traits_intrinsics.html",
				title       : "Type Traits",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				description : "Documentation for type traits intrinsics in the Panther programming language",
			});
		},
		(page) => {
			page.h2Searchable("@getTypeID", "getTypeID");
			page.text(page.inlineCode("func @getTypeID = <{T: Type}> () -> TypeID;"));
			page.text(`Get the ${page.inlineCode("TypeID")} of type ${html.highlight("T")}. ${html.highlight("T")} cannot be ${page.inlineCode("Void")}.`);

			page.h2Searchable("@arrayElementTypeID", "arrayElementTypeID");
			page.text(page.inlineCode("func @arrayElementTypeID = <{T: Type}> () -> TypeID;"));
			page.text(`Get the ${page.inlineCode("TypeID")} of the elements of an ${terms.get("array")} type ${html.highlight("T")}. ${html.highlight("T")} must be an ${terms.get("array")} type.`);

			page.h2Searchable("@arrayRefElementTypeID", "arrayRefElementTypeID");
			page.text(page.inlineCode("func @arrayRefElementTypeID = <{T: Type}> () -> TypeID;"));
			page.text(`Get the ${page.inlineCode("TypeID")} of the elements of an ${terms.get("array reference")} type ${html.highlight("T")}. ${html.highlight("T")} must be an ${terms.get("array reference")} type.`);


			page.h2Searchable("@numBytes", "numBytes");
			page.text(page.inlineCode("func @numBytes = <{T: Type, INCLUDE_PADDING: Bool}> () -> USize;"));
			page.text(`Get the number of bytes of type ${html.highlight("T")}. ${html.highlight("INCLUDE_PADDING")} should be true if should include padding bytes. ${html.highlight("T")} cannot be ${page.inlineCode("Void")}.`);

			page.h2Searchable("@numBits", "numBits");
			page.text(page.inlineCode("func @numBits = <{T: Type, INCLUDE_PADDING: Bool}> () -> USize;"));
			page.text(`Get the number of bits of type ${html.highlight("T")}. ${html.highlight("INCLUDE_PADDING")} should be true if should include padding bits. ${html.highlight("T")} cannot be ${page.inlineCode("Void")}.`);
		}
	);
}


