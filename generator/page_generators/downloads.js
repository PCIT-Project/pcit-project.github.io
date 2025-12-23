//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../Page.js").Page;
const html = require("../html.js");

let page = new Page(__filename, {
	path                    : "downloads.html",
	title                   : "Downloads",
	categories              : [require("../search.js").Category.DOWNLOADS_AND_BUILDING],
	description             : "Download the PCIT Project software",
	has_categories_in_title : false,
});

page.text("No official releases have been made yet, but you can follow " + html.link("these instructions", "/site/build.html") + " to build it yourself.");

page.generate();

