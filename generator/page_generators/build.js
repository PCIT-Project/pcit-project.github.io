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
	path                    : "build.html",
	title                   : "Building PCIT Project Software",
	categories              : [require("../search.js").Category.DOWNLOADS_AND_BUILDING],
	description             : "How to build the PCIT Project software",
	has_categories_in_title : false
});


page.text("These are the building instructions for the PCIT Project software.");

page.begin_info();
page.h3("Import Note", "margin-top: 1em;");
page.text(`This is not a simple build. If this is your first time building a large C++ project, it is not recommended that you try to build this.`);
page.end_info();



page.h2("Requirements");
page.bullets([
	html.link("git", "https://git-scm.com/"),
	html.link("Premake5", "https://premake.github.io/") + " (5.0-beta4 or later)",
	`A version of ${html.link("MSVC", "https://visualstudio.microsoft.com/vs/features/cplusplus/")}, ${html.link("GCC", "https://gcc.gnu.org/")}, or ${html.link("Clang", "https://clang.llvm.org/")} that is C++20 compliant`,
	`Either ${html.link("Microsoft Visual Studio", "https://visualstudio.microsoft.com/#vs-section")} (v143 or later), or ${html.link("GNU Make", "https://www.gnu.org/software/make/")}`,
	html.link("CMake", "https://cmake.org/") + " (3.20.0 or later)",
	html.link("Python", "https://www.python.org/") + " (3.8 or later)",
]);

page.begin_info();
page.h3("Info", "margin-top: 1em;");
page.text("This has only been tested on Windows with Visual Studio 2022.");
page.end_info();


page.h2Searchable("Building LLVM", "llvm");
page.text("At the moment, PCIT relies on LLVM, so we need to build LLVM first.");

page.begin_warning();
page.h3("Warning!", "margin-top: 1em;");
page.text(`Please the entirety of this section before doing any of the steps so you can make sure your computer is ready ${html.bold("BEFORE")} you start!`);
page.end_warning();


page.h3Anchor("1) Create a directory on your computer", "llvm_1");
page.paragraph("All LLVM source code and build results will go in this directory. The needed files will be moved from this directory once the process is completed (and the rest deleted), so this directory can go wherever you like.");

page.h3("2) Get the scripts");
page.paragraph(`There is a GitHub repository that contains the scripts required to download the LLVM Project source code and build it. A ${html.link("Windows version", "https://github.com/PCIT-Project/llvm-project-build/blob/main/build_llvm.windows.bat")} (.bat) and a ${html.link("Unix version", "https://github.com/PCIT-Project/llvm-project-build/blob/main/build_llvm.unix.sh")} (.sh) exist. Get the correct script for your machine, and put it in the directory you created in ${html.link("step 1", "/site/build.html#llvm_1")}.`);

page.h3("3) Run");
page.paragraph(`Run the script. The first argument should either be ${html.inline_code("Debug")} or ${html.inline_code("Release")}. Here's an example:`);

page.code_block(Language.Terminal, "./build_llvm.windows.bat Release");

page.paragraph(`This script will clone the ${html.link("PCIT fork of LLVM", "https://github.com/PCIT-Project/llvm-project")}, and compile it. If you would like to skip the cloning step (if you already cloned it into this directory), you can add the ${html.inline_code("--no-clone")} argument at the end.`);

page.paragraph(`This results in 76.2GB of storage space used (although only 8.19GB is needed to be kept). It is recommended to have at least 24GB of addressable memory.`);

page.begin_warning();
page.h3("Warning!", "margin-top: 1em;");
page.text(`The ${html.inline_code("Release")} build seems to be broken at the moment (an LLVM cmake bug?) and it builds a debug build anyway. The PCIT build system accounts for this to allow for release builds of PCIT to still work.`);
page.end_warning();

page.h3Anchor("4) Finishing up", "llvm_4");
page.paragraph(`Once the script has completed, you will see three directories within the one created in ${html.link("step 1", "/site/build.html#llvm_1")}: ${html.inline_code("build")}, ${html.inline_code("llvm-project")}, and ${html.inline_code("output")}. You may delete ${html.inline_code("build")} and ${html.inline_code("llvm-project")} if you wish, as they are not needed to build PCIT. In addition, you can delete ${html.inline_code("output/bin")}, ${html.inline_code("output/libexec")}, and ${html.inline_code("output/share")} as well (keep ${html.inline_code("output/include")} and ${html.inline_code("output/lib")}).`);


	
page.h2("Building PCIT-CPP");
page.text("Now that we have build LLVM, we can build PCIT.");

page.h3Anchor("1) Clone the repository", "pcit_1");
page.code_block(Language.Terminal, "git clone https://github.com/PCIT-Project/PCIT-CPP.git --recursive");
page.paragraph(`The ${html.inline_code("--recursive")} argument is required to also clone the ${html.link("Evo", "https://github.com/12Thanjo/Evo")} standard library. LLVM and Evo are the only dependencies that PCIT-CPP has.`);

page.h3("2) Add directory for LLVM");
page.paragraph(`Inside the ${html.inline_code("/PCIT-CPP/dependencies/")}, add the directory ${html.inline_code("LLVM_build")}`);

page.h3("3) Add LLVM");
page.paragraph(`Within the ${html.inline_code("output")} directory discussed in ${html.link("step 4 of Building LLVM", "/site/build.html#llvm_4")}, there should be a number of directories. Copy or move ${html.inline_code("/output/include/")} and ${html.inline_code("/output/lib/")}, into the directory created in ${html.link("step 1 of Building PCIT-CPP", "/site/build.html#pcit_1")}.`);

page.h3("4) Configuring PCIT build system with Premake5");
page.paragraph(`Premake is a build system configurator, so Premake5 is used to configure the build system. For more information, you can run ${html.inline_code("premake5 --help")}. Navigate to the main directory of the PCIT-CPP repository, and select one of the following methods of running Premake5:`);


page.h4("Using Microsoft Visual Studio:");
page.code_block(Language.Terminal, "premake5 vs2022");

page.h4("Using GNU Make:");
page.code_block(Language.Terminal, "premake5 gmake --cc=[COMPILER]");
page.paragraph(`Replace "[COMPILER]" with one of the following options`);
page.bullets([
	"clang",
	"gcc",
	"mingw",
	"msc-v143",
]);


page.h3("5) Build");

page.h4("Using Microsoft Visual Studio:");
page.paragraph(`Open ${html.inline_code("PCIT-CPP.sln")} in Visual Studio, set the build configuration to ${html.inline_code("ReleaseDist")}, and compile.`)

page.h4("Using GNU Make:");
page.code_block(Language.Terminal, "make configuration=releasedist_linux");


page.h3("6) Done!");
page.paragraph(`The generated output is in ${html.inline_code("./build/[Windows|Linux]/ReleaseDist/bin/")}. Enjoy PCIT!`);


page.h2("Next Steps");
page.text(`Now that you have successfully built the PCIT Project software, maybe check out one of our ${html.link("tutorials", "/site/tutorials/tutorials.html")}.`);


page.generate();

