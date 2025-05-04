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
const path = require('node:path');

const child_process = require("node:child_process");



const Language = Object.freeze({
	PANTHER: 0,
	PIR: 1,
	CPP: 2,
	C: 3,
	LLVMIR: 4,
	ASM_x86: 5,
	TEXT: 6,
	Terminal: 7,
	Diagnostic: 8,
});


let page_list = [];


const changed_files = function(){
	let git_status;
	try{
		git_status = child_process.execSync("git status").toString();
	}catch(e){
		assert(false, "git status error: \n\n" + e.toString() + "\n");
	}

	let found_added_section = false;

	let output = [];
	git_status.split("\n").forEach((git_status_line) => {
		if(found_added_section){
			if(git_status_line.startsWith("\t")){
				output.push(git_status_line.slice("\t".length).replaceAll());
			}
			return;
		}

		if(git_status_line.startsWith("\tnew file:   ")){
			output.push(git_status_line.slice("\tnew file:   ".length).replaceAll());
			return;
		}

		if(git_status_line.startsWith("\tmodified:   ")){
			output.push(git_status_line.slice("\tmodified:   ".length).replaceAll());
			return;
		}

		if(git_status_line == `  (use "git add <file>..." to include in what will be committed)`){
			found_added_section = true;
		}
	});

	return output;
}();



class Page{
	#body;
	#counter;
	#last_updated_str;

	// required options for `config`
	#path;
	#title;

	// optional options for `config`
	#description;
	#categories;
	#on_page_title; // default `title`
	#has_page_title; // default true

	// optional options for `config` that don't become members
	// allow_in_sitemap; // defaults to true

	constructor(generator_path, config){
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
		this.allow_in_sitemap = config.allow_in_sitemap ?? true;

		if(this.categories !== undefined){
			search.addSearchTarget(this.on_page_title, "/site/" + this.path, this.categories, this.description);
		}

		if(config.allow_in_sitemap ?? true){
			page_list.push(this);
		}


		///////////////////////////////////
		// get `last_updated_str``


		if(changed_files.includes(path.relative(process.cwd(), generator_path).replaceAll("\\", "/"))){
			let date = new Date();
			const month = date.getMonth() + 1;
			const day = date.getDate();
			this.last_updated_str = `${date.getFullYear()}-${month > 9 ? month : "0" + month}-${day > 9 ? day : "0" + day}`;
			
		}else{
			const get_last_commit_str = `git log -1 --pretty="format:%ci" -- "${generator_path}"`;
			let last_commit_res;
			try{
				last_commit_res = child_process.execSync(get_last_commit_str).toString();
			}catch(e){
				assert(false, "git error: \n\n" + e.toString() + "\n");
			}

			assert(last_commit_res != "", "failed to get last updated time");

			this.last_updated_str = last_commit_res.split(" ")[0];
		}
	}

	getPath(){ return this.path; }
	allowInSitemap(){ return this.allow_in_sitemap; }
	lastUpdatedStr(){ return this.last_updated_str; }




	h2(text, style=null){
		this.body += html.tag("h2", text, style);
	}

	h3(text, style=null){
		this.body += html.tag("h3", text, style);
	}

	h4(text, style=null){
		this.body += html.tag("h4", text, style);
	}


	h2Anchor(text, anchor_name, style=null){
		if(style === null){
			this.body += `<h2 id="${anchor_name}">${text}</h2>`;
		}else{
			this.body += `<h2 id="${anchor_name}" style="${style}">${text}</h2>`;
		}
	}

	h3Anchor(text, anchor_name, style=null){
		if(style === null){
			this.body += `<h3 id="${anchor_name}">${text}</h3>`;
		}else{
			this.body += `<h3 id="${anchor_name}" style="${style}">${text}</h3>`;
		}
	}



	h2Searchable(text, anchor_name, style=null){
		assert(this.categories !== undefined, "Cannot make searchable for page that doesn't have categories");

		this.h2Anchor(text, anchor_name, style);
		search.addSearchTarget(text, this.path + "#" + anchor_name, this.categories);
	}

