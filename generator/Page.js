//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////


const assert = require("node:assert");
const fs = require("node:fs");
const html = require("./html.js");
const syntax_highlighting = require("./syntax_highlighting/syntax_highlighting.js");
const search = require("./search.js");


const Language = Object.freeze({
	Panther: 0,
	PIR: 1,
	Cpp: 2,
	C: 3,
	LLVMIR: 4,
	ASM_x86: 5,
	Text: 6,
	Terminal: 7,
	Diagnostic: 8,
});



class Page{
	#body;
	#counter;

	// required options for `config`
	#path;
	#title;

	// optional options for `config`
	#description;
	#categories;
	#on_page_title; // default `title`
	#has_page_title; // default true

	constructor(config){
		this.body = "";
		this.counter = 0;

		assert(config.path !== undefined, "Must have path");
		assert(config.title !== undefined, "Must have title");

		this.title = config.title;
		this.path = config.path;
		this.description = config.description ?? "Panther Compiler Infrastructure and Technology";
		this.categories = config.categories;
		this.on_page_title = config.on_page_title ?? config.title;
		this.has_page_title = config.has_page_title ?? true;

		if(this.categories !== undefined){
			search.addSearchTarget(this.on_page_title, "/site/" + this.path, this.categories, this.description);
		}
	}


	h2(text, style=null){
		this.body += html.tag("h2", text, style);
	}

	h3(text, style=null){
		this.body += html.tag("h3", text, style);
	}


	h2Searchable(text, anchor_name, style=null){
		assert(this.categories !== undefined, "Cannot make searchable for page that doesn't have categories");

		if(style === null){
			this.body += `<h2 id="${anchor_name}">${text}</h2>`;
		}else{
			this.body += `<h2 id="${anchor_name}" style="${style}">${text}</h2>`;
		}

		search.addSearchTarget(text, this.path + "#" + anchor_name, this.categories);
	}

	h3Searchable(text, anchor_name, style=null){
		assert(this.categories !== undefined, "Cannot make searchable for page that doesn't have categories");

		if(style === null){
			this.body += `<h3 id="${anchor_name}">${text}</h3>`;
		}else{
			this.body += `<h3 id="${anchor_name}" style="${style}">${text}</h3>`;
		}

		search.addSearchTarget(text, this.path + "#" + anchor_name, this.categories);
	}


	text(text, style=null){
		this.body += html.tag("p", text, style);
	}

	paragraph(text, style=null){
		this.text("&emsp;&emsp;" + text, style);
	}

	pcit_cpp_version(version){
		return html.inline_code(html.link(version, "https://github.com/PCIT-Project/PCIT-CPP/blob/main/CHANGELOG.md#" + version));
	}

	raw(text){
		this.body += text;
	}

	anchor(name){
		this.body += `<div id="${name}"></div>`;
	}


	bullets(points){
		this.body += "\t\t<ul>\n";

		for(var i=0; i<points.length;i++){
			this.body += html.tag("li", points[i], null, 3);
		}

		this.body += "\t\t</ul>\n";
	}

	image(link, style=null){
		if(style == null){
			this.body += `<img src="${link}" style="width: 100%;"></img>`;
		}else{
			this.body += `<img src="${link}" style="${style}"></img>`;
		}
	}


	begin_info(){
		this.body += "<div class=\"info\">";
	}

	end_info(){
		this.body += "</div>";
	}

	begin_warning(){
		this.body += "<div class=\"warning\">";
	}

	end_warning(){
		this.body += "</div>";
	}


