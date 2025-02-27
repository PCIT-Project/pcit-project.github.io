//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../Page.js").Page;
const html = require("../html.js");

let page = new Page("Home", "home.html", null);

page.h1("What is PCIT Project?");
page.text("The PCIT Project is Panther Compiler Infrastructure and Toolchain, and the home of the " + "Panther programming language" + ". PCIT (pronounced \"P-Kit\") relies on the " + html.link("LLVM Project", "https://github.com/llvm/llvm-project") + ", but the goal is to eventually be self-reliant. It is written entirely in C++, but a self-hosted version (written entirely in Panther) is planned.");

page.text("The goal of the PCIT Project is to create software that helps developers create native software, and makes it easier to do so. The simple things should be simple, and the complicated things should be well documented and easy to use.");

page.text("Not only can all tools be used as a standalone program, all tools are designed to be embedded in your own projects as well.");

// TODO: remove at release
page.begin_info();
page.h2("Important Note", "padding-top: 0px;");
page.text("PCIT Project software (including this site) is in pre-alpha. Feel free to poke around and try things out, but please do not use any tools to create anything yet as drastic changes may be made.");
page.end_info();

page.h2("Tools");

page.h3("Panther / pthr");
page.text("Statically typed, high-performance, general-purpose programming language. Designed to help programmers write good/fast code that, without getting in the way. Seamless interoperability with C and (hopefully) C++. All this while being enjoyable to use. See more " + html.link("here", "./Panther.html") + ".");

page.h3("PIR");
page.text("Pronounced \"P I R\". Compiler IR and SSA-based optimizing back-end.");

page.h3("PLNK");
page.text("Pronounced \"plink\". Linker that aims to make use between platforms (including cross-compilation and linking against libc) as seamless as possible.");


page.h3("Other compilers");
page.text("Will also be able to compile C and hopefully C++ code. The main intent is for this to allow seamless interoperability with Panther, but these frontends will be able to be used stand-alone.");

page.h2("Licensing");
page.text("All of the code written for the PCIT Project is licensed under the Apache License v2.0 with LLVM and PCIT exceptions. See " + html.link("the license", "https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE") + " for more information.");

page.h2("Getting involved");
page.text("The PCIT Project is not accepting any volunteers at the moment. However, at some point the in the future new contributors will be welcomed. Check back here to if we are accepting contributions. For now, please star " + html.link("the GitHub repository", "https://github.com/PCIT-Project/PCIT-CPP") + " to show you're interested in the project.");


page.generate(true);

