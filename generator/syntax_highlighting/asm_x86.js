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

		}else if(is_letter(stream.peek()) || stream.peek() == '_' || stream.peek() == '.'){
			identifier = stream.next();

			while(is_letter(stream.peek()) || is_number(stream.peek()) || stream.peek() == '_'){
				identifier += stream.next();
			}

			switch(identifier){
				case "mov":
				case "lea":
				case "ret": case "jmp": case "jne": case "call":
				case "test":
				case "add": case "sub":
				{
					output += `<span class="code-red">${identifier}</span>`;
				} break;

				case "eax": case "rax":
				case "ecx": case "rcx":
				case "rsp":
				case "al":
				case "rip":
				{
					output += `<span class="code-orange" style="font-style: italic;">${identifier}</span>`;
				} break;

				case "qword": case "dword": case "word": case "byte":
				case "ptr":
				{
					output += `<span class="code-cyan" style="font-style: italic;">${identifier}</span>`;
				} break;

				default: {
					if(stream.peek() === ':'){
						output += `<span class="code-green">${identifier}:</span>`;
						stream.skip();
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

		}else if(stream.peek() == '+'){
			output += "<span class=\"code-red\">+</span>";
			stream.skip();

		}else if(is_number(stream.peek())){
			output += "<span class=\"code-purple\">";

			while(is_number(stream.peek())){
				output += stream.next();
			}

			if(stream.peek() == 'x'){
				output += stream.next();

				while(is_number(stream.peek())){
					output += stream.next();
				}
			}

			output += "</span>";


		}else{
			output += stream.next();
		}
	}

	return output;
}