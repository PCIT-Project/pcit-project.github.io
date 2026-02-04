//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../Page.js").Page;
const breadcrumbs = require("../../../Page.js").breadcrumbs;
const html = require("../../../html.js");
const search = require("../../../search.js");

exports.getPageGenerator = function(){
	return new (require("../../../PageGenerator.js").PageGenerator)(
		() => {
			return new Page(__filename, {
				path                    : "tutorials/plnk/tutorial.html",
				title                   : "PLNK Tutorial",
				categories              : [search.Category.PLNK, search.Category.TUTORIAL],
				breadcrumbs             : [breadcrumbs.TUTORIALS],
				description             : "Tutorial for PLNK (PCIT Linker)",
				has_categories_in_title : false,
			});
		},
		(page) => {
			page.text("PLNK is very much still a work in progress, so it is too early for documentation to be written yet.", "font-style: italic;");
		}
	);
}

