//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../Page.js").Page;
const breadcrumbs = require("../../../Page.js").breadcrumbs;
const Language = require("../../../Page.js").Language;
const html = require("../../../html.js");
const terms = require("../../../terms.js");
const search = require("../../../search.js");

let page = new Page(__filename, {
	path        : "documentation/panther/interfaces.html",
	title       : "Interfaces",
	categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
	breadcrumbs : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION],
	description : "Documentation for interfaces in the Panther programming language",
});


page.paragraph(html.italic("(TODO)"));


page.h2("Example");

page.code_block(Language.PANTHER,
`// Create Interface
interface Shape = {
	func area = (this) -> F32;
	func num_sides = () -> UInt { return 0;	} // method with default
}


type Quad = struct {
	var width: F32;
	var height: F32;


	func area = (this) -> F32 {
		return this.width * this.height;
	}

	func num_sides = () -> UInt { return 4; }


	// implementation of Shape for Quad
	impl Shape{
		num_sides = num_sides,
		area      = area,
	}
}


type Circle = struct {
	var radius: F32;


	func get_area = (this) -> F32 {
		return 3.14 * this.radius * this.radius;
	}

	func get_num_sides = () -> UInt { return 0; }


	// Implementation of Shape for Circle
	impl Shape{
		num_sides = get_num_sides, // method names don't have to be the same
		// using default for Shape.area
	}
}`);


page.generate();

