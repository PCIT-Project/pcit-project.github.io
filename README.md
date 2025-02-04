# PCIT Project Website

This is the repository containing the PCIT Project website ([www.pcitproject.org](https://www.pcitproject.org)). It also contains all of the code required to generate the site as well as the extra assets that it loads.


## Generating the site
To generate the site, navigate to the `generator` directory, and run `node ./generator.js`. The generated site is in the `site` directory. However, the repository comes with the site already generated.

### Added new pages to the site
To add a new page to the site, create a new file in `/generator/page_generators`. A good starting place is copying the contents of `404.js`. The `Page` class is the entire API to generate pages. The `html` module gives you some helpers for generating HTML code. The To get your page actually generating, go into `/generator/generator.js`, and in the "page generators" section add a line `require("./page_generators/MY_NEW_PAGE.js")`.