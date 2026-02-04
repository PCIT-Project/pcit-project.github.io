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
				path                    : "tutorials/panther/tutorial.html",
				title                   : "Panther Tutorial",
				categories              : [search.Category.PANTHER, search.Category.TUTORIAL],
				breadcrumbs             : [breadcrumbs.TUTORIALS],
				description             : "Tutorial for the Panther programming language",
				has_categories_in_title : false,
			});
		},
		(page) => {
			page.text("Coming Soon...", "font-style: italic;");

			page.text("For now, maybe look at " + html.link("these code example", "/site/Panther.html#examples") + " or " + html.link("the Panther documentation", "/site/documentation/panther/documentation.html") + ".");
		}
	);
}

