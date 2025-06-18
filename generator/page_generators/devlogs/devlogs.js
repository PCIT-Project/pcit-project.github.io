//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../Page.js").Page;
const html = require("../../html.js");
const search = require("../../search.js");

let page = new Page(__filename, {
	path                    : "devlogs/devlogs.html",
	title                   : "Devlogs",
	categories              : [search.Category.DEVLOG],
	description             : "Catalog of PCIT Project devlogs",
	has_categories_in_title : false,
});


page.text("To see the all of the updates and corresponding version, you can look at the " +  html.link("change log", "https://github.com/PCIT-Project/PCIT-CPP/blob/main/CHANGELOG.md") + ". Note: very small changes may not be listed.");


page.h2(html.link("Dependencies V2", "/site/devlogs/dependencies_v2.html"));
page.text("New and improved dependency system to the Panther compiler.");

page.h2(html.link("New Systems Requires Major Changes", "/site/devlogs/new_systems_requires_major_changes.html"));
page.text("Adding position independent declaration and the build system to the Panther compiler.");

page.generate();

