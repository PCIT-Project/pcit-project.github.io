const assert = require("node:assert");
const fs = require("node:fs");
const html = require("./html.js");
const syntax_highlighting = require("./syntax_highlighting/syntax_highlighting.js");

class Page{
	#title;
	#path;
	#body;
	#counter;

	constructor(title, path){
		assert(title !== undefined, "Must have title");
		assert(path !== undefined, "Must have path");

		this.title = title;
		this.path = "../site/" + path;
		this.body = "";
		this.counter = 0;
	}


	h1(text){
		this.body += html.tag("h1", text);
	}

	h2(text){
		this.body += html.tag("h2", text);
	}

	h3(text){
		this.body += html.tag("h3", text);
	}

	paragraph(text){
		this.body += html.tag("p", text);
	}

	link(link, text){
		return html.link(link, text);
	}

	raw(text){
		this.body += text;
	}


	bullets(points){
		this.body += "\t\t<ul>\n";

		for(var i=0; i<points.length;i++){
			this.body += html.tag("li", points[i], 3);
		}

		this.body += "\t\t</ul>\n";
	}


	code_block(language, code){
		let requires_lines = false;
		if(language == "Panther" || language == "C++" || language == "C" || language == "Text"){
			requires_lines = true;
		}else if(language == "Terminal"){

		}else{
			assert(false, `Unknown language \"${language}\"`);
		}

		this.body += `<script type=\"text/javascript\">function copy_code_${this.counter}(){ navigator.clipboard.writeText(\``;

		for(var i=0; i<code.length;i++){
			if(code[i] == '`'){
				this.body += "\\'";
			}else{
				this.body += code[i];
			}
		}
		
		this.body += "`); }</script>";


		let header_title_style = "background-color: #888888";
		switch(language){
			case "Panther":  header_title_style = "background-color: #06b6b4;"; break;
			case "C++":      header_title_style = "background-color: #005996;"; break;
			case "C":        header_title_style = "background-color: #004283;"; break;
			case "Terminal": header_title_style = "background-color: #333333; color: #ffffff;"; break;
		}


		this.body += `<div><div class="code-header" style="${header_title_style}">${language}`;
		this.body += `<button class="code-copy" onclick="copy_code_${this.counter}()">Copy</button></div>`;
		this.counter += 1;


		if(requires_lines){ // syntaxes that require lines
			this.body += "\t\t<pre class=\"code code-with-lines\">";
			this.body += "<div class=\"code-lines\">";

			let max_line = 1;
			for(var i=0; i<code.length;i++){
				if(code[i] == '\n'){ max_line += 1; }
			}

			{
				let line = 1;
				for(var i=0; i<code.length;i++){
					if(code[i] == '\n'){
						if(max_line < 10){
							this.body += `${line}\n`;

						}else if(max_line < 100){
							if(line < 10){
								this.body += ` ${line}\n`;
							}else{
								this.body += `${line}\n`;
							}

						}else{
							if(line < 10){
								this.body += `  ${line}\n`;
							}else if(line < 100){
								this.body += ` ${line}\n`;
							}else{
								this.body += `${line}\n`;
							}
						}


						line += 1;
					}
				}

				this.body += line;
			}

			this.body += "</div><div class=\"code-src\">";

		}else{
			if(language == "Terminal"){
				this.body += "<pre class=\"code code-src code-without-lines\" style=\"background-color: black; color: #ffffff;\">";

			}else{
				this.body += "<pre class=\"code code-src code-without-lines\">";
			}
		}


		if(language == "Panther"){
			this.body += syntax_highlighting.panther(code);
		}else if(language == "C++" || language == "C" ){
			this.body += syntax_highlighting.cpp(code);
		}else{
			this.body += html.santitize(code);
		}

		if(requires_lines){
			this.body += "</div>";
		}

		this.body += "</pre>";
		this.body += "</div>";
	}


	generate(){
		let file_data = `<!-- This page was generated -->

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="color-scheme" content="dark">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>${this.title} | PCIT Project</title>
	<link rel="icon" type="image/x-icon" href="/assets/favicon.ico">

	<link rel="stylesheet" type="text/css" href="/assets/style.css">

	<script src="/assets/font-awesome/fontawesome.min.js"></script>
	<script src="/assets/font-awesome/solid.min.js"></script>
	<script src="/assets/font-awesome/brands.min.js"></script>
</head>
<body>
	<div class="navbar">
		<img class="navbar-img" src="/assets/Logo.png">
		<a class="navbar-title" href="/site/home.html">PCIT Project</a>

		<a class="navbar-item" href="https://github.com/PCIT-Project/PCIT-CPP">Source Code <i class="fa-brands fa-github"></i></a>
		<a class="navbar-item" href="./Panther.html">Panther</a>

		<div class="hamburger-button" onclick="toggle_hamburger()">
			<i class="normal-hamburger-button fa-solid fa-bars fa-lg"></i>
			<i class="larger-hamburger-button fa-solid fa-bars fa-2xl"></i>
		</div>
	</div>

	<div class="hamburger-dropdown">
		<a class="hamburger-dropdown-item" href="./Panther.html">Panther</a>
		<a class="hamburger-dropdown-item" href="https://github.com/PCIT-Project/PCIT-CPP">Source Code <i class="fa-brands fa-github"></i></a>
	</div>

	<div class="context">

${this.body}
	</div>

</body>
<script src="/assets/script.js"></script>
</html>`;


		fs.writeFileSync(this.path, file_data);
		console.log(`Generated page (${this.title}): "${this.path}"`);
	}
}

exports.Page = Page;