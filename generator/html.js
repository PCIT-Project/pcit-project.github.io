

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

exports.tag = function(tag, contents, indentation=2){
	let output = "";

	for(var i=0; i<indentation;i++){
		output += '\t';
	}

	output += `<${tag}>${contents}</${tag}>\n`;

	return output;
}


exports.link = function(link, text){
	return `<a href="${link}">${text}</a>`;
}


exports.italic = function(text){
	return `<span style="font-style: italic;">${text}</span>`;
}


exports.inline_code = function(text){
	return `<code>${text}</code>`;
}