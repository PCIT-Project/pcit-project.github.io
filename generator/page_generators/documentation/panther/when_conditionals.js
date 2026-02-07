//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../Page.js");
const html = require("../../../html.js");
const terms = require("../../../terms.js");
const search = require("../../../search.js");


exports.getPageGenerator = function(){
	return new (require("../../../PageGenerator.js").PageGenerator)(
		() => {
			return new Page.Page(__filename, {
				path        : "documentation/panther/when_conditionals.html",
				title       : "When Conditionals",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION],
				description : "Documentation for when conditionals in the Panther programming language",
			});
		},
		(page) => {
			page.text(`When conditionals are conditionals that are evaluated at compile-time. The condition may be any ${terms.get("comptime")} value. The bodies may hold 0 or more statements (this includes things like members of structs). Any statements in a when conditional block that is not taken will not exist in semantic analysis or any further compiler stage.`);


			page.h2("Example");

			page.codeBlock(Page.Language.PANTHER,
`def std = @import("std");

when(std.math.PI < 2.0){
	// since this branch is not taken, this function won't exist
	func sum = (lhs: Int, rhs: Int) #pub -> Int {
		return lhs + rhs;
	}

}else when(true){
	// this branch is taken, so this version of \`Integer\` is used
	type Integer = alias I64;

}else when(false){
	// empty...

}else{
	// since this branch is not taken, no error is emitted
	const foo: Int = true;

	// since this branch is not taken, this version of \`Integer\` is not used
	type Integer = alias I32;
}

// \`num\` is of type I64
const num: Integer = 14;`
			);
		}
	);
}

