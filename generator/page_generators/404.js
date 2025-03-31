//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../Page.js").Page;
const Language = require("../Page.js").Language;
const html = require("../html.js");

let page = new Page(__filename, {
	path: "error404.html",
	title: "404",
	has_page_title: false,
	description: "Error 404: Page not found",
	allow_in_sitemap: false,
});


page.raw(html.tag("div", "", "height: 3em;"));

page.code_block(Language.Diagnostic, 
`<Error|W404> Page doesn't exist
	<Info> Did you type the URL in wrong?
	<Info> Maybe try the search page?`);


page.generate();

