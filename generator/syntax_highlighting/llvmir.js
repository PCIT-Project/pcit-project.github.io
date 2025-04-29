const CharStream = require("./CharStream.js").CharStream;


function is_whitespace(character){
	return character == ' ' || character == '\t' || character == '\n' || character == '\r';
}


function is_letter(character){
	switch(character){
		case 'A': case 'B':
		case 'C': case 'D':
		case 'E': case 'F':
		case 'G': case 'H':
		case 'I': case 'J':
		case 'K': case 'L':
		case 'M': case 'N':
		case 'O': case 'P':
		case 'Q': case 'R':
		case 'S': case 'T':
		case 'U': case 'V':
		case 'W': case 'X':
		case 'Y': case 'Z':
		case 'a': case 'b':
		case 'c': case 'd':
		case 'e': case 'f':
		case 'g': case 'h':
		case 'i': case 'j':
		case 'k': case 'l':
		case 'm': case 'n':
		case 'o': case 'p':
		case 'q': case 'r':
		case 's': case 't':
		case 'u': case 'v':
		case 'w': case 'x':
		case 'y': case 'z':
			return true;
	}

	return false;
}

function is_number(character){
	switch(character){
		case '0':
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
			return true;
	}

	return false;
}



exports.highlight = function(code){
	let output = "";

	let stream = new CharStream(code);

	let should_make_at_ident_green = false;
	let should_make_percent_ident_green = false;
	while(stream.EOF() == false){
		if(is_whitespace(stream.peek())){
			if(stream.peek() == '\n'){
				should_make_at_ident_green = true;

				if(stream.peek(1) == '%'){
					should_make_percent_ident_green = true;
				}
			}

			output += stream.next();

		}else if(stream.peek() == ';'){
			output += "<span class=\"code-gray\">";
			while(stream.EOF() == false && stream.peek() != '\n'){
				output += stream.next();
			}
			output += "</span>";

		}else if(
			is_letter(stream.peek()) || stream.peek() == '_' || stream.peek() == '.' 
			|| stream.peek() == "@" || stream.peek() == "%" || stream.peek() == "$" || stream.peek() == "#"
		){
			identifier = stream.next();

			while(is_letter(stream.peek()) || is_number(stream.peek()) || stream.peek() == '_'  || stream.peek() == '.'){
				identifier += stream.next();
			}

			switch(identifier){
				case "type": {
					output += `<span class="code-cyan" style="font-style: italic;">${identifier}</span>`;
				} break;

				case "define": case "declare": {
					output += `<span class="code-cyan" style="font-style: italic;">${identifier}</span>`;
					while(is_whitespace(stream.peek())){ output += stream.next(); }

					should_make_at_ident_green = true;
				} break;

				case "void":
				case "ptr": 
				case "float": {
					output += `<span class="code-cyan" style="font-style: italic;">${identifier}</span>`;
				} break;

				case "true": case "false": {
					output += `<span class="code-purple">${identifier}</span>`;
				} break;

				case "fastcc": {
					output += `<span class="code-red">${identifier}</span>`;
				} break;

				case "align": {
					output += `<span class="code-red">${identifier}</span>`;
				} break;

				case "acquire": case "release": case "atomic": case "volatile": case "inbounds": case "internal": case "private": case "constant": {
					output += `<span class="code-red">${identifier}</span>`;
				} break;

				case "call": case "extractvalue": case "load": case "store": case "alloca": case "getelementptr": case "br": case "ret": {
					output += `<span class="code-red">${identifier}</span>`;
					should_make_at_ident_green = false;
				} break;

				case "source_filename": case "target": case "datalayout": case "triple": {
					output += `<span class="code-red">${identifier}</span>`;
				} break;

				case "attributes": {
					output += `<span class="code-cyan" style="font-style: italic;">${identifier}</span>`;
				} break;


				default: {
					if(identifier[0] == "@"){
						if(should_make_at_ident_green){
							output += `<span class="code-green">${identifier}</span>`;
							should_make_at_ident_green = false;
							should_make_percent_ident_green = false;
						}else{
							output += identifier;
						}
						break;

					}else if(identifier[0] == "%"){
						if(should_make_percent_ident_green){
							output += `<span class="code-green">${identifier}</span>`;
							should_make_at_ident_green = false;
							should_make_percent_ident_green = false;
						}else{
							output += identifier;
						}
						should_make_at_ident_green = false;
						break;

					}else if(identifier[0] == "$"){
						output += identifier;
						break;

					}else if(identifier[0] == "#"){
						output += `<span class="code-red">${identifier}</span>`;
						break;
					}


					if(identifier[0] == "i"){
						let is_int = true;

						for(var i=1; i<identifier.length; i++){
							if(is_number(identifier[i]) == false){
								is_int = false;
							}
						}

						if(is_int){
							output += `<span class="code-cyan" style="font-style: italic;">${identifier}</span>`;
							break;
						}
					}

					if(identifier == "c" && stream.peek() == '"'){
						output += `<span class="code-red">${identifier}</span>`;
						break;
					}

					output += identifier;
				} break;
			}

		}else if(stream.peek() == '"'){
			output += "<span class=\"code-yellow\">";
			output += stream.next();

			while(stream.peek() != '"'){
				if(stream.peek() == "\\"){
					output += "<span class=\"code-purple\">" + stream.next() + stream.next() + stream.next() + "</span>";
				}else{
					output += stream.next();
				}
			}

			output += stream.next() + "</span>";

		}else if(is_number(stream.peek())){
			output += "<span class=\"code-purple\">";

			while(is_number(stream.peek())){
				output += stream.next();
			}

			if(stream.peek() == '.'){
				output += stream.next();

				while(is_number(stream.peek())){
					output += stream.next();
				}

				if(stream.peek() == 'e'){
					output += stream.next() + stream.next();

					while(is_number(stream.peek())){
						output += stream.next();
					}
				}
			}

			output += "</span>";

		}else if(stream.peek() == '-' && stream.peek(1) == '>'){
			output += `<span class="code-red">-&gt;</span>`;
			stream.skip(2);

		// }else if(stream.peek() == '<'){
		// 	output += `<span class="code-red">&lt;</span>`;
		// 	stream.skip(1);

		// }else if(stream.peek() == '>'){
		// 	output += `<span class="code-red">&gt;</span>`;
		// 	stream.skip(1);

		}else if(stream.peek() == '='){
			output += `<span class="code-red">${stream.next()}</span>`;

		}else{
			output += stream.next();
		}
	}

	return output;
}