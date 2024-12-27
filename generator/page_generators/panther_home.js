//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../Page.js").Page;
const html = require("../html.js");


let page = new Page("Panther Programming Language", "Panther.html");

page.h1("Panther Programming Language");
page.paragraph("Statically typed, compiled, high-performance, general-purpose programming language. Panther is an alternative to languages like " + html.link("C++", "https://isocpp.org/") + ", " + html.link("Rust", "https://www.rust-lang.org/") + ", " + html.link("Zig", "https://ziglang.org/") + ", and " + html.link("Odin", "https://odin-lang.org/") + ".");

page.h2("Help programmers write good/fast code, without getting in the way");
page.bullets([
	"Zero-cost abstractions",
	"High level language that allows for low level control",
	"Allow as much compile-time computation as possible",
	"Powerful generics without needing to be an expert",
	"Give the compiler knowledge of common patterns to allow it to help you write fast code, easier",
]);

page.h2("Enjoyable to use");
page.bullets([
	"Readable and explicit syntax without being overly verbose",
	"Fast compile times - allow for builing of the entire project, every compile",
	"Build system for Panther " + html.italic("in") + " Panther",
	"Nice / helpful error messages",
]);

page.h2("Seamless interoperability with C");
page.paragraph("This will hopefully extend to C++ as well.");

page.h2("Example:");
page.paragraph("Here's a quick taste of the Panther programming language. All of the following currently compiles (as of " + html.inline_code("v0.0.43.0") + "). If you want a peek at all currently supported features, maybe look at " + html.link("the change log", "https://github.com/PCIT-Project/PCIT-CPP/blob/main/CHANGELO.md") + ". Please keep in mind that any syntax may change in the future.");


page.anchor("example");
page.code_block("Panther",
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
		return (move sub_num);
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

	var bar: Type(get_type_id_of_UI8()) = uninit;
	set_num(foo, bar);

	return (move bar); // should return 12
}`);



page.generate();