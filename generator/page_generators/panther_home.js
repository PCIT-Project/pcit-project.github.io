const Page = require("../Page.js").Page;
const html = require("../html.js");


let panther_home = new Page("Panther Programming Language", "Panther.html");

panther_home.h1("Panther Programming Language");
panther_home.paragraph("Statically types, compiled, high-performance, general-purpose programming language.")

panther_home.h2("Help good programmers write good, fast code");
panther_home.bullets([
	"Zero-cost abstractions",
	"Give the compiler knowledge of common patterns to allow it to help you write fast code, easier",
	"Allow as much compile-time computation as possible",
	"Powerful generics without needing to be an expert",
]);

panther_home.h2("Enjoyable to use");
panther_home.bullets([
	"Fast compile times - allow for builing of the entire project, every compile",
	"Build system for Panther " + html.italic("in") + " Panther",
	"Nice / helpful error messages",
]);

panther_home.h2("Seamless interop with C");
panther_home.paragraph("This will hopefully extend to C++ as well.");

panther_home.h2("Example:");
panther_home.paragraph("Here's a quick taste of the Panther programming language. All of the following currently compiles (as of " + html.inline_code("v0.0.43.0") + "). If you want a peek at all currently supported features, maybe look at " + html.link("https://github.com/PCIT-Project/PCIT-CPP/blob/main/CHANGELO.md", "the change log") + ". Please keep in mind that any syntax may change in the future.");



panther_home.code_block("Panther",
`// importing a file
def some_file = @import("directory/file.pthr");

// function declaration (parameter \`num\` is implicity \`read\`)
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



panther_home.generate();