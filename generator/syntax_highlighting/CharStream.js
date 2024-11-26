const assert = require("node:assert");

class CharStream{
	#text;
	#cursor;

	constructor(text){
		this.text = text;
		this.cursor = 0;
	}


	peek(offset = 0){
		return this.text[this.cursor + offset];
	}

	next(){
		assert(this.EOF() == false, "cursor out of bounds");

		const value = this.text[this.cursor];
		this.cursor += 1;
		return value;
	}

	skip(ammount){
		this.cursor += ammount;
	}

	EOF(){
		return this.cursor >= this.text.length;
	}
}

exports.CharStream = CharStream;