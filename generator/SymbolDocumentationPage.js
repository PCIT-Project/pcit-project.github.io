//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////


const Page = require("./Page.js").Page;
const Language = require("./Page.js").Language;
const html = require("./html.js");
const search = require("./search.js");
const syntax_highlighting = require("./syntax_highlighting/syntax_highlighting.js");



const Kind = Object.freeze({
	FUNCTION           : 0,
	INTRINSIC_FUNCTION : 1,
	STRUCT             : 2,
	METHOD             : 3,
});


const ElemAdded = Object.freeze({
	NONE            : 0,
	DECL            : 1,
	DESCRIPTION     : 2,
	TEMPLATE_PARAMS : 3,
	PARAMS          : 4,
	RETURNS         : 5,
	NOTES           : 6,
	EXAMPLE         : 7,
	SEE_ALSO        : 8,
});

function stringify_elem_added(elem_added){
	switch(elem_added){
		case ElemAdded.NONE:            return "NONE";
		case ElemAdded.DECL:            return "DECL";
		case ElemAdded.DESCRIPTION:     return "DESCRIPTION";
		case ElemAdded.TEMPLATE_PARAMS: return "TEMPLATE_PARAMS";
		case ElemAdded.PARAMS:          return "PARAMS";
		case ElemAdded.RETURNS:         return "RETURNS";
		case ElemAdded.NOTES:           return "NOTES";
		case ElemAdded.EXAMPLE:         return "EXAMPLE";
		case ElemAdded.SEE_ALSO:        return "SEE_ALSO";
	}
}


class TemplateParam{
	name;
	description;

	constructor(name, description){
		this.name = name;
		this.description = description;
	}
}

class Param{
	name;
	description;

	constructor(name, description){
		this.name = name;
		this.description = description;
	}
}

class ReturnParam{
	name;
	description;

	constructor(name, description){
		this.name = name;
		this.description = description;
	}
}



let symbols = new Map();

class SymbolDocumentationPage{
	kind;
	page;

	#elems_added;

	constructor(kind, generator_path, config){
		this.kind = kind;

		config.categories = [search.Category.PANTHER, search.Category.DOCUMENTATION];
		config.description = `Documentation for ${config.title} in the Panther programming language`;
		this.page = new Page(generator_path, config);


		symbols.set(config.title, this);
		switch(kind){
			case Kind.FUNCTION: {

			} break;

			case Kind.INTRINSIC_FUNCTION: {
				syntax_highlighting.addPantherIntrinsicFunc(config.title, this);
			} break;

			case Kind.STRUCT: {

			} break;

			case Kind.METHOD: {

			} break;
		}


		this.elems_added = [ElemAdded.NONE];
	}



	addDecls(decls){
		this.assert(Array.isArray(decls), "decls must be an array");
		this.markAdded(ElemAdded.DECL, ElemAdded.NONE);

		this.page.decl_list(Language.PANTHER, decls);
	}


	addDescription(text){
		this.markAdded(ElemAdded.DESCRIPTION, ElemAdded.DECL);

		this.page.paragraph(text);
	}


	addTemplateParams(params){
		this.assert(Array.isArray(params), "template params must be an array");
		this.markAdded(ElemAdded.TEMPLATE_PARAMS, ElemAdded.DESCRIPTION);

		this.page.h3("Template Parameters");

		for(const param of params){
			this.assert(param instanceof TemplateParam, "template param must be a TemplateParam");
			this.page.paragraph(html.bold(param.name) + ": " + param.description);
		}
	}


	addParams(params){
		this.assert(Array.isArray(params), "template params must be an array");
		this.assert(this.kind == Kind.FUNCTION || this.kind == Kind.INTRINSIC_FUNCTION || this.kind == Kind.METHOD, "can only add parameters to functions and methods");
		this.markAdded(ElemAdded.PARAMS, [ElemAdded.DESCRIPTION, ElemAdded.TEMPLATE_PARAMS]);

		this.page.h3("Parameters");

		for(const param of params){
			this.assert(param instanceof Param, "param must be a Param");
			this.page.paragraph(html.bold(param.name) + ": " + param.description);
		}
	}



	addReturnVoid(){
		this.assert(this.kind == Kind.FUNCTION || this.kind == Kind.INTRINSIC_FUNCTION || this.kind == Kind.METHOD, "can only add returns to functions and methods");
		this.markAdded(ElemAdded.RETURNS, ElemAdded.PARAMS);

		this.page.h3("Return Value");
		this.page.paragraph(`Returns ${this.inlineCode("Void")}.`);
	}

