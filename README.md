# PCIT Project Website

This is the repository containing the PCIT Project website ([www.pcitproject.org](https://www.pcitproject.org)). It also contains all of the code required to generate the site as well as the extra assets that it loads.


## Generating the site
To generate the site, navigate to the `generator` directory, and run `node ./generator.js`. The generated site is in the `site` directory. However, the repository comes with the site already generated.

While working, you can add the command-line argument `-quick-date` to always use today as the last updated date. However, make sure to run the generator without `-quick-date` before commiting. To help you remember, the progress bar when using `-quick-date` is cyan instead of green.


### Added new pages to the site
To add a new page to the site, create a new file in `/generator/page_generators`. A good starting place is copying the contents of `404.js`. The `Page` class is the entire API to generate pages. The `html` module gives you some helpers for generating HTML code. The To get your page actually generating, go into `/generator/generator.js`, and in the "page generators" section add a line `require("./page_generators/MY_NEW_PAGE.js")`.