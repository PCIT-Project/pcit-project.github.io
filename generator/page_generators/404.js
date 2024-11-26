const Page = require("../Page.js").Page;
const html = require("../html.js");

let home = new Page("404", "error404.html");

home.h1("<span style=\"color: #ee1111;\">" + html.santitize("<Error|W404>") + " The page you were looking for does not exist</span>");
home.generate();

