//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////


class SearchTarget{
	title;
	path;
	description;
	search_terms;
	categories;

	constructor(title, path, description, search_terms, categories){
		this.title = title;
		this.path = path;
		this.description = description;
		this.search_terms = search_terms;
		this.categories = categories;
	}
}


function is_on_desktop(){
	if(("ontouchstart" in window) == false){ return true; } // if doesn't have a touchscreen
	return window.width > 1023;
}

if(is_on_desktop()){
	document.getElementById("search_box").focus();
}


function on_search_input(){
	const search_box = document.getElementById("search_box");
	const results_div = document.getElementById("results");

	results_div.innerHTML = "";

	if(search_box.value.length == 0){ return; }

	const words = search_box.value.toLowerCase().split(" ");

	let search_terms = [];
	words.forEach((word, i) => {
		if(word == ""){ return; } // remove extranous spaces
		if(search_terms.includes(word)){ return; } // prevent duplication
		search_terms.push(word);
	});

	search_terms.sort((lhs, rhs) => {
		return rhs.length - lhs.length;
	});


	class SelectedSearchTarget{
		search_target;
		match_percentage;
	
		constructor(search_target, match_percentage){
			this.search_target = search_target;
			this.match_percentage = match_percentage;
		}
	}

	let search_targets_selected = [];
	search_targets.forEach((search_target) => {
		let search_target_search_terms = search_target.search_terms.slice(); // copies array

		let terms_found = 0;
		let terms_found_match_percentage = 0;
		search_terms.forEach((search_term) => {
			let best_match_index = null;
			let best_match_score = 0;
			let found_match = false;

			for(let i = 0; i < search_target_search_terms.length; i += 1){
				if(search_target_search_terms[i].includes(search_term)){
					found_match = true;
					match_score = search_term.length / search_target_search_terms[i].length;
					if(match_score > best_match_score){
						best_match_index = i;
						best_match_score = match_score;
					}
				}
			}

			if(found_match == false){ return; }

			terms_found += 1;
			terms_found_match_percentage += best_match_score;
			search_target_search_terms.splice(best_match_index, 1); // TODO: faster way of removing element
		});


		const words_match_percentage = terms_found / search_terms.length;
		if(words_match_percentage > 0.5){
			search_targets_selected.push(new SelectedSearchTarget(search_target, terms_found_match_percentage / search_target.search_terms.length));
		}
	});


	search_targets_selected.sort((lhs, rhs) => {
		const match_diff = rhs.match_percentage - lhs.match_percentage;
		if(match_diff != 0){ return match_diff; }
		return lhs.title - rhs.title;
	});



	let results_div_body_str = "";

	if(search_targets_selected.length == 1){
		results_div_body_str += `<p style="padding-bottom: 1em;">1 result found</p>`;
	}else{
		results_div_body_str += `<p style="padding-bottom: 1em;">${search_targets_selected.length} results found</p>`;
	}


	search_targets_selected.forEach((selected_search_target) => {
		results_div_body_str += `<div class="search-result-box">
			<a class="search-match-title" href="${selected_search_target.search_target.path}">${selected_search_target.search_target.title}</a>`;

		results_div_body_str += `<p>${selected_search_target.search_target.description}</p>`;


		results_div_body_str += "<div style=\"margin-top: 0.5em;\">";
		selected_search_target.search_target.categories.forEach((category) => {
			switch(category){
				case 0: results_div_body_str += "<div class=\"search-category\" style=\"color: #06b6d4; background-color: #0c2f39; border-color: #0b4652;\">Panther</div>"; break;
				case 1: results_div_body_str += "<div class=\"search-category\" style=\"color: #06a6c4; background-color: #0c2c36; border-color: #0a5b6a;\">Panther STD</div>"; break;
				case 2: results_div_body_str += "<div class=\"search-category\" style=\"color: #15d273; background-color: #0e2a23; border-color: #105c3b;\">PIR</div>"; break;
				case 3: results_div_body_str += "<div class=\"search-category\" style=\"color: #1fc493; background-color: #102c2c; border-color: #145a4f;\">PLNK</div>"; break;
				case 4: results_div_body_str += "<div class=\"search-category\" style=\"color: #f27532; background-color: #291a15; border-color: #663925;\">Documentation</div>"; break;
				case 5: results_div_body_str += "<div class=\"search-category\" style=\"color: #d97ee5; background-color: #32233c; border-color: #643e6f;\">Tutorial</div>"; break;
				case 6: results_div_body_str += "<div class=\"search-category\" style=\"color: #bbbbbb; background-color: #2d3035; border-color: #575a5d;\">Devlog</div>"; break;
				case 7: results_div_body_str += "<div class=\"search-category\" style=\"color: #fed0a5; background-color: #393431; border-color: #756354;\">Download/Build</div>"; break;
			}
		});

		results_div_body_str += `<div class="search-match-percentage">${Math.floor(selected_search_target.match_percentage * 100)}% match</div>`;
		results_div_body_str += "</div>";

		results_div_body_str += `</div>`;
	});


	results_div.innerHTML = results_div_body_str;
}


