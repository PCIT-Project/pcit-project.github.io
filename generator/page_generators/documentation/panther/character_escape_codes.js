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
				path        : "documentation/panther/character_escape_codes.html",
				title       : "Character Escape Codes",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION],
				description : "Documentation for literals in the Panther programming language",
			});
		},
		(page) => {
			page.text(`Character escape codes are used to represent special characters within ${terms.get("character literals")} and ${terms.get("string literals")}.`);

			page.table([
				["Escape code", "ASCII value representation", "Description"],
				[page.inlineCode("'\\0'"),  "0x00", "null terminator" ],
				[page.inlineCode("'\\t'"),  "0x09", "horizontal tab"  ],
				[page.inlineCode("'\\n'"),  "0x0a", "new line"        ],
				[page.inlineCode("'\\r'"),  "0x0d", "carriage return" ],
				[page.inlineCode("'\\\"'"), "0x22", "double quote"    ],
				[page.inlineCode("'\\''"),  "0x27", "single quote"    ],
				[page.inlineCode("'\\\\'"), "0x5c", "backslash"       ],
			]);
		}
	);
}

