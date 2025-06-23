//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../Page.js").Page;
const breadcrumbs = require("../../../Page.js").breadcrumbs;
const html = require("../../../html.js");
const search = require("../../../search.js");

let page = new Page(__filename, {
	path                    : "documentation/panther/documentation.html",
	title                   : "Panther Documentation",
	categories              : [search.Category.PANTHER, search.Category.DOCUMENTATION],
	breadcrumbs             : [breadcrumbs.DOCUMENTATION],
	description             : "Documentation for the Panther programming language",
	has_categories_in_title : false,
});


page.paragraph(`Documentation for the Panther programming language. If you are looking for documentation for the Panther standard library, it can be found on the ${html.link("Panther STD Documentation", "/site/documentation/panther_std/documentation.html")} page. If you are new the Panther and would like to learn how to get up and running with it, check out ${html.link("Panther Tutorial", "/site/tutorials/panther/tutorial.html")}.`);


// TODO: remove at release
page.begin_info();
page.h2("Important Note", "margin-top: 0.8em;");
page.text("As Panther is pre-release, anything in the documentation may change as the design of the language evolves. The documentation is also far from complete.");
page.end_info();

page.text(html.link("Fluid Values", "/site/documentation/panther/fluid_values.html"));
page.text(html.link("Intrinsics", "/site/documentation/panther/intrinsics/intrinsics.html"));
page.text(html.link("Functions", "/site/documentation/panther/functions.html"));
page.text(html.link("Literals", "/site/documentation/panther/literals.html"));
page.text(html.link("Modules", "/site/documentation/panther/modules.html"));
page.text(html.link("Operators", "/site/documentation/panther/operators.html"));
page.text(html.link("Primitive Types", "/site/documentation/panther/primitive_types.html"));
page.text(html.link("Undefined Behavior", "/site/documentation/panther/undefined_behavior.html"));
page.text(html.link("Uninitialized", "/site/documentation/panther/uninitialized.html"));
page.text(html.link("Value Categories", "/site/documentation/panther/value_categories.html"));
page.text(html.link("Value Stages", "/site/documentation/panther/value_stages.html"));
page.text(html.link("Variables", "/site/documentation/panther/variables.html"));
page.text(html.link("When Conditionals", "/site/documentation/panther/when_conditionals.html"));



page.generate();

