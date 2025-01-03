//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////


const Page = require("../../Page.js").Page;
const html = require("../../html.js");

let page = new Page("Tutorials", "tutorials/tutorials.html");

page.h1("Tutorials");

page.text("Learn about and how to use the various pieces of the PCIT Project.");

page.h2(html.link("Panther", "/site/tutorials/panther/tutorial.html"));
page.text("Start by successfully compiling a Hello World project, learn the panther programming language (as well as some rationals behind design decisions), and then learn how to use the build system.");

page.h2(html.link("Panther Library", "/site/tutorials/pantherlib/tutorial.html"));
page.text("Learn how to embed the Panther compiler in you own project, and get started using it");

page.h2(html.link("PIR", "/site/tutorials/pir/tutorial.html"));
page.text("Learn the PIR (Panther Intermediate Representation) language");

page.h2(html.link("PLNK", "/site/tutorials/plnk/tutorial.html"));
page.text("Learn how to embed the PLNK linker in you own project, and get started using it");


page.generate();