	code_block(language, code){
		let requires_lines = false;

		switch(language){
			case Language.Panther: case Language.PIR: case Language.Cpp: case Language.C: case Language.LLVMIR: case Language.ASM_x86: case Language.Text: {
				requires_lines = true;
			} break;

			case Language.Terminal: case Language.Diagnostic: {
				// do nothing...
			} break;

			default: assert(false, `Unknown language \"${language}\"`);
		}

		this.body += `<script type=\"text/javascript\">function copy_code_${this.counter}(){ navigator.clipboard.writeText(\``;

		for(var i=0; i<code.length;i++){
			if(code[i] == '`'){
				this.body += "\\'";
			}else if(code[i] === '\\'){
				this.body += "\\\\";

			}else{
				this.body += code[i];
			}
		}
		
		this.body += `\`);

		document.getElementById("copied_text_${this.counter}").style.visibility = "visible";
		setTimeout(() => {document.getElementById("copied_text_${this.counter}").style.visibility = "hidden";}, 1000);
		}</script>`;


		let header_title_style = "background-color: #888888";
		switch(language){
			case Language.Panther:    header_title_style = "background-color: #06b6d4;"; break;
			case Language.PIR:        header_title_style = "background-color: #06b6d4;"; break;
			case Language.Cpp:        header_title_style = "background-color: #005996;"; break;
			case Language.C:          header_title_style = "background-color: #004283; color: #ffffff;"; break;
			case Language.LLVMIR:     header_title_style = "background-color: #556293; color: #ffffff;"; break;
			case Language.ASM_x86:    header_title_style = "background-color: #25334d; color: #ffffff;"; break;
			case Language.Terminal:   header_title_style = "background-color: #333333; color: #ffffff;"; break;
			case Language.Diagnostic: header_title_style = "background-color: #333333; color: #ffffff;"; break;
		}


		this.body += `<div><div class="code-header" style="${header_title_style}">`;

		switch(language){
			case Language.Panther:    this.body += "Panther";  break;
			case Language.PIR:        this.body += "PIR";      break;
			case Language.Cpp:        this.body += "C++";      break;
			case Language.C:          this.body += "C";        break;
			case Language.LLVMIR:     this.body += "LLVM IR";  break;
			case Language.ASM_x86:    this.body += "x86-64 Assembly (Intel)";  break;
			case Language.Terminal:   this.body += "Terminal"; break;
			case Language.Diagnostic: this.body += "Terminal (Diagnostic)"; break;
		}


		this.body += `<button class="code-copy" onclick="copy_code_${this.counter}()">Copy</button><div id="copied_text_${this.counter}" style="float: right; visibility: hidden;">Copied </div></div>`;
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
			if(language === Language.Terminal || language === Language.Diagnostic){
				this.body += "<pre class=\"code code-src code-without-lines\" style=\"background-color: black; color: #ffffff;\">";

			}else{
				this.body += "<pre class=\"code code-src code-without-lines\">";
			}
		}


		switch(language){
			case Language.Panther: {
				this.body += syntax_highlighting.panther(code);
			} break;

			case Language.PIR: {
				this.body += syntax_highlighting.pir(code);
			} break;

			case Language.Cpp: case Language.C: {
				this.body += syntax_highlighting.cpp(code);
			} break;

			case Language.LLVMIR: {
				this.body += syntax_highlighting.llvmir(code);
			} break;

			case Language.ASM_x86: {
				this.body += syntax_highlighting.asm_x86(code);
			} break;

			case Language.Diagnostic: {
				this.body += syntax_highlighting.diagnostic(code);
			} break;

			default: {
				this.body += html.santitize(code);
			} break;
		}

		

		if(requires_lines){
			this.body += "</div>";
		}

