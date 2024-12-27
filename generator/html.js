//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



exports.santitize = function(text){
	let output = "";

	for(var i=0; i<text.length;i++){
		if(text[i] == '<'){
			output += "&lt;";

		}else if(text[i] == '>'){
			output += "&gt;";

		}else{
			output += text[i];
		}
	}

	return output;
}

exports.tag = function(tag, contents, style=null, indentation=2){
	let output = "";

	for(var i=0; i<indentation;i++){
		output += '\t';
	}

	if(style == null){
		output += `<${tag}>${contents}</${tag}>\n`;
	}else{
		output += `<${tag} style="${style}">${contents}</${tag}>\n`;
	}

	return output;
}


exports.link = function(text, link){
	return `<a href="${link}">${text}</a>`;
}


exports.italic = function(text){
	return `<span style="font-style: italic;">${text}</span>`;
}


exports.inline_code = function(text){
	return `<code>${text}</code>`;
}
