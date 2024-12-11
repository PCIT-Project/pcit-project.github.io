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

	while(stream.EOF() == false){
		if(is_whitespace(stream.peek())){
			output += stream.next();

		}else if(stream.peek() == '/' && stream.peek(1) == '/'){
			output += "<span class=\"code-gray\">";
			while(stream.peek() != '\n'){
				output += stream.next();	
			}
			output += "</span>";

		}else if(is_letter(stream.peek()) || stream.peek() == '_' || stream.peek() == "#"){
			identifier = stream.next();

			while(is_letter(stream.peek()) || is_number(stream.peek()) || stream.peek() == '_'){
				identifier += stream.next();
			}

			switch(identifier){
				case "defined": {
					output += `<span class="code-red">${identifier}</span>`;
				} break;

				case "const": case "static": case "volatile": case "constexpr": {
					output += `<span class="code-red">${identifier}</span>`;
				} break;

				case "void": case "auto":
				case "unsigned": case "int": case "short": case "long":
				case "uint8_t": case "uint16_t": case "uint32_t": case "uint64_t":
				case "int8_t": case "int16_t": case "int32_t": case "int64_t":
				case "float": case "double":
				case "size_t": case "ptrdiff_t":
				{
					output += `<span class="code-cyan" style="font-style: italic;">${identifier}</span>`;
				} break;

				case "return": case "break": {
					output += `<span class="code-red">${identifier}</span>`;
				} break;

				case "nullptr": case "true": case "false": {
					output += `<span class="code-purple">${identifier}</span>`;
				} break;

				case "template": case "typename": {
					output += `<span class="code-cyan" style="font-style: italic;">${identifier}</span>`;
				} break;

				case "struct": {
					output += `<span class="code-cyan" style="font-style: italic;">${identifier}</span>`;
					while(is_whitespace(stream.peek())){ output += stream.next(); }

					identifier = "";
					while(is_letter(stream.peek()) || is_number(stream.peek()) || stream.peek() == '_'){
						identifier += stream.next();
					}
					output += `<span class="code-green">${identifier}</span>`;
				} break;

				case "enum": {
					output += `<span class="code-cyan" style="font-style: italic;">${identifier}</span>`;
					while(is_whitespace(stream.peek())){ output += stream.next(); }

					identifier = "";
					while(is_letter(stream.peek()) || is_number(stream.peek()) || stream.peek() == '_'){
						identifier += stream.next();
					}

					if(identifier != "class"){
						output += `<span class="code-green">${identifier}</span>`;

					}else{
						output += "<span class=\"code-cyan\" style=\"font-style: italic;\">class</span>";

						while(is_whitespace(stream.peek())){ output += stream.next(); }

						identifier = "";
						while(is_letter(stream.peek()) || is_number(stream.peek()) || stream.peek() == '_'){
							identifier += stream.next();
						}

						output += `<span class="code-green">${identifier}</span>`;
					}

				} break;

				case "class": {
					const is_in_template = stream.peek(-6) == "<";

					output += `<span class="code-cyan" style="font-style: italic;">${identifier}</span>`;

					if(is_in_template == false){
						while(is_whitespace(stream.peek())){ output += stream.next(); }

						identifier = "";
						while(is_letter(stream.peek()) || is_number(stream.peek()) || stream.peek() == '_'){
							identifier += stream.next();
						}
						output += `<span class="code-green">${identifier}</span>`;
					}
				} break;

				case "if": case "else": case "while": case "for": case "switch": case "case": {
					output += `<span class="code-red">${identifier}</span>`;
				} break;

				case "this": {
					output += `<span class="code-orange">${identifier}</span>`;
				} break;

				default: {
					if(identifier == "#include"){
						output += `<span class="code-red">${identifier}</span>`;
						while(is_whitespace(stream.peek())){ output += stream.next(); }

						if(stream.peek() == '<'){
							output += "<span class=\"code-yellow\"><</span><span class=\"code-yellow\">";
							stream.next();

							while(stream.peek() != '>'){
								if(stream.peek() == "\\"){
									output += "<span class=\"code-purple\">" + stream.peek() + stream.peek() + "</span>";
								}else{
									output += stream.next();
								}
							}

							output += stream.next() + "</span>";
						}

						break;

					}else if(identifier[0] == '#'){
						output += `<span class="code-red">${identifier}</span>`;
						break;
					}

					if(stream.peek() == "("){
						output += `<span class="code-cyan">${identifier}</span>`;
					}else{
						output += identifier;
					}
				} break;
			}

			// look for function declarations
			let peek_cursor = 1;
			while(is_whitespace(stream.peek(peek_cursor))){ peek_cursor += 1; }

			if(is_letter(stream.peek(peek_cursor)) || stream.peek(peek_cursor) == "_"){
				peek_cursor += 1;
			}else{
				continue;
			}

			while(is_letter(stream.peek(peek_cursor)) || is_number(stream.peek(peek_cursor)) || stream.peek(peek_cursor) == "_"){
				peek_cursor += 1;
			}

			if(stream.peek(peek_cursor) != '('){ continue; }

			// If got to here, found function declaration
			while(is_whitespace(stream.peek())){ output += stream.next(); }

			output += "<span class=\"code-green\">";
			while(is_letter(stream.peek()) || is_number(stream.peek()) || stream.peek() == "_"){
				output += stream.next();
			}
			output += "</span>";

		}else if(stream.peek() == '"'){
			output += "<span class=\"code-yellow\">";
			output += stream.next();

			while(stream.peek() != '"'){
				if(stream.peek() == "\\"){
					output += "<span class=\"code-purple\">" + stream.next() + stream.next() + "</span>";
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

				if(stream.peek() == 'f'){
					output += stream.next();
				}
			}

			output += "</span>";


		}else if(stream.peek() == '-' && stream.peek(1) == '>'){
			output += stream.next() + stream.next();

		}else if(stream.peek() == '&' || stream.peek() == '|' || stream.peek() == '^' || stream.peek() == '~'){
			output += `<span class="code-red">${stream.next()}</span>`;

		}else if(stream.peek() == '+' || stream.peek() == '-' || stream.peek() == '*' || stream.peek() == '/'){
			output += `<span class="code-red">${stream.next()}</span>`;

		}else if(stream.peek() == '<'){
			if(!is_letter(stream.peek(-1)) && !is_number(stream.peek(-1)) && stream.peek(-1) != "_"){
				output += "<span class=\"code-red\">&lt;</span>";
			}else{
				output += "&lt;";
			}

			stream.skip();

		}else if(stream.peek() == '>'){
			output += "&gt;";
			stream.skip();

		}else if(stream.peek() == '='){
			output += `<span class="code-red">${stream.next()}</span>`;

		}else{
			output += stream.next();
		}
	}

	return output;
}