//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../Page.js").Page;
const html = require("../html.js");


exports.getPageGenerator = function(){
	return new (require("../PageGenerator.js").PageGenerator)(
		() => {
			return new Page(__filename, {
				path: "search.html",
				title: "Search",
			});
		},
		(page) => {
			page.raw("\t\t<input type=\"text\" oninput=\"on_search_input()\" id=\"search_box\" class=\"search-bar\" placeholder=\"Search the PCIT website\"></input>\n");
			page.raw("\t\t<script src=\"./search_script.js\"></script>\n\n");

			page.raw("\t\t<div id=\"results\"></div>\n");
		}
	);
}
