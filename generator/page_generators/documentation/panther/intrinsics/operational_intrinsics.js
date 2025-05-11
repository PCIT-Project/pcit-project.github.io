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
	path: "documentation/panther/intrinsics/operational_intrinsics.html",
	title: "Operational Intrinsics | Panther Documentation",
	on_page_title: "Operational Intrinsics",
	categories: [search.Category.PANTHER, search.Category.DOCUMENTATION],
	description: "Documentation for operational intrinsics in the Panther programming language",
});


page.h2Searchable("@abort", "abort");
page.text(page.inline_code_block(Language.PANTHER, "func @abort = () -> Void;"));
page.text(`Abort the program. Lowers to a trap instruction if the target has one, otherwise lowered to LIBC ${html.inline_code("abort()")}.`);

page.h2Searchable("@breakpoint", "breakpoint");
page.text(page.inline_code_block(Language.PANTHER, "func @breakpoint = () -> Void;"));
page.text("Cause an execution trap to request the debugger break execution.");

page.h2Searchable("@import", "import");
page.text(page.inline_code_block(Language.PANTHER, "func @import = (filepath: [Char:*]) -> {MODULE};"));
page.text("Import a module.");




page.generate();

