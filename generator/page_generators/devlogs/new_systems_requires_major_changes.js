//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../Page.js");
const html = require("../../html.js");
const terms = require("../../terms.js");
const search = require("../../search.js");

exports.getPageGenerator = function(){
	return new (require("../../PageGenerator.js").PageGenerator)(
		() => {
			return new Page.Page(__filename, {
				path         : "devlogs/new_systems_requires_major_changes.html",
				title        : "New Systems Requires Major Changes",
				categories   : [search.Category.PANTHER, search.Category.DEVLOG],
				breadcrumbs  : [Page.Breadcrumbs.DEVLOGS],
				description  : "Adding position independent declaration and the build system to the Panther compiler",
				article_info : {
					author         : "Andrew Feldman",
					date_published : "2025-01-02",
					author_url     : "https://www.pcitproject.org/site/about.html#Andrew_Feldman"
				},
			});
		},
		(page) => {

			page.h2("Order Independent Declaration");

			page.paragraph("Upon starting work on semantic analysis of structs in Panther, I came to realize that it would be less work if I implemented order independent declaration (OID) first. I finished up " + html.highlight(html.link("v0.0.77.0", "https://github.com/PCIT-Project/PCIT-CPP/blob/main/CHANGELOG.md#v0.0.77.0")) + ", which included parsing of structs, and began work on OID. I had already thought about how I would implement OID before I began working on semantic analysis and had a plan for implementing it.");

			page.paragraph(`The plan was, during semantic analysis, to make a first pass and find all the global declarations. Semantic analysis could then make a second pass where it could go through all the definitions. If any definition requires a definition of another symbol or type that hasn’t been defined yet, it would go through the definition of that dependency and then come back and continue. This could potentially be recursive, so there had to be checks of cyclic dependencies, etc. A version of the plan already worked perfectly for functions and templated functions. I had decided that it would be best to implement this after Panther had global variables, constexpr functions, ${terms.get("when conditionals")}, imports, and types where the base is not a primitive.`);

			page.paragraph("I had met all the requirements for OID that I had laid out for myself, so I went to implement it. However, when I began considering the exact implementation details, I realized that the plan could cause lots of waiting during multithreading and tank performance. To explain how, consider the following code:");

			page.codeBlock(Page.Language.PANTHER,
`def some_lib = @import("some_lib.pthr");

func bar = () #pub -> Foo {
	// do something...
}

when(some_lib.func_that_returns_false()){
	type Foo = I32;

}else{
	type Foo = I64;
}`
			);

			page.paragraph("The function " + html.highlight("bar") + " requires that the type " + html.highlight("Foo") + " is defined to create the full declaration. However, it’s not sure whether it " + html.highlight("Foo") + " is the one defined on line 8, line or 11. The compiler would have to go to " + html.highlight("some_lib") + " and get the definition of " + html.highlight("func_that_returns_false") + " which might block the thread working on " + html.highlight("some_lib") + " (if there is one), and could cause it to sit there doing nothing. To make things worse, notice that " + html.highlight("bar") + " has the " + html.highlight("#pub") + " attribute; if some other file imported the current one and needed " + html.highlight("bar") + " while all of this was happening, it would have to wait too. Now we have 3 threads with 2 of them just sitting waiting for one to finish instead of doing work.");

			page.paragraph("The best solution I came up with to this problem is to add a stage before semantic analysis called dependency analysis. Instead of determining dependencies on the fly while doing semantic analysis, the dependency analysis stage would pre-compute it. Then, during semantic analysis, instead of each thread being tasked with working on a file, each thread would be given a node of the dependency graph to work on. This means that if threads are waiting for another thread to finish, there should very rarely be any other work that can be done, and waiting around is much more palatable. However, implementing this would require modification to a significant amount of the existing code, since semantic analysis accounted for about 25% of the code written for the " + html.link("PCIT-CPP repository", "https://github.com/PCIT-Project/PCIT-CPP") + " to date (7,000+ lines).");

			page.h2("The Build System");

			page.paragraph("While I was thinking about the problem above, I realized another: the Panther build system won’t work at all. The Panther compiler purposely requires knowing all files before compiling as it greatly simplifies the compiler as well as making it significantly faster. Given this fact, how would the build system know which files to include as part of the build script? Having this as a command-line argument was not an option as this would inevitably lead to build systems for the build system.");

			page.paragraph("Eventually, I came to the realization that the solution was incredibly simple: remove the restriction that the compiler needs to know all files ahead of time just during the build system, but keep it for when compiling the actual project. Hurray! Problem solved! This solution may have been simple in theory, however implementing it with the task management system that was there was definitely going to be quite difficult.");

			page.h2("Major Changes");

			page.paragraph("With the problems with both OID and the build system in mind, I decided the best course of action is to rewrite much of the Panther compiler. The rewrite also gives me an excuse to fix design decisions inside the " + html.highlight("Context") + " and " + html.highlight("SemanticAnalyzer") + " classes that I came to disagree with as time went on. The latest update at time of writing (" + html.highlight(html.link("v0.0.78.0", "https://github.com/PCIT-Project/PCIT-CPP/blob/main/CHANGELOG.md#v0.0.78.0")) + ") contains the beginning of this. The old implementation is now in a directory called " + html.highlight("Panther-old") + " while the new one is in " + html.highlight("Panther") + ". This was done instead of creating a separate branch to make it easier for me to switch back and forth. I only did this because it is pre-release and thus the project has 0 users. Once the rewrite achieves feature parity with the old version, the " + html.highlight("Panther-old") + " directory will be deleted.");

			page.paragraph("The " + html.highlight("Context") + " class was completely rewritten to handle the much more complex task management system, but tokenization/printing of tokens, parsing/printing of AST were basically copied and pasted. The next step is to make the dependency analysis and semantic analysis stages. My plan is for the new semantic analysis to still produce ASG (abstract semantics graph), so once I’ve completed those two stages I can mostly copy and paste the lowering ASG to PIR code. This rewrite will probably take significant amounts of time, but I believe that it will definitely be worth it.");
		}
	);
}


