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
const syntax_highlighting = require("../../../syntax_highlighting/syntax_highlighting.js");


exports.getPageGenerator = function(){
	return new (require("../../../PageGenerator.js").PageGenerator)(
		() => {
			return new Page(__filename, {
				path        : "documentation/panther/character_escape_codes.html",
				title       : "Character Escape Codes",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION],
				description : "Documentation for literals in the Panther programming language",
			});
		},
		(page) => {
			page.text(`Character escape codes are used to represent special characters within ${terms.get("character literals")} and ${terms.get("string literals")}.`);

			page.table([
				["Escape code", "ASCII value representation", "Description"],
				[page.inline_code(Language.PANTHER, "'\\0'"),  "0x00", "null terminator" ],
				[page.inline_code(Language.PANTHER, "'\\t'"),  "0x09", "horizontal tab"  ],
				[page.inline_code(Language.PANTHER, "'\\n'"),  "0x0a", "new line"        ],
				[page.inline_code(Language.PANTHER, "'\\r'"),  "0x0d", "carriage return" ],
				[page.inline_code(Language.PANTHER, "'\\\"'"), "0x22", "double quote"    ],
				[page.inline_code(Language.PANTHER, "'\\''"),  "0x27", "single quote"    ],
				[page.inline_code(Language.PANTHER, "'\\\\'"), "0x5c", "backslash"       ],
			]);
		}
	);
}

