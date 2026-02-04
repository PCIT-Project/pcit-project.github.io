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


exports.getPageGenerator = function(){
	return new (require("../../../PageGenerator.js").PageGenerator)(
		() => {
			return new Page(__filename, {
				path        : "documentation/panther/structs.html",
				title       : "Structs",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [breadcrumbs.DOCUMENTATION, breadcrumbs.PANTHER_DOCUMENTATION],
				description : "Documentation for structs in the Panther programming language",
			});
		},
		(page) => {
			page.paragraph(html.italic("(TODO)"));


			page.h2("Example");

			page.code_block(Language.PANTHER,
`type Vec2 = struct {
	var x: F32; // member variable
	var y: F32;

	func multiplyBy = (this mut, coefficient: F32) -> Void { // method
		this.x *= coefficient;
		this.y *= coefficient;
	}

	func createZero = () -> Vec2 { // member function (no \`this\`)
		return new Vec2{x = 0.0, y = 0.0};
	}


	func + = (this, rhs: Vec2) -> Vec2 { // operator overloading
		return new Vec2{
			x = this.x + rhs.x,
			y = this.y + rhs.y,
		};
	}

	func * = (this, coefficient: F32) -> (output: Vec2) { // arg of operator overloading can be a different type
		output = copy this;
		output.multiplyBy(coefficient);
		return...;
	}
}



type NonTrivialNum = struct {
	func new = (num: Int) #rt -> (output: NonTrivialNum) { // initialization new
		output.num = copy num;
		NonTrivialNum.num_existing += 1;
		return...;
	}

	func new = () #rt -> (output: NonTrivialNum) { // default initialization new
		output.num = 0;
		NonTrivialNum.num_existing += 1;
		return...;
	}

	func new = (this mut, num: Int) #rt -> Void { // assignment new
		this.num = copy num;
	}


	func delete = (this) #rt -> Void { // delete
		if(this.num != null){
			NonTrivialNum.num_existing -= 1;
		}
	}



	func copy = (this) #rt -> (output: NonTrivialNum) { // initialization copy
		output.num = copy this.num;
		NonTrivialNum.num_existing += 1;
		return...;
	}

	func copy = (this, target: NonTrivialNum mut) #rt -> Void { // assignment copy
		target.num = copy this.num;
		NonTrivialNum.num_existing += 1;
	}




	func move = (this mut) #rt -> (output: NonTrivialNum) { // initialization move
		output.num = this.num.extract();
		return...;
	}

	func move = (this mut, target: NonTrivialNum mut) #rt -> Void { // assignment move
		target.num = this.num.extract();
		NonTrivialNum.num_existing -= 1;
	}


	// private, cannot be accessed outside this struct
	var num: Int? #priv; // Demo explanaition: null if \`this\` was moved from


	var num_existing: UInt #priv #global = 0;
	func getNumExisting = () #rt -> UInt {
		return copy NonTrivialNum.num_existing;
	}
}


func entry = () #entry -> UI8 {
	var foo = new NonTrivialNum(); // 1 NonTrivialNum exists

	var bar: NonTrivialNum = copy foo; // 2 NonTrivialNum exists
	bar = move foo; // 1 NonTrivialNum exists
	
	return NonTrivialNum.getNumExisting() as UI8; // returns 1
}`
			);
		}
	);
}


