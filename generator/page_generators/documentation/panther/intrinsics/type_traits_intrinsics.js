//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../../Page.js").Page;
const breadcrumbs = require("../../../../Page.js").breadcrumbs;
const html = require("../../../../html.js");
const terms = require("../../../../terms.js");
const search = require("../../../../search.js");
const Language = require("../../../../Page.js").Language;
const syntax_highlighting = require("../../../../syntax_highlighting/syntax_highlighting.js");



exports.getPageGenerator = function(){
	return new (require("../../../../PageGenerator.js").PageGenerator)(
		() => {
			return new Page(__filename, {
				path        : "documentation/panther/intrinsics/type_traits_intrinsics.html",
				title       : "Type Traits",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION, breadcrumbs.PANTHER_INTRINSICS],
				description : "Documentation for type traits intrinsics in the Panther programming language",
			});
		},
		(page) => {
			page.h2Searchable("@getTypeID", "getTypeID");
			page.text(page.inline_code(Language.PANTHER, "func @getTypeID = <{T: Type}> () -> TypeID;"));
			page.text(`Get the ${page.inline_code(Language.PANTHER, "TypeID")} of type ${html.inline_code("T")}. ${html.inline_code("T")} cannot be ${page.inline_code(Language.PANTHER, "Void")}.`);

			page.h2Searchable("@arrayElementTypeID", "arrayElementTypeID");
			page.text(page.inline_code(Language.PANTHER, "func @arrayElementTypeID = <{T: Type}> () -> TypeID;"));
			page.text(`Get the ${page.inline_code(Language.PANTHER, "TypeID")} of the elements of an ${terms.get("array")} type ${html.inline_code("T")}. ${html.inline_code("T")} must be an ${terms.get("array")} type.`);

			page.h2Searchable("@arrayRefElementTypeID", "arrayRefElementTypeID");
			page.text(page.inline_code(Language.PANTHER, "func @arrayRefElementTypeID = <{T: Type}> () -> TypeID;"));
			page.text(`Get the ${page.inline_code(Language.PANTHER, "TypeID")} of the elements of an ${terms.get("array reference")} type ${html.inline_code("T")}. ${html.inline_code("T")} must be an ${terms.get("array reference")} type.`);


			page.h2Searchable("@numBytes", "numBytes");
			page.text(page.inline_code(Language.PANTHER, "func @numBytes = <{T: Type, INCLUDE_PADDING: Bool}> () -> USize;"));
			page.text(`Get the number of bytes of type ${html.inline_code("T")}. ${html.inline_code("INCLUDE_PADDING")} should be true if should include padding bytes. ${html.inline_code("T")} cannot be ${page.inline_code(Language.PANTHER, "Void")}.`);

			page.h2Searchable("@numBits", "numBits");
			page.text(page.inline_code(Language.PANTHER, "func @numBits = <{T: Type, INCLUDE_PADDING: Bool}> () -> USize;"));
			page.text(`Get the number of bits of type ${html.inline_code("T")}. ${html.inline_code("INCLUDE_PADDING")} should be true if should include padding bits. ${html.inline_code("T")} cannot be ${page.inline_code(Language.PANTHER, "Void")}.`);
		}
	);
}


