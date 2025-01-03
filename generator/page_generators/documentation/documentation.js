const Page = require("../../Page.js").Page;
const html = require("../../html.js");

let page = new Page("Documentation", "documentation/documentation.html");

page.h1("Documentation");
page.text("Coming Soon...", "font-style: italic;");

page.generate();

