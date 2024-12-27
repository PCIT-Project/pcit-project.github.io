const Page = require("../../Page.js").Page;
const html = require("../../html.js");

let page = new Page("News", "news/news.html");

page.h1("News");

page.paragraph("Coming Soon...");

page.generate();

