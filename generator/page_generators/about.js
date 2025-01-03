//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////


const Page = require("../Page.js").Page;
const html = require("../html.js");

let page = new Page("About", "about.html");

page.h1("Who are we?");
page.text("The PCIT Project is owned by the members of the PCIT Project Team:");


page.h2("Andrew Feldman");
page.raw(`<div style="width: 16em; height: 16em; border-radius: 0.3em; background-color: #1e2122;">`);
page.image("https://avatars.githubusercontent.com/u/66285818?v=4", "width: 100%; border-radius: 0.3em;");
page.raw(`</div>`);
page.text("Creator of the PCIT Project and the Panther programming language.");
page.text(`<i class="fa-brands fa-github"></i> ` + html.link("/12Thanjo", "https://github.com/12Thanjo"));
page.text(`<i class="fa-brands fa-linkedin"></i> ` + html.link("/in/12andrewf", "https://www.linkedin.com/in/12andrewf"));


page.generate();