	addReturn(return_desc){
		this.assert(typeof return_desc === "string", "single return description should be a string");
		this.assert(this.kind == Kind.FUNCTION || this.kind == Kind.INTRINSIC_FUNCTION || this.kind == Kind.METHOD, "can only add returns to functions and methods");
		this.markAdded(ElemAdded.RETURNS, ElemAdded.PARAMS);

		this.page.h3("Return Value");
		this.page.paragraph(return_desc);
	}


	addReturnParams(return_params){
		this.assert(Array.isArray(return_params), "multiple returns should be an array");
		this.assert(this.kind == Kind.FUNCTION || this.kind == Kind.INTRINSIC_FUNCTION || this.kind == Kind.METHOD, "can only add returns to functions and methods");
		this.markAdded(ElemAdded.RETURNS, ElemAdded.PARAMS);


		this.page.h3("Return Values");

		for(const ret_param of return_params){
			this.assert(ret_param instanceof ReturnParam, "return param must be a ReturnParam");
			this.page.paragraph(html.bold(ret_param.name) + ": " + ret_param.description);
		}
	}


	addNotes(text){
		this.assert(typeof text === "string", "notes text must be a string");
		this.markAdded(ElemAdded.NOTES, ElemAdded.RETURNS);

		this.page.h2("Notes");
		this.page.paragraph(text);
	}


	addExample(code, output){
		this.assert(typeof code === "string", "example code must be a string");
		this.assert(typeof output === "string", "example output must be a string");
		this.markAdded(ElemAdded.EXAMPLE, [ElemAdded.RETURNS, ElemAdded.NOTES]);

		this.page.h2("Example");
		this.page.code_block(Language.PANTHER, code);
		this.page.code_block(Language.TERMINAL, code);
	}


	addExampleTodo(){
		this.markAdded(ElemAdded.EXAMPLE, [ElemAdded.RETURNS, ElemAdded.NOTES]);

		this.page.h2("Example");
		this.page.text(html.italic("(TODO)"));
	}


	addSeeAlso(list){
		this.assert(Array.isArray(list), "see also list must be an array");
		this.markAdded(ElemAdded.SEE_ALSO, ElemAdded.EXAMPLE);

		this.page.h2("See Also");
		this.symbolList(list);
	}




	inlineCode(code, language){
		language = language ?? Language.PANTHER;
		return this.page.inline_code(language, code);
	}


	symbolList(list, width = null){
		this.assert(Array.isArray(list), "see also list must be an array");

		this.page.raw("<div style=\"overflow-x: auto;\"><table style=\"margin-bottom: 2em;\">\n");

		let width_str = "";
		if(width !== null){
			width_str = ` width: ${width}em;`;
		}

		for(const item of list){
			this.assert(symbols.has(item), `No symbol "${item}" exists`);

			this.page.raw(
`	<tr style="background-color: #151617;">
		<td style="border: 0px; border-bottom: 1px solid #878481; border-top: 1px solid #878481;${width_str}">${this.page.inline_code(Language.PANTHER, item)}</td>
		<td style="border: 0px; border-bottom: 1px solid #878481; border-top: 1px solid #878481; font-style: italic;">${symbols.get(item).page.on_site_description}</td>
	</tr>`
			);
		}

		this.page.raw("</table></div>\n");
	}




	generate(){
		this.assert(this.elems_added.includes(ElemAdded.SEE_ALSO), "must include SEE_ALSO");

		this.page.generate();
	}



	//////////////////////////////////////////////////////////////////////
	// internal

	markAdded(new_elem_added, required_previous){
		const last_added = this.elems_added[this.elems_added.length - 1];

		if(Array.isArray(required_previous)){
			let found = false;
			for(const prev of required_previous){
				if(prev == last_added){
					found = true;
					break;
				}
			}



			if(found == false){
				let required_previous_str = "[";
				let i = 0;
				for(const prev of required_previous){
					required_previous_str += stringify_elem_added(prev);

					if(i + 1 < required_previous.length){
						required_previous_str += ", ";
					}

					i += 1;
				}
				required_previous_str += ']';

				this.assert(false, `When adding ${stringify_elem_added(new_elem_added)}, last elem added must be ${required_previous_str} (currently ${stringify_elem_added(last_added)})`);
			}



		}else{
			this.assert(last_added == required_previous, `When adding ${stringify_elem_added(new_elem_added)}, last elem added must be ${stringify_elem_added(required_previous)} (currently ${stringify_elem_added(last_added)})`);
		}
		

		this.elems_added.push(new_elem_added);
	}

	assert(cond, message){
		if(cond == false){
			console.error(`\x1b[31mAssert failed in \"${this.page.path}\"`);
			console.error("\t" + message + "\x1b[0m");

			process.exit();
		}
	}
}


exports.SymbolDocumentationPage = SymbolDocumentationPage;
exports.Kind = Kind;
exports.TemplateParam = TemplateParam;
exports.Param = Param;
exports.ReturnParam = ReturnParam;