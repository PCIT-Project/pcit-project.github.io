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
				path        : "documentation/panther/variables.html",
				title       : "Variables",
				categories  : [search.Category.PANTHER, search.Category.DOCUMENTATION],
				breadcrumbs : [Page.Breadcrumbs.DOCUMENTATION, Page.Breadcrumbs.PANTHER_DOCUMENTATION],
				description : "Documentation for variables in the Panther programming language",
			});
		},
		(page) => {
			page.h3("Syntax");
			page.declList([
				"{var|const|def} {IDENTIFIER}: {TYPE} {ATTTRIBUTES*} = {EXPRESSION};",
				"{var|const|def} {IDENTIFIER} {ATTTRIBUTES*} = {EXPRESSION};",
			]);

			page.paragraph("Variables in Panther are a mechanism to give a specific value a name. They can be declared in global scope or in local function scope. Syntax 1 creates an explicitly typed variable whereas syntax 2 creates an implicitly typed variable.");



			page.h2Searchable("Var Variables", "var_variables");
			page.paragraph(`Var variables are values that have storage and are mutable. The assignment value may be an ${terms.get("initializer value")}. The value category of def variables is ${terms.get("concrete-mutable")}.`);
			page.table([
				["If declared:", "Value Stage", "Value Stage of Assignment Value"],
				["in global scope", terms.get("runtime"), terms.get("constexpr")],
				[`in a constexpr function`, terms.get("comptime"), terms.get("comptime")],
				[`in a runtime function `, terms.get("runtime"), terms.get("runtime")],
			]);


			page.h2Searchable("Const Variables", "const_variables");
			page.paragraph(`Const variables are values that have storage and are not mutable. The assignment value may be an ${terms.get("initializer value")}. The value category of def variables is ${terms.get("concrete-const")}.`);
			page.table([
				["If declared:", "Value Stage", "Value Stage of Assignment Value"],
				["in global scope", terms.get("comptime"), terms.get("constexpr")],
				[`in a constexpr function`, terms.get("comptime"), terms.get("comptime")],
				[`in a runtime function `, terms.get("runtime"), terms.get("runtime")],
			]);

			page.h2Searchable("Def Variables", "def_variables");
			page.paragraph(`Const variables are values that do not have storage and are not mutable. The assignment value must be ${terms.get("constexpr")} and it may be an ${terms.get("initializer value")}. The value category of def variables is ${terms.get("ephemeral")}. If declared without an explicit type and with an assignment value that is ${terms.get("fluid")}, the def variable is ${terms.get("fluid")}.`);
			page.table([
				["If declared:", "Value Stage", "Value Stage of Assignment Value"],
				["anywhere allowed", terms.get("constexpr"), terms.get("constexpr")],
			]);



			page.h2Searchable("Variable Attributes", "variable_attributes");

			page.h3("#pub");
			page.text( `Make the variable accessable outside this module (such as through ${terms.get("intrinsic @import")})`);
			page.table([
				["Argument Index", "Description", "Type", "Is Required"],
				["0", "If the attribute is enabled", page.inlineCode("Bool"), "no"],
			]);




			page.h2("Examples:");
			page.codeBlock(Page.Language.PANTHER,
`var var_variable: Int = 12; // var variable
const const_variable = true; // const variable that's implicitly-typed

def DEF_VARIABLE: Int #pub = 12; // def variable with the \`#pub\` attribute
def DEF_VARIABLE_FLUID = 12; // def variable that's fluid`
			);
		}
	);
}

