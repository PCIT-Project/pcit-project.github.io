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
	search_terms;
	categories;

	constructor(title, path, search_terms, categories){
		this.title = title;
		this.path = path;
		this.search_terms = search_terms;
		this.categories = categories;
	}
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
			if(search_target_search_terms.length == 0){ return; }

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
			}
		});

		results_div_body_str += `<div class="search-match-percentage">${Math.floor(selected_search_target.match_percentage * 100)}% match</div>`;
		results_div_body_str += "</div>";

		results_div_body_str += `</div>`;
	});


	results_div.innerHTML = results_div_body_str;
}



window.onload = () => {
	if(screen.width >= 768){ // if on desktop
		const search_box = document.getElementById("search_box");
		search_box.select();
	}
}

const search_targets = [
	new SearchTarget("Panther Programming Language", "/site/Panther.html", ["panther","programming","language"], [0]),
	new SearchTarget("Documentation", "/site/documentation/documentation.html", ["documentation"], [4]),
	new SearchTarget("Panther Documentation", "/site/documentation/panther/documentation.html", ["panther","documentation"], [0,4]),
	new SearchTarget("Modules", "/site/documentation/panther/modules.html", ["modules"], [0,4]),
	new SearchTarget("Undefined Behavior", "/site/documentation/panther/undefined_behavior.html", ["undefined","behavior"], [0,4]),
	new SearchTarget("Uninitialized", "/site/documentation/panther/uninitialized.html", ["uninitialized"], [0,4]),
	new SearchTarget("Panther Value Categories", "/site/documentation/panther/value_categories.html", ["panther","value","categories"], [0,4]),
	new SearchTarget("Ephemeral Value Category", "documentation/panther/value_categories.html#ephemeral", ["ephemeral","value","category"], [0,4]),
	new SearchTarget("Concrete Value Category", "documentation/panther/value_categories.html#concrete", ["concrete","value","category"], [0,4]),
	new SearchTarget("Concrete Mutable Value Category", "documentation/panther/value_categories.html#concrete_mutable", ["concrete","mutable","value","category"], [0,4]),
	new SearchTarget("Concrete-Forwardable Value Category", "documentation/panther/value_categories.html#concrete_forwardable", ["concrete-forwardable","value","category"], [0,4]),
	new SearchTarget("Concrete-Const Value Category", "documentation/panther/value_categories.html#concrete_const", ["concrete-const","value","category"], [0,4]),
	new SearchTarget("Destructive-Movable-Concrete-Const Value Category", "documentation/panther/value_categories.html#destructive_movable_concrete_const", ["destructive-movable-concrete-const","value","category"], [0,4]),
	new SearchTarget("Panther Value Stages", "/site/documentation/panther/value_stages.html", ["panther","value","stages"], [0,4]),
	new SearchTarget("Comptime Value Stage", "documentation/panther/value_stages.html#comptime", ["comptime","value","stage"], [0,4]),
	new SearchTarget("Constexpr Value Stage", "documentation/panther/value_stages.html#constexpr", ["constexpr","value","stage"], [0,4]),
	new SearchTarget("Runtime Value Stage", "documentation/panther/value_stages.html#runtime", ["runtime","value","stage"], [0,4]),
	new SearchTarget("When Conditionals", "/site/documentation/panther/when_conditionals.html", ["when","conditionals"], [0,4]),
	new SearchTarget("Panther STD Documentation", "/site/documentation/panther_std/documentation.html", ["panther","std","documentation"], [1,4]),
	new SearchTarget("PIR Documentation", "/site/documentation/PIR/documentation.html", ["pir","documentation"], [2,4]),
	new SearchTarget("Tutorials", "/site/tutorials/tutorials.html", ["tutorials"], [5]),
	new SearchTarget("Panther Tutorial", "/site/tutorials/panther/tutorial.html", ["panther","tutorial"], [0,5]),
	new SearchTarget("Panther Library Tutorial", "/site/tutorials/pantherlib/tutorial.html", ["panther","library","tutorial"], [1,5]),
	new SearchTarget("PIR Tutorial", "/site/tutorials/pir/tutorial.html", ["pir","tutorial"], [2,5]),
	new SearchTarget("PLNK Tutorial", "/site/tutorials/plnk/tutorial.html", ["plnk","tutorial"], [3,5]),
	new SearchTarget("Devlog", "/site/devlog/devlog.html", ["devlog"], [6]),
	new SearchTarget("New Systems Requires Major Changes | Devlog", "/site/devlog/new_systems_requires_major_changes.html", ["new","systems","requires","major","changes","devlog"], [0,6]),
	new SearchTarget("Dependencies V2 | Devlog", "/site/devlog/dependencies_v2.html", ["dependencies","v2","devlog"], [0,6]),
];
