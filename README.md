# PCIT Project Website

To see the website, here is the [link to the home page](https://pcit-project.github.io/site/home.html).


## Generating the site
To generate the site, navigate to the `generator` directory, and run `node ./generator.js`. The generated site is in the `site` directory. However, the repository comes with the site already generated.

### Added new pages to the site
To add a new page to the site, create a new file in `/generator/page_generators`. A good starting place is copying the contents of `404.js`. The `Page` class is the entire API to generate pages, and the `html` module gives you some helpers for generating HTML code. To get your page actually generating, go into `/generator/generator.js`, and in the "page generators" section add a line `require("./page_generators/MY_NEW_PAGE.js")`.