//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../Page.js").Page;
const breadcrumbs = require("../../Page.js").breadcrumbs;
const html = require("../../html.js");
const terms = require("../../terms.js");
const search = require("../../search.js");


let page = new Page(__filename, {
	path           : "devlogs/dependencies_v2.html",
	title          : "Dependencies V2",
	categories     : [search.Category.PANTHER, search.Category.DEVLOG],
	breadcrumbs    : [breadcrumbs.DEVLOGS],
	description    : "New and improved dependency system for the Panther compiler",
	article_info : {
		author         : "Andrew Feldman",
		date_published : "2025-02-06",
		author_url     : "https://www.pcitproject.org/site/about.html#Andrew_Feldman"
	},
});


page.paragraph(`In ${html.link("my first devlog", "/site/devlog/new_systems_requires_major_changes.html")}, I discussed how implementing Order Independent Declarations and the Panther build system required redoing a lot of work for the compiler as well as adding a new stage (Dependency Analysis). Update ${page.pcit_cpp_version("v0.0.79.0")} contained the first proof of concept of this new system working. The code required to get it working was complex and difficult to understand, but the system worked and it seemed robust. There was a looming sense of difficulty coming down the line (such as pointers to user-defined types - more on that later), but I plowed through as this was the solution I came up with and I was sticking to it. Through ${page.pcit_cpp_version("v0.0.80.0")} and ${page.pcit_cpp_version("v0.0.81.0")} it continued to work well, albeit with more and more complexity. I then got to implementing ${html.inline_code("@import")} and ran face-first into a wall made of pure abstract complexity.`);


page.paragraph(`The original idea for the Dependency Analysis stage was that it would create a dependency graph of all of the symbols for the entire project. The graph couldn't be made in one go, however, as information only available through semantic analysis would be necessary to do so. For example, until the compiler knows which file an ${html.inline_code("@import")} call is importing, there would be no way to generate the graph that stemmed from that. This solution was to do this later when it would have more information. Conceptually this seems simple, however the way the AST is purposely laid out makes it difficult to save/organize the information needed to facilitate this. Possible, yes - but difficult to implement cleanly, memory intensive, and slow. Part of the reason for building this new system was that it would increase compilation speed. There had to be a better way.`);
 
page.paragraph(`If I were to come up with a new solution, it would have to solve both this problem as well as other problems such as the pointers to user-defined types issue I mentioned earlier. In C/C++, if I have a variable of type ${html.inline_code("Foo*")} when type ${html.inline_code("Foo")} hasn't been defined yet, it's fine as long as the declaration of ${html.inline_code("Foo")} exists. Ideally the Panther compiler would do something similar. However, for any given function, there would be no way to know if the definition of ${html.inline_code("Foo")} was needed or just having the declaration is sufficient. If the pointer to ${html.inline_code("Foo")} never got dereferenced, then semantic analysis wouldn't need to know the definition. In addition, what if a ${html.inline_code("Foo*")} was returned from a function and was immediately dereferenced - how would dependency analysis know that this occurs without semantic analysis? So either the compiler wouldn't be able to use this neat trick, or it would have to go through a similar process like ${html.inline_code("@import")} (deferring dependency graph generation), further increasing the complexity and memory usage, and decreasing the performance.`);

page.h2("New System");
page.paragraph(`Ideally a new and better system that would fix these issues would, well, fix these issues. To solve this, I imagined the ideal scenario: make each symbol a distinct task. When doing semantic analysis on that symbol, if there's ever something not ready yet (such as a function or a file to be imported), the compiler would be able to pause working on the task, put it to the side, and come back to it when the other thing was ready. At first glance fibers are a good candidate, but using fibers would cause a huge amount of overhead. But what if I created virtual fibers?`);

page.paragraph(`I realized that I could generate a list of all of the instructions required do semantic analysis of a given symbol, and if I ever hit one that required waiting I could stop working on that symbol and go get a different task to work on. Then when whatever was being waited on was finished, the original task could be put back into the queue to be worked on. The counter of which instruction was last attempted would still be the same value, and the semantic analysis of that symbol could continue almost like it was never paused.`);

page.paragraph(`Before committing to a new system just to find that this one was majorly flawed as well, I decided to do a bit of research. Jonathan Blow is the creator of Jai programming language. He sometime streams talking about / working on his language and its compiler as well as the features it has, and then uploads the vod to Youtube. I watched some of these vods as research when designing Panther. I wondered if he had a video talking about what he did for his dependency system as I suspected he would have similar issues with Jai that I did with Panther. ${html.link("He did", "https://youtu.be/4q0cgjXhhTo?si=hI6HH9y3fwAZUQNn")} (if you want to watch it, only the first half is relevant to the actual system). He starts by talking about the issues he had with his first attempt (and it seems he did something similar to my dependency analysis stage). He then goes on to discuss how his new system works and it was very similar to the way that my new idea worked. He doesn't have any newer videos with titles containing anything about dependencies, so I took that to mean that he stuck with this system and that it worked well for him.`);

page.h2("Implementation");
page.paragraph(`The new system now has the name "Symbol Process Building". The first implementation of it can be found in ${page.pcit_cpp_version("v0.0.82.0")}. However, it was a bit flawed and ${page.pcit_cpp_version("v0.0.83.1")} is a better representation of how it works (it is also the latest version at time of writing). It was significantly simpler to implement, which is I think is a good sign. The only road block was getting the circular dependency detection to never deadlock or race-condition. The solution I came up with for that is not one I'm super happy with (performance wise), but that's something I think I can come back to in the future. I hope these aren't famous last words.`);

page.paragraph(`In ${page.pcit_cpp_version("v0.0.83.1")}, variables, ${html.inline_code("@import")} calls, ${terms.get("when conditionals")}, the beginnings of the standard library, and dynamic loading of files through ${html.inline_code("@import")} all work. My plan is to implement all of the potential pain points of the new Symbol Process Building as fast as possible to make sure this new system works as well as it seems it does.`);





page.generate();

