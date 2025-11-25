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
`interface Shape = #polymorphic {
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
		area      = area, // defining with an existing method
		num_sides = () -> UInt { return 4; }, // defining with an inline method
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
		area = get_area, // method names don't have to be the same
		// using default for Shape.num_sides
	}
}



// this function becomes a template on the shape passed to it
func get_shape_num_sides = (shape: Shape) -> UInt {
	return shape.num_sides();
}


// runtime polymorphism (allowed becuase the interface has attribute \`#polymorphic\`)
// \`shape\` is a struct of a pointer to the shape object and a pointer to a vtable
func get_shape_area = (shape: Shape^) -> F32 {
	return shape.area();
}



func entry = () #entry -> UI8 {
	const quad = new Quad{
		width  = 1.0,
		height = 2.0,
	};

	const circle = new Circle{
		radius = 2.0,
	};

	const num_sides_of_quad: UInt = get_shape_num_sides(quad);

	const area_of_circle: F32 = get_shape_area(circle as Shape^);
	
	return 0;
}`);


page.generate();