		this.body += "</pre>";
		this.body += "</div>";
	}


	generate(is_home_page = false){
		let file_data = `<!-- This page was generated -->

<!-------------------------------------------------------------------------------------------------->
<!--                                                                                              -->
<!-- Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. -->
<!-- You may not use this file except in compliance with the License.                             -->
<!-- See \`https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE\`for info.                  -->
<!--                                                                                              -->
<!-------------------------------------------------------------------------------------------------->


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="color-scheme" content="dark">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<meta name="robots" content="index, follow" />
	<meta name="description" content="${this.description}" />

	<meta property="og:title" content="${this.title} | PCIT Project" />
	<meta property="og:description" content="${this.description}" />
	<meta property="og:image" content="/assets/LogoBig.png" />

	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
	<link rel="apple-touch-icon" href="/assets/Logo.png"/>


	<title>${this.title} | PCIT Project</title>
	<link rel="icon" type="image/x-icon" href="/assets/favicon.ico">

	<link rel="stylesheet" type="text/css" href="/assets/style.css">

	<script src="/assets/font-awesome/fontawesome.min.js"></script>
	<script src="/assets/font-awesome/solid.min.js"></script>
	<script src="/assets/font-awesome/brands.min.js"></script>
</head>
<body>
	<div class="navbar">`;
		if(is_home_page){
				file_data += `
			<div id="navbar-fader" class="navbar-fader-hidden">
				<div class="navbar-img-box"><img class="navbar-img" src="/assets/Logo.png"></div>
				<a class="navbar-title" href="/site/home.html">PCIT Project</a>
			</div>
			`;

		}else{
			file_data += `
		<div id="navbar-fader">
			<div class="navbar-img-box"><img class="navbar-img" src="/assets/Logo.png"></div>
			<a class="navbar-title" href="/site/home.html">PCIT Project</a>
		</div>
		`;	
		}

		file_data += `
		<a class="navbar-item" href="https://github.com/PCIT-Project">Source Code <i class="fa-brands fa-github"></i></a>
		<a class="navbar-item" href="/site/downloads.html">Downloads</a>
		<a class="navbar-item" href="/site/devlog/devlog.html">Devlog</a>
		<a class="navbar-item" href="/site/tutorials/tutorials.html">Tutorials</a>
		<a class="navbar-item" href="/site/documentation/documentation.html">Documentation</a>
		<a class="navbar-item" href="/site/search.html">Search</a>
		<a class="navbar-item" href="/site/Panther.html">Panther</a>

		<div class="hamburger-button" onclick="toggle_hamburger()">
			<i class="hamburger-button fa-solid fa-bars fa-fw"></i>
		</div>
	</div>

	<div class="hamburger-dropdown">
		<a class="hamburger-dropdown-item" href="/site/Panther.html">Panther</a>
		<a class="hamburger-dropdown-item" href="/site/search.html">Search</a>
		<a class="hamburger-dropdown-item" href="/site/documentation/documentation.html">Documentation</a>
		<a class="hamburger-dropdown-item" href="/site/tutorials/tutorials.html">Tutorials</a>
		<a class="hamburger-dropdown-item" href="/site/devlog/devlog.html">Devlog</a>
		<a class="hamburger-dropdown-item" href="/site/downloads.html">Downloads</a>
		<a class="hamburger-dropdown-item" href="https://github.com/PCIT-Project" style="padding-bottom: 1em;">Source Code <i class="fa-brands fa-github"></i></a>
	</div>`;

	if(is_home_page){
		file_data += `
	<div id="home-splash">
		<script src="/assets/script.js"></script>
		<img id="home-splash-img" src="/assets/LogoBig.png">
		<h1 id="home-splash-title">PCIT Project</h1>
		<h2 id="home-splash-title2">Panther Compiler Infrastructure and Toolchain</h2>
	</div>
	<script src="/assets/home_script.js"></script>
		`;
	}

	file_data += "\n\n\t<div class=\"context\">\n";

	if(this.has_page_title){
		file_data += `\t\t<h1>${this.on_page_title}</h1>\n`;

		if(this.categories !== undefined){
			file_data += "\t\t";
			this.categories.forEach((category) => {
				switch(category){
					case 0: file_data += "<div class=\"search-category\" style=\"color: #06b6d4; background-color: #0c2f39; border-color: #0b4652;\">Panther</div>"; break;
					case 1: file_data += "<div class=\"search-category\" style=\"color: #06a6c4; background-color: #0c2c36; border-color: #0a5b6a;\">Panther STD</div>"; break;
					case 2: file_data += "<div class=\"search-category\" style=\"color: #15d273; background-color: #0e2a23; border-color: #105c3b;\">PIR</div>"; break;
					case 3: file_data += "<div class=\"search-category\" style=\"color: #1fc493; background-color: #102c2c; border-color: #145a4f;\">PLNK</div>"; break;
					case 4: file_data += "<div class=\"search-category\" style=\"color: #f27532; background-color: #291a15; border-color: #663925;\">Documentation</div>"; break;
					case 5: file_data += "<div class=\"search-category\" style=\"color: #d97ee5; background-color: #32233c; border-color: #643e6f;\">Tutorial</div>"; break;
					case 6: file_data += "<div class=\"search-category\" style=\"color: #bbbbbb; background-color: #2d3035; border-color: #575a5d;\">Devlog</div>"; break;
					case 7: file_data += "<div class=\"search-category\" style=\"color: #fed0a5; background-color: #393431; border-color: #756354;\">Download/Build</div>"; break;
				}
			});
			file_data += '\n';
		}
	}

	file_data += this.body;

	file_data += `\t</div>

	<div class="footer">
		<p style="color: #878481;">© 2023-${new Date().getFullYear()} <a href="/site/about.html">PCIT Project Team</a>. All rights reserved. </p>
	</div>

</body>
<script src="/assets/script.js"></script>
</html>`;

		fs.writeFileSync("../site/" + this.path, file_data);
		console.log(`Generated page \x1b[35m(${this.title})\x1b[0m: \x1b[33m"${this.path}"\x1b[0m`);
	}
}

exports.Language = Language;
exports.Page = Page;