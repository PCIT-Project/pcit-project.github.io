//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../Page.js").Page;
const html = require("../../../html.js");
const terms = require("../../../terms.js");

let page = new Page("Modules", "documentation/panther/modules.html");

page.h1("Modules");

page.text(`A module is a set of symbols that are sort of namespaced together. To import modules, you can use the ${html.inline_code("@import")} intrinsic. This intrinsic takes just takes a single argument: a string of the path of the file or name of a named module. The special named modules are:`);

page.bullets([
	"std - standard library",
	"math - math library (sub-module of std)"
]);


page.text(`To import a file, you give the ${html.inline_code("@import")} intrinsic the path of the file. If the path starts with a \"./\", the path will resolve relative to the current file, otherwise it will resolve relative to the current project.`);

page.text(`For a symbol declared in the file to be accessible through the module of that file, it must be in global scope and have the ${html.inline_code("#pub")} attribute, or be a member of a type declared in that file with has the ${html.inline_code("#pub")} attribute.`);


page.h2("Example");

page.code_block("Panther", 
`// importing the standard library
def std = @import("std");

// importing the math library
def math = @import("math");

// because the math module is a sub-module of the std module, \`math2\` is equivalent to \`math\`
def math2 = std.math;

// just like with \`math2\`, \`math3\` is equivalent to \`math\`
def math3 = @import("std").math;



// importing a file
def some_file = @import("some/path/some_file.pthr");

// importing a file with a relative
def some_relative_path = @import("./relative/path/relative_file.pthr");`);


page.generate();

