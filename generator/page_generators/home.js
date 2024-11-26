const Page = require("../Page.js").Page;
const html = require("../html.js");

let home = new Page("Home", "home.html");

home.h1("PCIT Project");
home.paragraph("Panther Compiler Infrastructure and Toolchain, and the home of the Panther programming language. PCIT (pronounced \"P-Kit\") relies on the " + html.link("https://github.com/llvm/llvm-project", "LLVM-Project") + ", but that is not guaranteed forever. It is written entirely in C++, but a self-hosted version (written entirely in Panther) is planned.");


home.h2("Tools");
home.paragraph("All tools can be used as stand-alone programs or as libraries.");

home.h3("Panther / pthr");
home.paragraph("Statically typed, compiled, high-performance, general-purpose programming language. See more " + html.link("./Panther.html", "here") + ".");

home.h3("PIR");
home.paragraph("Pronounced \"P I R\". Compiler IR / optimizing back-end.");

home.h3("PLNK");
home.paragraph("Pronounced \"plink\". Linker that aims to make use between platforms (including cross-compilation) as seamless as possible.");


home.h3("Other compilers");
home.paragraph("Will also be able to compile C and hopefully C++ code. The main intent is for this to allow seamless interoperability with Panther, but these frontends will be able to be used stand-alone.");

home.generate();

