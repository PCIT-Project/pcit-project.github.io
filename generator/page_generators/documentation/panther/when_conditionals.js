//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../Page.js").Page;
const Language = require("../../../Page.js").Language;
const html = require("../../../html.js");
const terms = require("../../../terms.js");
const search = require("../../../search.js");

let page = new Page("When Conditionals", "documentation/panther/when_conditionals.html", [search.Category.PANTHER, search.Category.DOCUMENTATION]);
page.setDescription("Documentation for when conditionals in the Panther programming language");

page.h1("When Conditionals");

page.text(`When conditionals are conditionals that are evaluated at compile-time. The condition may be any ${terms.get("comptime")} value. The bodies may hold 0 or more statements (this includes things like members of structs). Any statements in a when conditional block that is not taken will not exist in semantic analysis or any further compiler stage.`);


page.h2("Example");

page.code_block(Language.Panther,
`def math = @import("math");

when(math.PI < 2.0){
	// since this branch is not taken, this function won't exist
	func sum = (lhs: Int, rhs: Int) #pub -> Int {
		return lhs + rhs;
	}

}else when(true){
	// this branch is taken, so this version of \`Integer\` is used
	alias Integer = I64;

}else when(false){
	// empty...

}else{
	// since this branch is not taken, no error is emitted
	const foo: Int = true;

	// since this branch is not taken, this version of \`Integer\` is not used
	alias Integer = I32;
}

// \`num\` is of type I64
const num: Integer = 14;`
);


page.generate();