const search_targets = [
	new SearchTarget("Panther Programming Language", "/site/Panther.html", "Home page of the Panther programming language", ["panther","programming","language"], [0]),
	new SearchTarget("Downloads", "/site/downloads.html", "Download the PCIT Project software", ["downloads"], [7]),
	new SearchTarget("Building PCIT Project Software", "/site/build.html", "How to build the PCIT Project software", ["building","pcit","project","software"], [7]),
	new SearchTarget("Building LLVM", "build.html#llvm", "", ["building","llvm"], [7]),
	new SearchTarget("Documentation", "/site/documentation/documentation.html", "Documentation for the PCIT Project tools", ["documentation"], [4]),
	new SearchTarget("Panther Documentation", "/site/documentation/panther/documentation.html", "Documentation for the Panther programming language", ["panther","documentation"], [0,4]),
	new SearchTarget("Character Escape Codes", "/site/documentation/panther/character_escape_codes.html", "Documentation for literals in the Panther programming language", ["character","escape","codes"], [0,4]),
	new SearchTarget("Fluid Values", "/site/documentation/panther/fluid_values.html", "Documentation for fluid values in the Panther programming language", ["fluid","values"], [0,4]),
	new SearchTarget("Intrinsics", "/site/documentation/panther/intrinsics/intrinsics.html", "Documentation for intrinsics in the Panther programming language", ["intrinsics"], [0,4]),
	new SearchTarget("Arithmetic Intrinsics", "/site/documentation/panther/intrinsics/arithmetic_intrinsics.html", "Documentation for arithmetic intrinsics in the Panther programming language", ["arithmetic","intrinsics"], [0,4]),
	new SearchTarget("@add", "documentation/panther/intrinsics/arithmetic_intrinsics.html#add", "", ["@add"], [0,4]),
	new SearchTarget("@addWrap", "documentation/panther/intrinsics/arithmetic_intrinsics.html#addWrap", "", ["@addwrap"], [0,4]),
	new SearchTarget("@addSat", "documentation/panther/intrinsics/arithmetic_intrinsics.html#addSat", "", ["@addsat"], [0,4]),
	new SearchTarget("@fadd", "documentation/panther/intrinsics/arithmetic_intrinsics.html#fadd", "", ["@fadd"], [0,4]),
	new SearchTarget("@sub", "documentation/panther/intrinsics/arithmetic_intrinsics.html#sub", "", ["@sub"], [0,4]),
	new SearchTarget("@subWrap", "documentation/panther/intrinsics/arithmetic_intrinsics.html#subWrap", "", ["@subwrap"], [0,4]),
	new SearchTarget("@subSat", "documentation/panther/intrinsics/arithmetic_intrinsics.html#subSat", "", ["@subsat"], [0,4]),
	new SearchTarget("@fsub", "documentation/panther/intrinsics/arithmetic_intrinsics.html#fsub", "", ["@fsub"], [0,4]),
	new SearchTarget("@mul", "documentation/panther/intrinsics/arithmetic_intrinsics.html#mul", "", ["@mul"], [0,4]),
	new SearchTarget("@mulWrap", "documentation/panther/intrinsics/arithmetic_intrinsics.html#mulWrap", "", ["@mulwrap"], [0,4]),
	new SearchTarget("@mulSat", "documentation/panther/intrinsics/arithmetic_intrinsics.html#mulSat", "", ["@mulsat"], [0,4]),
	new SearchTarget("@fmul", "documentation/panther/intrinsics/arithmetic_intrinsics.html#fmul", "", ["@fmul"], [0,4]),
	new SearchTarget("@div", "documentation/panther/intrinsics/arithmetic_intrinsics.html#div", "", ["@div"], [0,4]),
	new SearchTarget("@fdiv", "documentation/panther/intrinsics/arithmetic_intrinsics.html#fdiv", "", ["@fdiv"], [0,4]),
	new SearchTarget("@rem", "documentation/panther/intrinsics/arithmetic_intrinsics.html#rem", "", ["@rem"], [0,4]),
	new SearchTarget("@fneg", "documentation/panther/intrinsics/arithmetic_intrinsics.html#fneg", "", ["@fneg"], [0,4]),
	new SearchTarget("Bitwise Intrinsics", "/site/documentation/panther/intrinsics/bitwise_intrinsics.html", "Documentation for bitwise intrinsics in the Panther programming language", ["bitwise","intrinsics"], [0,4]),
	new SearchTarget("@and", "documentation/panther/intrinsics/bitwise_intrinsics.html#and", "", ["@and"], [0,4]),
	new SearchTarget("@or", "documentation/panther/intrinsics/bitwise_intrinsics.html#or", "", ["@or"], [0,4]),
	new SearchTarget("@xor", "documentation/panther/intrinsics/bitwise_intrinsics.html#xor", "", ["@xor"], [0,4]),
	new SearchTarget("@shl", "documentation/panther/intrinsics/bitwise_intrinsics.html#shl", "", ["@shl"], [0,4]),
	new SearchTarget("@shlSat", "documentation/panther/intrinsics/bitwise_intrinsics.html#shlSat", "", ["@shlsat"], [0,4]),
	new SearchTarget("@shr", "documentation/panther/intrinsics/bitwise_intrinsics.html#shr", "", ["@shr"], [0,4]),
	new SearchTarget("@bitReverse", "documentation/panther/intrinsics/bitwise_intrinsics.html#bitReverse", "", ["@bitreverse"], [0,4]),
	new SearchTarget("@bSwap", "documentation/panther/intrinsics/bitwise_intrinsics.html#bSwap", "", ["@bswap"], [0,4]),
	new SearchTarget("@ctPop", "documentation/panther/intrinsics/bitwise_intrinsics.html#ctPop", "", ["@ctpop"], [0,4]),
	new SearchTarget("@ctlz", "documentation/panther/intrinsics/bitwise_intrinsics.html#ctlz", "", ["@ctlz"], [0,4]),
	new SearchTarget("@cttz", "documentation/panther/intrinsics/bitwise_intrinsics.html#cttz", "", ["@cttz"], [0,4]),
	new SearchTarget("Comparative Intrinsics", "/site/documentation/panther/intrinsics/comparative_intrinsics.html", "Documentation for comparative intrinsics in the Panther programming language", ["comparative","intrinsics"], [0,4]),
	new SearchTarget("@eq", "documentation/panther/intrinsics/comparative_intrinsics.html#eq", "", ["@eq"], [0,4]),
	new SearchTarget("@neq", "documentation/panther/intrinsics/comparative_intrinsics.html#neq", "", ["@neq"], [0,4]),
	new SearchTarget("@lt", "documentation/panther/intrinsics/comparative_intrinsics.html#lt", "", ["@lt"], [0,4]),
	new SearchTarget("@lte", "documentation/panther/intrinsics/comparative_intrinsics.html#lte", "", ["@lte"], [0,4]),
	new SearchTarget("@gt", "documentation/panther/intrinsics/comparative_intrinsics.html#gt", "", ["@gt"], [0,4]),
	new SearchTarget("@gte", "documentation/panther/intrinsics/comparative_intrinsics.html#gte", "", ["@gte"], [0,4]),
	new SearchTarget("Operational Intrinsics", "/site/documentation/panther/intrinsics/operational_intrinsics.html", "Documentation for operational intrinsics in the Panther programming language", ["operational","intrinsics"], [0,4]),
	new SearchTarget("@abort", "documentation/panther/intrinsics/operational_intrinsics.html#abort", "", ["@abort"], [0,4]),
	new SearchTarget("@breakpoint", "documentation/panther/intrinsics/operational_intrinsics.html#breakpoint", "", ["@breakpoint"], [0,4]),
	new SearchTarget("@import", "documentation/panther/intrinsics/operational_intrinsics.html#import", "", ["@import"], [0,4]),
	new SearchTarget("Type Conversion Intrinsics", "/site/documentation/panther/intrinsics/type_conversion_intrinsics.html", "Documentation for type conversion intrinsics in the Panther programming language", ["type","conversion","intrinsics"], [0,4]),
	new SearchTarget("@bitCast", "documentation/panther/intrinsics/type_conversion_intrinsics.html#bitCast", "", ["@bitcast"], [0,4]),
	new SearchTarget("@trunc", "documentation/panther/intrinsics/type_conversion_intrinsics.html#trunc", "", ["@trunc"], [0,4]),
	new SearchTarget("@ftrunc", "documentation/panther/intrinsics/type_conversion_intrinsics.html#ftrunc", "", ["@ftrunc"], [0,4]),
	new SearchTarget("@sext", "documentation/panther/intrinsics/type_conversion_intrinsics.html#sext", "", ["@sext"], [0,4]),
	new SearchTarget("@zext", "documentation/panther/intrinsics/type_conversion_intrinsics.html#zext", "", ["@zext"], [0,4]),
	new SearchTarget("@fext", "documentation/panther/intrinsics/type_conversion_intrinsics.html#fext", "", ["@fext"], [0,4]),
	new SearchTarget("@iToF", "documentation/panther/intrinsics/type_conversion_intrinsics.html#iToF", "", ["@itof"], [0,4]),
	new SearchTarget("@fToI", "documentation/panther/intrinsics/type_conversion_intrinsics.html#fToI", "", ["@ftoi"], [0,4]),
	new SearchTarget("Type Traits", "/site/documentation/panther/intrinsics/type_traits_intrinsics.html", "Documentation for type traits intrinsics in the Panther programming language", ["type","traits"], [0,4]),
	new SearchTarget("@getTypeID", "documentation/panther/intrinsics/type_traits_intrinsics.html#getTypeID", "", ["@gettypeid"], [0,4]),
	new SearchTarget("@arrayElementTypeID", "documentation/panther/intrinsics/type_traits_intrinsics.html#arrayElementTypeID", "", ["@arrayelementtypeid"], [0,4]),
	new SearchTarget("@arrayRefElementTypeID", "documentation/panther/intrinsics/type_traits_intrinsics.html#arrayRefElementTypeID", "", ["@arrayrefelementtypeid"], [0,4]),
	new SearchTarget("@numBytes", "documentation/panther/intrinsics/type_traits_intrinsics.html#numBytes", "", ["@numbytes"], [0,4]),
	new SearchTarget("@numBits", "documentation/panther/intrinsics/type_traits_intrinsics.html#numBits", "", ["@numbits"], [0,4]),
	new SearchTarget("Functions", "/site/documentation/panther/functions.html", "Documentation for functions in the Panther programming language", ["functions"], [0,4]),
	new SearchTarget("Function Parameters", "documentation/panther/functions.html#parameters", "", ["function","parameters"], [0,4]),
	new SearchTarget("Read Parameter Qualifier", "documentation/panther/functions.html#read", "", ["read","parameter","qualifier"], [0,4]),
	new SearchTarget("Mut Parameter Qualifier", "documentation/panther/functions.html#mut", "", ["mut","parameter","qualifier"], [0,4]),
	new SearchTarget("In Parameter Qualifier", "documentation/panther/functions.html#in", "", ["in","parameter","qualifier"], [0,4]),
	new SearchTarget("Explicit Function Return/Error Parameters", "documentation/panther/functions.html#returns", "", ["explicit","function","return/error","parameters"], [0,4]),
	new SearchTarget("Erroring Functions", "documentation/panther/functions.html#error", "", ["erroring","functions"], [0,4]),
	new SearchTarget("Function Templates", "documentation/panther/functions.html#templates", "", ["function","templates"], [0,4]),
	new SearchTarget("Operator Overloading", "documentation/panther/functions.html#operator_overloading", "", ["operator","overloading"], [0,4]),
	new SearchTarget("Interfaces", "/site/documentation/panther/interfaces.html", "Documentation for interfaces in the Panther programming language", ["interfaces"], [0,4]),
	new SearchTarget("Literals", "/site/documentation/panther/literals.html", "Documentation for literals in the Panther programming language", ["literals"], [0,4]),
	new SearchTarget("Integer Literals", "documentation/panther/literals.html#integer-literals", "", ["integer","literals"], [0,4]),
	new SearchTarget("Float Literals", "documentation/panther/literals.html#float-literals", "", ["float","literals"], [0,4]),
	new SearchTarget("Boolean Literals", "documentation/panther/literals.html#boolean-literals", "", ["boolean","literals"], [0,4]),
	new SearchTarget("Character Literals", "documentation/panther/literals.html#character-literals", "", ["character","literals"], [0,4]),
	new SearchTarget("String Literals", "documentation/panther/literals.html#string-literals", "", ["string","literals"], [0,4]),
	new SearchTarget("Modules", "/site/documentation/panther/modules.html", "Documentation for modules in the Panther programming language", ["modules"], [0,4]),
	new SearchTarget("Operators", "/site/documentation/panther/operators.html", "Documentation for operators in the Panther programming language", ["operators"], [0,4]),
	new SearchTarget("Arithmetic Operators", "documentation/panther/operators.html#arithmetic", "", ["arithmetic","operators"], [0,4]),
	new SearchTarget("Operator Addition", "documentation/panther/operators.html#addition", "", ["operator","addition"], [0,4]),
	new SearchTarget("Operator +", "documentation/panther/operators.html#addition", "", ["operator","+"], [0,4]),
	new SearchTarget("Operator Wrapping Addition", "documentation/panther/operators.html#wrapping_addition", "", ["operator","wrapping","addition"], [0,4]),
	new SearchTarget("Operator +%", "documentation/panther/operators.html#wrapping_addition", "", ["operator","+%"], [0,4]),
	new SearchTarget("Operator Saturating Addition", "documentation/panther/operators.html#saturating_addition", "", ["operator","saturating","addition"], [0,4]),
	new SearchTarget("Operator +|", "documentation/panther/operators.html#saturating_addition", "", ["operator","+|"], [0,4]),
	new SearchTarget("Operator Subtraction", "documentation/panther/operators.html#subtraction", "", ["operator","subtraction"], [0,4]),
	new SearchTarget("Operator - (infix)", "documentation/panther/operators.html#subtraction", "", ["operator","-","(infix)"], [0,4]),
	new SearchTarget("Operator Wrapping Subtraction", "documentation/panther/operators.html#wrapping_subtraction", "", ["operator","wrapping","subtraction"], [0,4]),
	new SearchTarget("Operator -%", "documentation/panther/operators.html#wrapping_subtraction", "", ["operator","-%"], [0,4]),
	new SearchTarget("Operator Saturating Subtraction", "documentation/panther/operators.html#saturating_subtraction", "", ["operator","saturating","subtraction"], [0,4]),
	new SearchTarget("Operator -|", "documentation/panther/operators.html#saturating_subtraction", "", ["operator","-|"], [0,4]),
	new SearchTarget("Operator Multiplication", "documentation/panther/operators.html#multiplication", "", ["operator","multiplication"], [0,4]),
	new SearchTarget("Operator *", "documentation/panther/operators.html#multiplication", "", ["operator","*"], [0,4]),
	new SearchTarget("Operator Wrapping Multiplication", "documentation/panther/operators.html#wrapping_multiplication", "", ["operator","wrapping","multiplication"], [0,4]),
	new SearchTarget("Operator *%", "documentation/panther/operators.html#wrapping_multiplication", "", ["operator","*%"], [0,4]),
	new SearchTarget("Operator Saturating Multiplication", "documentation/panther/operators.html#saturating_multiplication", "", ["operator","saturating","multiplication"], [0,4]),
	new SearchTarget("Operator *|", "documentation/panther/operators.html#saturating_multiplication", "", ["operator","*|"], [0,4]),
	new SearchTarget("Operator Division", "documentation/panther/operators.html#division", "", ["operator","division"], [0,4]),
	new SearchTarget("Operator /", "documentation/panther/operators.html#division", "", ["operator","/"], [0,4]),
	new SearchTarget("Operator Division Remainder", "documentation/panther/operators.html#division_remainder", "", ["operator","division","remainder"], [0,4]),
	new SearchTarget("Operator %", "documentation/panther/operators.html#division_remainder", "", ["operator","%"], [0,4]),
	new SearchTarget("Operator Negate", "documentation/panther/operators.html#negate", "", ["operator","negate"], [0,4]),
	new SearchTarget("Operator - (prefix)", "documentation/panther/operators.html#negate", "", ["operator","-","(prefix)"], [0,4]),
	new SearchTarget("Comparative Operators", "documentation/panther/operators.html#comparative", "", ["comparative","operators"], [0,4]),
	new SearchTarget("Operator Equal To", "documentation/panther/operators.html#eq", "", ["operator","equal","to"], [0,4]),
	new SearchTarget("Operator ==", "documentation/panther/operators.html#eq", "", ["operator","=="], [0,4]),
	new SearchTarget("Operator Not Equal To", "documentation/panther/operators.html#neq", "", ["operator","not","equal","to"], [0,4]),
	new SearchTarget("Operator !=", "documentation/panther/operators.html#neq", "", ["operator","!="], [0,4]),
	new SearchTarget("Operator Less Than", "documentation/panther/operators.html#lt", "", ["operator","less","than"], [0,4]),
	new SearchTarget("Operator <", "documentation/panther/operators.html#lt", "", ["operator","<"], [0,4]),
	new SearchTarget("Operator Less Than or Equal To", "documentation/panther/operators.html#lte", "", ["operator","less","than","or","equal","to"], [0,4]),
	new SearchTarget("Operator <=", "documentation/panther/operators.html#lte", "", ["operator","<="], [0,4]),
	new SearchTarget("Operator Greater Than", "documentation/panther/operators.html#gt", "", ["operator","greater","than"], [0,4]),
	new SearchTarget("Operator >", "documentation/panther/operators.html#gt", "", ["operator",">"], [0,4]),
	new SearchTarget("Operator Greater Than or Equal To", "documentation/panther/operators.html#gte", "", ["operator","greater","than","or","equal","to"], [0,4]),
	new SearchTarget("Operator >=", "documentation/panther/operators.html#gte", "", ["operator",">="], [0,4]),
	new SearchTarget("Bitwise Operators", "documentation/panther/operators.html#bitwise", "", ["bitwise","operators"], [0,4]),
	new SearchTarget("Operator Bitwise And", "documentation/panther/operators.html#bitwise_and", "", ["operator","bitwise","and"], [0,4]),
	new SearchTarget("Operator & (infix)", "documentation/panther/operators.html#bitwise_and", "", ["operator","&","(infix)"], [0,4]),
	new SearchTarget("Operator Bitwise Or", "documentation/panther/operators.html#bitwise_or", "", ["operator","bitwise","or"], [0,4]),
	new SearchTarget("Operator |", "documentation/panther/operators.html#bitwise_or", "", ["operator","|"], [0,4]),
	new SearchTarget("Operator Bitwise Xor", "documentation/panther/operators.html#bitwise_xor", "", ["operator","bitwise","xor"], [0,4]),
	new SearchTarget("Operator ^", "documentation/panther/operators.html#bitwise_xor", "", ["operator","^"], [0,4]),
	new SearchTarget("Operator Bit Shift Left", "documentation/panther/operators.html#bit_shift_left", "", ["operator","bit","shift","left"], [0,4]),
	new SearchTarget("Operator <<", "documentation/panther/operators.html#bit_shift_left", "", ["operator","<<"], [0,4]),
	new SearchTarget("Operator Saturating Bit Shift Left", "documentation/panther/operators.html#saturating_bit_shift_left", "", ["operator","saturating","bit","shift","left"], [0,4]),
	new SearchTarget("Operator <<|", "documentation/panther/operators.html#saturating_bit_shift_left", "", ["operator","<<|"], [0,4]),
	new SearchTarget("Operator Bit Shift Right", "documentation/panther/operators.html#bit_shift_right", "", ["operator","bit","shift","right"], [0,4]),
	new SearchTarget("Operator >>", "documentation/panther/operators.html#bit_shift_right", "", ["operator",">>"], [0,4]),
	new SearchTarget("Operator Bitwise Not", "documentation/panther/operators.html#bitwise_not", "", ["operator","bitwise","not"], [0,4]),
	new SearchTarget("Operator ~", "documentation/panther/operators.html#bitwise_not", "", ["operator","~"], [0,4]),
	new SearchTarget("Pointer/Optional Operators", "documentation/panther/operators.html#pointer_optional", "", ["pointer/optional","operators"], [0,4]),
	new SearchTarget("Operator Address Of", "documentation/panther/operators.html#address_of", "", ["operator","address","of"], [0,4]),
	new SearchTarget("Operator & (prefix)", "documentation/panther/operators.html#address_of", "", ["operator","&","(prefix)"], [0,4]),
	new SearchTarget("Operator Read-Only Address Of", "documentation/panther/operators.html#read_only_address_of", "", ["operator","read-only","address","of"], [0,4]),
	new SearchTarget("Operator &|", "documentation/panther/operators.html#read_only_address_of", "", ["operator","&|"], [0,4]),
	new SearchTarget("Operator Dereference", "documentation/panther/operators.html#dereference", "", ["operator","dereference"], [0,4]),
	new SearchTarget("Operator .*", "documentation/panther/operators.html#dereference", "", ["operator",".*"], [0,4]),
	new SearchTarget("Operator Unwrap", "documentation/panther/operators.html#unwrap", "", ["operator","unwrap"], [0,4]),
	new SearchTarget("Operator .?", "documentation/panther/operators.html#unwrap", "", ["operator",".?"], [0,4]),
	new SearchTarget("Boolean", "documentation/panther/operators.html#boolean", "", ["boolean"], [0,4]),
	new SearchTarget("Operator Logical And", "documentation/panther/operators.html#logical_and", "", ["operator","logical","and"], [0,4]),
	new SearchTarget("Operator &&", "documentation/panther/operators.html#logical_and", "", ["operator","&&"], [0,4]),
	new SearchTarget("Operator Logical Or", "documentation/panther/operators.html#logical_or", "", ["operator","logical","or"], [0,4]),
	new SearchTarget("Operator ||", "documentation/panther/operators.html#logical_or", "", ["operator","||"], [0,4]),
	new SearchTarget("Operator Boolean Not", "documentation/panther/operators.html#boolean_not", "", ["operator","boolean","not"], [0,4]),
	new SearchTarget("Operator !", "documentation/panther/operators.html#boolean_not", "", ["operator","!"], [0,4]),
	new SearchTarget("Object Operators", "documentation/panther/operators.html#type", "", ["object","operators"], [0,4]),
	new SearchTarget("Type Conversion Operator", "documentation/panther/operators.html#type", "", ["type","conversion","operator"], [0,4]),
	new SearchTarget("Accessor Operator", "documentation/panther/operators.html#type", "", ["accessor","operator"], [0,4]),
	new SearchTarget("Composite Assignment Operators", "documentation/panther/operators.html#type", "", ["composite","assignment","operators"], [0,4]),
	new SearchTarget("Operator Precedence", "documentation/panther/operators.html#precedence", "", ["operator","precedence"], [0,4]),
	new SearchTarget("Primitive Types", "/site/documentation/panther/primitive_types.html", "Documentation for Primitive Types in the Panther programming language", ["primitive","types"], [0,4]),
	new SearchTarget("Primitive Integral Types", "documentation/panther/primitive_types.html#integral", "", ["primitive","integral","types"], [0,4]),
	new SearchTarget("Specified Width Integral Types", "documentation/panther/primitive_types.html#width_integral", "", ["specified","width","integral","types"], [0,4]),
	new SearchTarget("Target-Dependent Integral Types", "documentation/panther/primitive_types.html#target_integral", "", ["target-dependent","integral","types"], [0,4]),
	new SearchTarget("Int", "documentation/panther/primitive_types.html#target_integral", "", ["int"], [0,4]),
	new SearchTarget("UInt", "documentation/panther/primitive_types.html#target_integral", "", ["uint"], [0,4]),
	new SearchTarget("ISize", "documentation/panther/primitive_types.html#target_integral", "", ["isize"], [0,4]),
	new SearchTarget("USize", "documentation/panther/primitive_types.html#target_integral", "", ["usize"], [0,4]),
	new SearchTarget("Integral Types for C/C++ Compatibility", "documentation/panther/primitive_types.html#c_integral", "", ["integral","types","for","c/c++","compatibility"], [0,4]),
	new SearchTarget("CWChar", "documentation/panther/primitive_types.html#c_integral", "", ["cwchar"], [0,4]),
	new SearchTarget("CShort", "documentation/panther/primitive_types.html#c_integral", "", ["cshort"], [0,4]),
	new SearchTarget("CUShort", "documentation/panther/primitive_types.html#c_integral", "", ["cushort"], [0,4]),
	new SearchTarget("CInt", "documentation/panther/primitive_types.html#c_integral", "", ["cint"], [0,4]),
	new SearchTarget("CUInt", "documentation/panther/primitive_types.html#c_integral", "", ["cuint"], [0,4]),
	new SearchTarget("CLong", "documentation/panther/primitive_types.html#c_integral", "", ["clong"], [0,4]),
	new SearchTarget("CULong", "documentation/panther/primitive_types.html#c_integral", "", ["culong"], [0,4]),
	new SearchTarget("CLongLong", "documentation/panther/primitive_types.html#c_integral", "", ["clonglong"], [0,4]),
	new SearchTarget("CULongLong", "documentation/panther/primitive_types.html#c_integral", "", ["culonglong"], [0,4]),
	new SearchTarget("Primitive Floating Point Types", "documentation/panther/primitive_types.html#float", "", ["primitive","floating","point","types"], [0,4]),
	new SearchTarget("F16", "documentation/panther/primitive_types.html#float", "", ["f16"], [0,4]),
	new SearchTarget("BF16", "documentation/panther/primitive_types.html#float", "", ["bf16"], [0,4]),
	new SearchTarget("F32", "documentation/panther/primitive_types.html#float", "", ["f32"], [0,4]),
	new SearchTarget("F64", "documentation/panther/primitive_types.html#float", "", ["f64"], [0,4]),
	new SearchTarget("F80", "documentation/panther/primitive_types.html#float", "", ["f80"], [0,4]),
	new SearchTarget("F128", "documentation/panther/primitive_types.html#float", "", ["f128"], [0,4]),
	new SearchTarget("CLongDouble", "documentation/panther/primitive_types.html#float", "", ["clongdouble"], [0,4]),
	new SearchTarget("Miscellaneous Primitive Types", "documentation/panther/primitive_types.html#misc", "", ["miscellaneous","primitive","types"], [0,4]),
	new SearchTarget("Void", "documentation/panther/primitive_types.html#misc", "", ["void"], [0,4]),
	new SearchTarget("Byte", "documentation/panther/primitive_types.html#misc", "", ["byte"], [0,4]),
	new SearchTarget("Bool", "documentation/panther/primitive_types.html#misc", "", ["bool"], [0,4]),
	new SearchTarget("Char", "documentation/panther/primitive_types.html#misc", "", ["char"], [0,4]),
	new SearchTarget("RawPtr", "documentation/panther/primitive_types.html#misc", "", ["rawptr"], [0,4]),
	new SearchTarget("TypeID", "documentation/panther/primitive_types.html#misc", "", ["typeid"], [0,4]),
	new SearchTarget("Structs", "/site/documentation/panther/structs.html", "Documentation for structs in the Panther programming language", ["structs"], [0,4]),
	new SearchTarget("Undefined Behavior", "/site/documentation/panther/undefined_behavior.html", "Documentation for Undefined Behavior in the Panther programming language", ["undefined","behavior"], [0,4]),
	new SearchTarget("Uninitialized", "/site/documentation/panther/uninitialized.html", "Documentation for \"uninitialized\" in the Panther programming language", ["uninitialized"], [0,4]),
	new SearchTarget("Value Categories", "/site/documentation/panther/value_categories.html", "Documentation for value categories in the Panther programming language", ["value","categories"], [0,4]),
	new SearchTarget("Ephemeral Value Category", "documentation/panther/value_categories.html#ephemeral", "", ["ephemeral","value","category"], [0,4]),
	new SearchTarget("Concrete Value Category", "documentation/panther/value_categories.html#concrete", "", ["concrete","value","category"], [0,4]),
	new SearchTarget("Concrete-Mutable Value Category", "documentation/panther/value_categories.html#concrete_mutable", "", ["concrete-mutable","value","category"], [0,4]),
	new SearchTarget("Forwardable Value Category", "documentation/panther/value_categories.html#forwardable", "", ["forwardable","value","category"], [0,4]),
	new SearchTarget("Concrete-Const Value Category", "documentation/panther/value_categories.html#concrete_const", "", ["concrete-const","value","category"], [0,4]),
	new SearchTarget("Value Stages", "/site/documentation/panther/value_stages.html", "Documentation for value stages in the Panther programming language", ["value","stages"], [0,4]),
	new SearchTarget("Constexpr Value Stage", "documentation/panther/value_stages.html#constexpr", "", ["constexpr","value","stage"], [0,4]),
	new SearchTarget("Comptime Value Stage", "documentation/panther/value_stages.html#comptime", "", ["comptime","value","stage"], [0,4]),
	new SearchTarget("Runtime Value Stage", "documentation/panther/value_stages.html#runtime", "", ["runtime","value","stage"], [0,4]),
	new SearchTarget("Variables", "/site/documentation/panther/variables.html", "Documentation for variables in the Panther programming language", ["variables"], [0,4]),
	new SearchTarget("Var Variables", "documentation/panther/variables.html#var_variables", "", ["var","variables"], [0,4]),
	new SearchTarget("Const Variables", "documentation/panther/variables.html#const_variables", "", ["const","variables"], [0,4]),
	new SearchTarget("Def Variables", "documentation/panther/variables.html#def_variables", "", ["def","variables"], [0,4]),
	new SearchTarget("Variable Attributes", "documentation/panther/variables.html#variable_attributes", "", ["variable","attributes"], [0,4]),
	new SearchTarget("When Conditionals", "/site/documentation/panther/when_conditionals.html", "Documentation for when conditionals in the Panther programming language", ["when","conditionals"], [0,4]),
	new SearchTarget("Panther STD Documentation", "/site/documentation/panther_std/documentation.html", "Documentation for the Panther programming language standard library", ["panther","std","documentation"], [1,4]),
	new SearchTarget("PIR Documentation", "/site/documentation/pir/documentation.html", "Documentation for PIR (Panther Intermediate Representation)", ["pir","documentation"], [2,4]),
	new SearchTarget("Tutorials", "/site/tutorials/tutorials.html", "Learn about and how to use the various parts of the PCIT Project", ["tutorials"], [5]),
	new SearchTarget("Panther Tutorial", "/site/tutorials/panther/tutorial.html", "Tutorial for the Panther programming language", ["panther","tutorial"], [0,5]),
	new SearchTarget("Panther Library Tutorial", "/site/tutorials/pantherlib/tutorial.html", "Tutorial for the Panther programming language library", ["panther","library","tutorial"], [1,5]),
	new SearchTarget("PIR Tutorial", "/site/tutorials/pir/tutorial.html", "Tutorial for PIR (Panther Intermediate Representation)", ["pir","tutorial"], [2,5]),
	new SearchTarget("PLNK Tutorial", "/site/tutorials/plnk/tutorial.html", "Tutorial for PLNK (PCIT Linker)", ["plnk","tutorial"], [3,5]),
	new SearchTarget("Devlogs", "/site/devlogs/devlogs.html", "Catalog of PCIT Project devlogs", ["devlogs"], [6]),
	new SearchTarget("New Systems Requires Major Changes", "/site/devlogs/new_systems_requires_major_changes.html", "Adding position independent declaration and the build system to the Panther compiler", ["new","systems","requires","major","changes"], [0,6]),
	new SearchTarget("Dependencies V2", "/site/devlogs/dependencies_v2.html", "New and improved dependency system for the Panther compiler", ["dependencies","v2"], [0,6]),
];
