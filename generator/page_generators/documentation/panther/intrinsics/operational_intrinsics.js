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
				path        : "documentation/panther/intrinsics/operational_intrinsics.html",
				title       : "Operational Intrinsics",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION, Page.Breadcrumbs.PANTHER_INTRINSICS],
				description : "Documentation for operational intrinsics in the Panther programming language",
			});
		},
		(page) => {
			page.h2Searchable("@abort", "abort");
			page.text(page.inlineCode("func @abort = () -> Void;"));
			page.text(`Abort the program. Lowers to a trap instruction if the target has one, otherwise lowered to LIBC ${html.highlight("abort()")}.`);

			page.h2Searchable("@breakpoint", "breakpoint");
			page.text(page.inlineCode("func @breakpoint = () -> Void;"));
			page.text("Cause an execution trap to request the debugger break execution.");

			page.h2Searchable("@makeInitPtr", "makeInitPtr");
			page.text(page.inlineCode("func @makeInitPtr = (uninit_ptr: $T*!) -> T*;"));
			page.text(`Converts an ${terms.get("uninitialized-qualified pointer")} to a ${terms.get("pointer")}. Paramter ${html.highlight("uninit_ptr")} must be ${terms.get("concrete")}, a local variable, and the ${terms.get("pointee")} must be known to be initialized.`);
		}
	);
}
