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
	path          : "about.html",
	title         : "About",
	description   : "About the PCIT Project",
	on_page_title : "Who are we?",
});

page.text("The PCIT Project is owned by the members of the PCIT Project Team:");

page.h2Anchor("Andrew Feldman", "Andrew_Feldman");
page.raw(`<div style="width: 16em; height: 16em; border-radius: 0.3em; background-color: #1e2122;">`);
page.image("https://avatars.githubusercontent.com/u/66285818?v=4", "Andrew Feldman Photo", "width: 100%; border-radius: 0.3em;");
page.raw(`</div>`);
page.text("Creator of the PCIT Project and the Panther programming language.");
page.text(`<i class="fa-brands fa-github"></i> ` + html.link("/12Thanjo", "https://github.com/12Thanjo"));
page.text(`<i class="fa-brands fa-linkedin"></i> ` + html.link("/in/12andrewf", "https://www.linkedin.com/in/12andrewf"));


page.h2("Want to get involved?");
page.text(`At this time, the PCIT Project Team is not accepting any code contributions. However, this is most likely going to change in the future! In the meantime, you can check out the ${html.link("the contributing guidelines", "https://github.com/PCIT-Project/PCIT-CPP/blob/main/CONTRIBUTING.md")}.`);


page.generate();

