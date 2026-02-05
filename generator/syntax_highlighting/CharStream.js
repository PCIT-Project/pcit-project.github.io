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

	skip(amount = 1){
		assert(amount >= 1, "must skip positive amount");

		this.cursor += amount;
	}

	peek_is(str){
		if(this.cursor + str.length >= this.text.length){ return false; }

		for(var i=0; i<str.length;i++){
			if(this.text[this.cursor + i] != str[i]){ return false; }
		}

		return true;
	}


	EOF(){
		return this.cursor >= this.text.length;
	}
}

exports.CharStream = CharStream;