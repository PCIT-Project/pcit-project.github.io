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
				path        : "documentation/panther/intrinsics/importing_intrinsics.html",
				title       : "Importing Intrinsics",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION, breadcrumbs.PANTHER_INTRINSICS],
				description : "Documentation for importing intrinsics in the Panther programming language",
			});
		},
		(page) => {
			page.h2Searchable("@import", "import");
			page.text(page.inline_code(Language.PANTHER, "func @import = (filepath: [Char:*]) -> {MODULE};"));
			page.text("Import a Panther file.");

			page.h2Searchable("@importC", "importC");
			page.text(page.inline_code(Language.PANTHER, "func @importC = (filepath: [Char:*]) -> {MODULE};"));
			page.text("Import a C file.");

			page.h2Searchable("@importCPP", "importCPP");
			page.text(page.inline_code(Language.PANTHER, "func @importCPP = (filepath: [Char:*]) -> {MODULE};"));
			page.text("Import a C++ file.");
		}
	);
}

