//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../Page.js").Page;
const html = require("../../html.js");

let page = new Page("Devlog", "devlog/devlog.html");

page.h1("Devlog");

page.text("To see the all of the updates and corresponding version, you can look at the " +  html.link("change log", "https://github.com/PCIT-Project/PCIT-CPP/blob/main/CHANGELOG.md") + ". Note: very small changes may not be listed.");


page.h2(html.link("Dependencies V2", "/site/devlog/dependencies_v2.html"));
page.text("New and improved dependency system.");

page.h2(html.link("New Systems Requires Major Changes", "/site/devlog/new_systems_requires_major_changes.html"));
page.text("Adding position independent declaration and the build system to Panther.");

page.generate();