	h3Searchable(text, anchor_name, style=null){
		assert(this.categories !== undefined, "Cannot make searchable for page that doesn't have categories");

		this.h3Anchor(text, anchor_name, style);
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

	ordered_list(points){
		this.body += "\t\t<ol>\n";

		for(var i=0; i<points.length;i++){
			this.body += html.tag("li", points[i], null, 3);
		}

		this.body += "\t\t</ol>\n";
	}

	image(link, alt_text, style=null){
		if(style == null){
			this.body += `<img src="${link}" alt="${alt_text}" style="width: 100%;"></img>`;
		}else{
			this.body += `<img src="${link}" alt="${alt_text}" style="${style}"></img>`;
		}
	}


	table(rows){
		this.body += "<table>\n";

		for(let row_i = 0; row_i < rows.length; row_i+=1){
			this.body += "\t<tr>\n";
			
			for(let collumn_i = 0; collumn_i < rows[row_i].length; collumn_i+=1){
				if(row_i === 0){
					this.body += `\t\t<th>${rows[row_i][collumn_i]}</th>\n`;
				}else{
					this.body += `\t\t<td>${rows[row_i][collumn_i]}</td>\n`;
				}
			}

			this.body += "\t</tr>\n";
		}

		this.body += "</table>\n";
	}


	list_table(language, items){
		this.body += "<div style=\"overflow-x: auto;\"><table style=\"margin-bottom: 2em;\">\n";

		items.forEach((item, i) => {
			this.body +=
`	<tr style="background-color: #151617;">
		<td style="border: 0px; border-bottom: 1px solid #878481; border-top: 1px solid #878481; width: 0.5em; font-style: italic; color: #878481;">${i + 1}:</td>
		<td style="border: 0px; border-bottom: 1px solid #878481; border-top: 1px solid #878481;">${this.inline_code_block(language, item)}</td>
	</tr>
`;
		});

		this.body += "</table></div>\n";

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



	inline_code_block(language, code){
		let output = "<code style=\"background-color: #282923!important;\">"

		switch(language){
			case Language.PANTHER: {
				output += syntax_highlighting.panther(code);
			} break;

			case Language.PIR: {
				output += syntax_highlighting.pir(code);
			} break;

			case Language.CPP: case Language.C: {
				output += syntax_highlighting.cpp(code);
			} break;

			case Language.LLVMIR: {
				output += syntax_highlighting.llvmir(code);
			} break;

			case Language.ASM_x86: {
				output += syntax_highlighting.asm_x86(code);
			} break;

			case Language.Diagnostic: {
				output += syntax_highlighting.diagnostic(code);
			} break;

			default: {
				output += html.santitize(code);
			} break;
		}
		output += "</code>";

		return output;
	}


	code_block(language, code){
		let requires_lines = false;

		switch(language){
			case Language.PANTHER: case Language.PIR: case Language.CPP: case Language.C: case Language.LLVMIR: case Language.ASM_x86: case Language.TEXT: {
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
			case Language.PANTHER:    header_title_style = "background-color: #06b6d4;"; break;
			case Language.PIR:        header_title_style = "background-color: #06b6d4;"; break;
			case Language.CPP:        header_title_style = "background-color: #005996;"; break;
			case Language.C:          header_title_style = "background-color: #004283; color: #ffffff;"; break;
			case Language.LLVMIR:     header_title_style = "background-color: #556293; color: #ffffff;"; break;
			case Language.ASM_x86:    header_title_style = "background-color: #25334d; color: #ffffff;"; break;
			case Language.Terminal:   header_title_style = "background-color: #333333; color: #ffffff;"; break;
			case Language.Diagnostic: header_title_style = "background-color: #333333; color: #ffffff;"; break;
		}


		this.body += `<div><div class="code-header" style="${header_title_style}">`;

		switch(language){
			case Language.PANTHER:    this.body += "Panther";                 break;
			case Language.PIR:        this.body += "PIR";                     break;
			case Language.Cpp:        this.body += "C++";                     break;
			case Language.C:          this.body += "C";                       break;
			case Language.LLVMIR:     this.body += "LLVM IR";                 break;
			case Language.ASM_x86:    this.body += "x86-64 Assembly (Intel)"; break;
			case Language.Terminal:   this.body += "Terminal";                break;
			case Language.Diagnostic: this.body += "Terminal (Diagnostic)";   break;
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
			case Language.PANTHER: {
				this.body += syntax_highlighting.panther(code);
			} break;

			case Language.PIR: {
				this.body += syntax_highlighting.pir(code);
			} break;

			case Language.CPP: case Language.C: {
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
</head>
<body>
	<div class="navbar">`;
		if(is_home_page){
				file_data += `
			<div id="navbar-fader" class="navbar-fader-hidden">
				<div class="navbar-img-box"><img class="navbar-img" src="/assets/Logo.png" alt="PCIT Project Logo"></div>
				<a class="navbar-title" href="/">PCIT Project</a>
			</div>
			`;

		}else{
			file_data += `
		<div id="navbar-fader">
			<div class="navbar-img-box"><img class="navbar-img" src="/assets/Logo.png" alt="PCIT Project Logo"></div>
			<a class="navbar-title" href="/">PCIT Project</a>
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
		<img id="home-splash-img" src="/assets/LogoBig.png" alt="PCIT Project Logo">
		<h1 id="home-splash-title">PCIT Project</h1>
		<h2 id="home-splash-title2">Panther Compiler Infrastructure and Toolchain</h2>
	</div>
	<script src="/assets/home_script.js"></script>
		`;
	}

	file_data += "\n\n\t<br><div class=\"context\">\n";

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

	file_data += "<br/><br/>";
	file_data += this.body;

	file_data += `\t</div>

	<div class="footer">
		<p style="color: #878481;">Page Last Updated: ${this.last_updated_str}</p>
		<p style="color: #878481;">© 2023-${new Date().getFullYear()} <a href="/site/about.html">PCIT Project Team</a>. All rights reserved.</p>
	</div>

</body>
<script src="/assets/script.js"></script>

<script src="/assets/font-awesome/fontawesome.min.js"></script>
<script src="/assets/font-awesome/solid.min.js"></script>
<script src="/assets/font-awesome/brands.min.js"></script>
</html>`;

		fs.writeFileSync("../site/" + this.path, file_data);
		console.log(`Generated page \x1b[35m(${this.title})\x1b[0m: \x1b[33m"${this.path}"\x1b[0m`);
	}
}

exports.Language = Language;
exports.Page = Page;
exports.page_list = page_list;