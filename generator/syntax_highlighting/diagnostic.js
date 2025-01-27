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
		if(stream.peek() == "<"){
			stream.skip(1);

			if(stream.peek_is("Error")){
				stream.skip(5);

				output += "<span class=\"code-red\">&lt;Error";

				while(stream.peek() != '\n' && stream.EOF() == false){
					if(stream.peek() == '<'){
						output += "&lt;";
						stream.skip(1);
					}else if(stream.peek() == `>`){
						output += "&gt;";
						stream.skip(1);
					}else{
						output += stream.next();
					}
				}

				output += "</span>";

			}else if(stream.peek_is("Warning")){
				stream.skip(7);

				output += "<span class=\"code-cyan\">&lt;Warning";

				while(stream.peek() != '\n' && stream.EOF() == false){
					if(stream.peek() == '<'){
						output += "&lt;";
						stream.skip(1);
					}else if(stream.peek() == `>`){
						output += "&gt;";
						stream.skip(1);
					}else{
						output += stream.next();
					}
				}

				output += "</span>";

			}else if(stream.peek_is("Info")){
				stream.skip(4);

				output += "<span class=\"code-cyan\">&lt;Info";

				while(stream.peek() != '\n' && stream.EOF() == false){
					if(stream.peek() == '<'){
						output += "&lt;";
						stream.skip(1);
					}else if(stream.peek() == `>`){
						output += "&gt;";
						stream.skip(1);
					}else{
						output += stream.next();
					}
				}

				output += "</span>";

			}else{
				output += "&lt;";
			}
		}else{
			output += stream.next();
		}
	}

	return output;
}