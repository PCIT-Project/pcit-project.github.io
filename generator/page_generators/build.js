//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../Page.js");
const html = require("../html.js");


exports.getPageGenerator = function(){
	return new (require("../PageGenerator.js").PageGenerator)(
		() => {
			return new Page.Page(__filename, {
				path                    : "build.html",
				title                   : "Building PCIT Project Software",
				categories              : [require("../search.js").Category.DOWNLOADS_AND_BUILDING],
				description             : "How to build the PCIT Project software",
				has_categories_in_title : false
			});
		},
		(page) => {
			page.text("These are the building instructions for the PCIT Project software.");

			page.h2("Requirements");
			page.bullets([
				html.link("git", "https://git-scm.com/"),
				`A version of ${html.link("MSVC", "https://visualstudio.microsoft.com/vs/features/cplusplus/")} (required on Windows), ${html.link("GCC", "https://gcc.gnu.org/")}, or ${html.link("Clang", "https://clang.llvm.org/")} that is C++20 compliant`,
				`Either ${html.link("Microsoft Visual Studio", "https://visualstudio.microsoft.com/#vs-section")} (v143 or later), or ${html.link("GNU Make", "https://www.gnu.org/software/make/")}`,
				html.link("CMake", "https://cmake.org/") + " (3.20.0 or later)",
				html.link("Ninja", "https://ninja-build.org/"),
				html.link("Premake5", "https://premake.github.io/") + " (5.0.0-beta8 or later)",
			]);

			page.info("Info", "This has only been fully tested on Windows.");

			page.warning("Warning!", "As of 2025-12-20, any non-debug build of PCIT with Visual Studio 2026 will not work. It seems there's a bug in the code generation of MSVC v145.");



			page.h2Searchable("Building LLVM", "llvm");
			page.text("At the moment, PCIT relies on LLVM, so we need to build LLVM first.");

			page.h3("1) Get the scripts");
			page.paragraph(`There is a GitHub repository that contains the scripts required to download the LLVM Project source code and build it. A ${html.link("Windows version", "https://github.com/PCIT-Project/llvm-project-build/blob/main/build_llvm.windows.bat")} (.bat) and a ${html.link("Unix version", "https://github.com/PCIT-Project/llvm-project-build/blob/main/build_llvm.unix.sh")} (.sh) exist. Get the correct script for your machine.`);

			page.h3("2) Run");
			page.paragraph(`Run the script. It will automatically clone the LLVM repository and compile. Here's an example with the windows version:`);

			page.codeBlock(Page.Language.TERMINAL, "./build_llvm.windows.bat --build release");

			page.paragraph('To see more options with the build script (such as a debug build or skipping cloning) you can run the following:');

			page.codeBlock(Page.Language.TERMINAL, "./build_llvm.windows.bat --help");


			page.h3Anchor("3) Completed", "llvm_3");
			page.text(`LLVM should now be compiled. The output will be found in directory ${html.highlight("llvm_package_20.0.8/[release|debug]/output")}. Inside you will find two directories: ${html.highlight("include")} and ${html.highlight("lib-[release|debug]")}. These directories will be copied or moved later.`);


				
			page.h2("Building PCIT-CPP");
			page.text("Now that we have build LLVM, we can build PCIT.");

			page.h3("1) Clone the repository");
			page.codeBlock(Page.Language.TERMINAL, "git clone https://github.com/PCIT-Project/PCIT-CPP.git --recursive");
			page.paragraph(`The ${html.highlight("--recursive")} argument is required to also clone ${html.link("Evo", "https://github.com/12Thanjo/Evo")} (a C++ standard library), the Panther standard library, and libc. These (in addition to LLVM) are the only dependencies that PCIT-CPP has.`);

			page.h3Anchor("2) Add directory for LLVM", "pcit_2");
			page.paragraph(`Inside the ${html.highlight("/PCIT-CPP/dependencies/")}, add the directory ${html.highlight("LLVM_build")}. Copy or move (whichever you prefer) the two directories discussed in ${html.link("step 3 of Building LLVM", "/site/build.html#llvm_3")} (${html.highlight("include")} and ${html.highlight("lib-release")}) into this directory.`);

			page.h3("3) Configuring PCIT build system with Premake5");
			page.paragraph(`Premake is a build system configurator, so Premake5 is used to configure the build system. For more information, you can run ${html.highlight("premake5 --help")}. Navigate to the main directory of the PCIT-CPP repository, and select one of the following methods of running Premake5:`);


			page.h4("Using Microsoft Visual Studio:");
			page.codeBlock(Page.Language.TERMINAL, "premake5 vs2022");

			page.h4("Using GNU Make:");
			page.codeBlock(Page.Language.TERMINAL, "premake5 gmake --cc=[COMPILER]");
			page.paragraph(`Replace "[COMPILER]" with one of the following options`);
			page.bullets([
				"clang",
				"gcc",
				"mingw",
				"msc-v143",
			]);


			page.h3("4) Build");

			page.h4("Using Microsoft Visual Studio:");
			page.paragraph(`Open ${html.highlight("PCIT-CPP.sln")} in Visual Studio, set the build configuration to ${html.highlight("ReleaseDist")}, and compile.`)

			page.h4("Using GNU Make:");
			page.codeBlock(Page.Language.TERMINAL, "make configuration=releasedist_linux");


			page.h3("6) Done!");
			page.paragraph(`The generated output is in ${html.highlight("./build/[Windows|Linux]/ReleaseDist/bin/")}. Enjoy PCIT Project!`);


			page.h2("Next Steps");
			page.text(`Now that you have successfully built the PCIT Project software, maybe check out one of our ${html.link("tutorials", "/site/tutorials/tutorials.html")}.`);
		}
	);
}


