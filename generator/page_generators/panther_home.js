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
	path                    : "Panther.html",
	title                   : "Panther Programming Language",
	categories              : [require("../search.js").Category.PANTHER],
	description             : "Home page of the Panther programming language",
	has_categories_in_title : false,
});

page.text("Statically typed, high-performance, general-purpose programming language. Panther is an alternative to programming languages like C++, Rust, Zig, and Carbon.");

page.h2("Help programmers write good/fast code, without getting in the way");
page.bullets([
	"Low level control with high level features (zero-cost abstraction)",
	"Safety features without forcing a programming-paradigm like Rust or Swift",
	"Powerful generics without needing to be an expert",
	"Manual memory management with high-quality allocators right out of the box",
	"Allow as much compile-time computation as possible",
]);

page.h2("Versatile usage");
page.bullets([
	"Seamless interoperability with C and the C ABI (hopefully C++ as well)",
	"Use as a compiled or scripting language without loss of runtime performance",
	"Compile to any modern target or platform (hopefully including WASM and SPIR-V)",
]);

page.h2("Enjoyable to use");
page.bullets([
	"Nice / helpful error messages",
	"Readable and explicit syntax without being overly verbose",
	"Build system for Panther " + html.italic("in") + " Panther",
	"Fast compile times - hopefully allowing for building of the entire project, every compile",
]);


page.anchor("example");
page.h2("Example:");
page.text("Here's a quick taste of the Panther programming language. All of the following currently compiles (as of " + page.pcit_cpp_version("v0.0.43.0") + "). If you want a peek at all currently supported features, maybe look at " + html.link("the change log", "https://github.com/PCIT-Project/PCIT-CPP/blob/main/CHANGELOG.md") + ". Please keep in mind that any syntax may change in the future.");


page.begin_info();
page.h2("Note:", "margin-top: 0.8em;");
page.text(`The following code snippet (and ${page.pcit_cpp_version("v0.0.43.0")}) are the old implementation of the Panther compiler. The new implementation does not not currently support all of the features shown below. In addition, changes may be made to the language (and already have), and are not necessarily reflected here. Once the new implementation has all the features shown below, the snippet will be updated.`);
page.end_info();



page.code_block(Language.PANTHER,
`// importing a file
def some_file = @import("directory/file.pthr");

// function declaration (parameter \`num\` is implicitly \`read\`)
// has the \`#runtime\` attribute which means it can only run at runtime
func set_num = (num: UI8, num_to_change: UI8 mut) #runtime -> Void {
	num_to_change = copy num;
}

// templated function
// has the \`#pub\` attribute to make it visible to outside files that import this file
// doesn't have the \`#runtime\` attribute which means it can run at runtime
func just_return_num = <{T: Type}> (num: T) #pub -> T {
	func sub_func = (sub_num: T) -> T {
		return (copy sub_num);
	}

	return sub_func(num);
}

// entry function (notice the name doesn't matter, but it has the attribute \`#entry\`)
func asdf = () #entry -> UI8 {
	func get_compile_time_value = () -> Bool {
		return true;
	}
	def COMPILE_TIME_VALUE: Bool = get_compile_time_value();
	when(COMPILE_TIME_VALUE){ // compile time conditional (doesn't enter a new scope)
		var foo = just_return_num<{UI8}>(some_file.get_UI8_12()); // variable declaration with type inference
	}else{
		var foo: UI8 = 14; // variable declaration with explicit type
	}


	func get_type_id_of_UI8 = () -> TypeID {
		// intrinsic function call
		return @getTypeID<{UI8}>();
	}

	var bar: Type(get_type_id_of_UI8()) = uninit; // create an uninitialized local variable
	bar = 0; // initialize the local variable through assignment
	set_num(foo, bar);

	return (move bar); // should return 12
}`);


page.h2("Learn More");
page.text(`Interested in learning more? Check out the ${html.link("Panther tutorial", "/site/tutorials/panther/tutorial.html")}.`);


page.generate();