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

exports.getPageGenerator = function(){
	return new (require("../../../PageGenerator.js").PageGenerator)(
		() => {
			return new Page(__filename, {
				path        : "documentation/panther/enums.html",
				title       : "Enums",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION],
				description : "Documentation for enums in the Panther programming language",
			});
		},
		(page) => {
			page.paragraph(html.italic("(TODO)"));


			page.h2("Example");

			page.code_block(Language.PANTHER,
`type Direction = enum { // default underlying type is UI32
	NORTH,     // 0
	EAST,      // 1
	SOUTH = 4, // 4
	WEST,      // 5
}


type Color = enum(UI8) {
	RED   = 1 << 0,
	GREEN = 1 << 1,
	BLUE  = 1 << 2,

	func containsRed = (this) -> Bool {
		return (this & Color.RED) as Bool;
	}
}


func entry = () #entry -> UI8 {
	const purple: Color = Color.RED | Color.BLUE;
	return purple.containsRed() as UI8;
}`);
		}
	);
}



