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

page.text("Statically typed, high-performance, systems programming language. Panther is an alternative to programming languages like C++, Rust, and Zig.");

page.h2("Help programmers write good/fast code, without getting in the way");
page.bullets([
	"Low level control with high level features (zero-cost abstraction)",
	"Safety features without forcing a programming-paradigm like Rust or Swift",
	"Powerful generics without needing to be an expert",
	"Manual memory management with high-quality allocators right out of the box",
	"No hidden allocations",
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


page.h2Anchor("Examples:", "examples");
page.paragraph("Here are some examples to give a taste of the Panther programming language.");


page.h3("Error Handling");
page.code_block(Language.PANTHER,
`func divide = (lhs: Int, rhs: Int) -> Int <Void> {
	if(rhs == 0){ error; }

	return lhs / rhs;
}


func entry = () #entry -> UI8 {
	const division_result: Int = try divide(12, 0) else 0;

	return division_result as UI8;
}`);



page.h3("Interfaces");
page.code_block(Language.PANTHER,
`// Create Interface
interface Shape = {
	func area = (this) -> F32;
	func num_sides = () -> UInt { return 0;	} // method with default
}


// Create a struct
type Quad = struct {
	var width: F32;
	var height: F32;

	// create a method
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
}



// this function becomes a template on the shape passed to it
func get_shape_num_sides = (shape: Shape) -> UInt {
	return shape.num_sides();
}


// runtime polymorphism
// \`shape\` is a struct of a pointer to the specific shape and a pointer to a \`vtable\`
func get_shape_area = (shape: Shape*) -> UInt {
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

	const area_of_circle: F32 = get_shape_area(&circle as Shape*);
	
	return 0;
}`);



page.h2("Learn More");
page.text(`Interested in learning more? Check out the ${html.link("Panther tutorial", "/site/tutorials/panther/tutorial.html")}.`);


page.generate();