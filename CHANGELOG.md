# Change Log

<!---------------------------------->
<a name="v0.0.51.0"></a>
## v0.0.51.0

### Panther Documentation
- Added "Structs" page
- Added to "Functions" page that `this` parameters can now be `in`
- Edited ABI Note of `in` parameters on "Functions" page for readability/clarity


<!---------------------------------->
<a name="v0.0.50.0"></a>
## v0.0.50.0
- Added warning that building on Windows MSVC 2026 (v145) on a optimized build will fail
- Added `CWChar` to Panther syntax highlighting
- Added `wchar_t` to C/C++ syntax highlighting

### Panther Documentation
- Added Character Escape Codes page
- Added `CWChar` to primitive type documentation
- Updated interface code examples to reflect the change to interface maps
- Fixed literals documentation having incorrect types for string literals


<!---------------------------------->
<a name="v0.0.49.0"></a>
## v0.0.49.0

### Panther Documentation
- Added `@getTypeID`, `@arrayElementTypeID`, and `@arrayRefElementTypeID`
- Updated `@numBytes` and `@numBits` to include name change and `INCLUDE_PADDING`
- Updated interface code examples to reflect the change from interface pointers to polymorphic interface references


<!---------------------------------->
<a name="v0.0.48.0"></a>
## v0.0.48.0
- Made changes to documentation to `in` parameters to reflect changes
- Made changes to names of various terms


<!---------------------------------->
<a name="v0.0.47.0"></a>
## v0.0.47.0
- Added to `@eq` and `@neq` of Panther documentation that it supports pointers


<!---------------------------------->
<a name="v0.0.46.0"></a>
## v0.0.46.0
- Updated pages saying that Panther is a systems programming language (from a general purpose programming language)


<!---------------------------------->
<a name="v0.0.45.0"></a>
## v0.0.45.0
- Added new and improved examples on the Panther Programming Language page
- Added "No hidden allocations" to Panther Programming Language page
- Added syntax highlighting for keywords in Panther
	- `break`
	- `continue`
	- `new`


<!---------------------------------->
<a name="v0.0.44.0"></a>
## v0.0.44.0
- Added "Building LLVM" to search
- Updated build information to changes in LLVM build, and added extra info


<!---------------------------------->
<a name="v0.0.43.0"></a>
## v0.0.43.0
- Added the Interfaces page to Panther documentation
- Fixed syntax highlighting for Panther
	- `struct`
	- `interface`
	- `impl`
- Fixed alphabetization of Panther documentation home page


<!---------------------------------->
<a name="v0.0.42.0"></a>
## v0.0.42.0
- Added to the Functions page of Panther documentation
	- Simplified syntax section
	- Added info on function overloading
	- Added reference to operator overloading


<!---------------------------------->
<a name="v0.0.41.0"></a>
## v0.0.41.0
- Added to the Functions page of Panther documentation
	- ABI notes about erroring functions
	- Syntax for template functions
	- Example for a template function


<!---------------------------------->
<a name="v0.0.40.0"></a>
## v0.0.40.0
- Added Functions page of Panther documentation
- Improved searchability of Panther operators
- Fixed search terms that contain word "|"
- Fixed highlighted in Panther code snippets Panther
	- `error`
	- `try`
	- `...`


<!---------------------------------->
<a name="v0.0.39.0"></a>
## v0.0.39.0
- Added Primitive Types page of Panther documentation
- Added Operators page of Panther documentation
- Added more explainer text to the Intrinsics page of Panther documentation
- Added more explainer text to the Panther Documentation page
- Changed documentation for Panther `@shl`, `@shlSat`, and `@shr` to reflect removal of `@bitWidth` and addition of `@numBits`
- Made tables scrollable on overflow
- Fixed highlighted in Panther code snippets Panther
	- type `ISize`
	- operator `.*`
	- operator `.?`
	- optional type qualifier (`?`)
	- operator `forward`


<!---------------------------------->
<a name="v0.0.38.0"></a>
## v0.0.38.0
- Added breadcrumbs
- Added auto-focus on the text-box on the search page on a desktop
- Added rounded corners to highlighted search targets
- Added article structured data for devlogs
- Changed "Devlog" to "Devlogs" (where appropriate)


<!---------------------------------->
<a name="v0.0.37.2"></a>
## v0.0.37.2
- Fixed Bitwise Intrinsics page of Panther documentation having the UB fo `MAY_WRAP` wrong for `@shl` and `@shr`


<!---------------------------------->
<a name="v0.0.37.1"></a>
## v0.0.37.1
- Removed `@and` from the Comparative Intrinsics page of Panther documentation


<!---------------------------------->
<a name="v0.0.37.0"></a>
## v0.0.37.0
- Updated home page to reflect changes in [Panther-std v0.0.2.0](https://github.com/PCIT-Project/Panther-std/blob/main/CHANGELOG.md#v0.0.2.0)


<!---------------------------------->
<a name="v0.0.36.0"></a>
## v0.0.36.0
- Updated Panther type conversion intrinsics documentation to reflect changes in [PCIT v0.0.118.0](https://github.com/PCIT-Project/PCIT-CPP/blob/main/CHANGELOG.md#v0.0.118.0)


<!---------------------------------->
<a name="v0.0.35.0"></a>
## v0.0.35.0
- Updated PIR documentation page to reflect changes in [PCIT v0.0.117.0](https://github.com/PCIT-Project/PCIT-CPP/blob/main/CHANGELOG.md#v0.0.117.0)
	- `@branch` -> `@jump`
	- `@condBranch` -> `@branch`


<!---------------------------------->
<a name="v0.0.34.0"></a>
## v0.0.34.0
- Added "Intrinsic" pages to Panther documentation
- Fixed syntax highlighting for `!` for Panther, C, and C++
- Fixed selection color for inline code snippets
- Undid deferring loading of Font-Awesome as it	was causing flash of the page rendered without CSS


<!---------------------------------->
<a name="v0.0.33.0"></a>
## v0.0.33.0
- Updated home page to reflect change in licensing for the Panther programming language standard library


<!---------------------------------->
<a name="v0.0.32.0"></a>
## v0.0.32.0
- Updated `#runtime` to be `#rt` to reflect the change in the Panther language
- Added disclaimer to Panther page about the example being for the old implementation of the Panther compiler


<!---------------------------------->
<a name="v0.0.31.1"></a>
## v0.0.31.1
- Updated code example on Panther home page to reflect change in operator move


<!---------------------------------->
<a name="v0.0.31.0"></a>
## v0.0.31.0
- Added image alt-texts
- Deferred loading of Font-Awesome
- Changed various links text to be more descriptive
- Added deferred loading for larger files


<!---------------------------------->
<a name="v0.0.30.1"></a>
## v0.0.30.1
- Fixed paths to be lower-case


<!---------------------------------->
<a name="v0.0.30.0"></a>
## v0.0.30.0
- Added the "Variables" page to Panther Documentation
- Fixed syntax highlighting erroring when ending on a line comment
- Fixed code snippet line sizing on mobile in landscape
- Removed "destructive move" from Panther documentation


<!---------------------------------->
<a name="v0.0.29.0"></a>
## v0.0.29.0
- Removed the "destructive-movable-concrete-const" value stage


<!---------------------------------->
<a name="v0.0.28.0"></a>
## v0.0.28.0
- Added the "Fluid Values" page to Panther documentation


<!---------------------------------->
<a name="v0.0.27.2"></a>
## v0.0.27.2
- Changed link for PIR and PLNK


<!---------------------------------->
<a name="v0.0.27.1"></a>
## v0.0.27.1
- Made code snippets in PIR documentation page reflecting change to the output of the PIR test program as affected by fixes in [PCIT v0.0.96.0](https://github.com/PCIT-Project/PCIT-CPP/blob/main/CHANGELOG.md#v0.0.96.0)
- Fixed links on home page pointing to the wrong location
- Fixed page last updated date not being consistently YYYY-MM-DD


<!---------------------------------->
<a name="v0.0.27.0"></a>
## v0.0.27.0
- Added Building PCIT Project Software page
- Added "Page Last Updated" to bottom of all pages
- Added sitemap
- Added padding around info and warning boxes
- Added support for anchor highlighting within the same page


<!---------------------------------->
<a name="v0.0.26.1"></a>
## v0.0.26.1
- Reorganized some of the Panther Value Stages page
- Fixed mistakes in Panther Value Stages page


<!---------------------------------->
<a name="v0.0.26.0"></a>
## v0.0.26.0
- Removed `/index.html` and moved `/site/home.html` to `index.html`
	- This is for improved SEO based on a report from google search console 


<!---------------------------------->
<a name="v0.0.25.0"></a>
## v0.0.25.0
- Added robots.txt
- Fixed spacing at top of info boxes on the home page and documentation page


<!---------------------------------->
<a name="v0.0.24.0"></a>
## v0.0.24.0
- Added temporary highlighting of search target
- Added search targets to the different types of literals in the Literals page in Panther documentation 
- Improved zooming on desktop
- Fixed hamburger button resizing when zooming
- Fixed mistake in the Literals page in Panther documentation that in float literals underscore separator section


<!---------------------------------->
<a name="v0.0.23.0"></a>
## v0.0.23.0
- Added "Literals" page to Panther documentation
- Fixed syntax highlighting of character literals for Panther and C++
- Fixed syntax highlighting of non-base-10 integer literals for Panther and C++
- Fixed syntax highlighting of underscores in integer and float literals for Panther
- Fixed syntax highlighting of scientific notation in integer and float literals for Panther


<!---------------------------------->
<a name="v0.0.22.0"></a>
## v0.0.22.0
- Added categories to pages
- Switched Downloads and Devlog buttons in header
- Various tweaks to a few pages


<!---------------------------------->
<a name="v0.0.21.1"></a>
## v0.0.21.1
- Updated site to switch `constexpr` and `comptime` as their definitions have swapped
- Fixed mistakes in `Panther Value Stages` page


<!---------------------------------->
<a name="v0.0.21.0"></a>
## v0.0.21.0
- Added page descriptions
- Added page metadata


<!---------------------------------->
<a name="v0.0.20.2"></a>
## v0.0.20.2
- Fixed wrong version on PIR Documentation page
- Fixed alignment of assembly code snipped on PIR Documentation page


<!---------------------------------->
<a name="v0.0.20.1"></a>
## v0.0.20.1
- Fixed link to PIR documentation on home page having the wrong link when the site is hosted on certain platforms


<!---------------------------------->
<a name="v0.0.20.0"></a>
## v0.0.20.0
- Added support for code snippets of PIR, LLVMIR, and x86 assembly (Intel)
- Added to PIR documentation page to show of testing code syntax / functionality
- Added feedback that the code snippet copy button was clicked
- Added automatic close of hamburger menu
- Fixed code snippet copy button not working when there is a `\` in the code snippet
- Fixed scaling of header for different resolutions and zoom levels
- Fixed scaling of code snippet on mobile mode when zooming
- Fixed spacing between code snippet and code snippet header on mobile mode when zooming


<!---------------------------------->
<a name="v0.0.19.2"></a>
## v0.0.19.2
- Fixed "search" tab on navbar on mobile not having the correct link


<!---------------------------------->
<a name="v0.0.19.1"></a>
## v0.0.19.1
- Fixed code snippet titles not showing the correct title
- Fixed Terminal Diagnostic code snippets not properly highlighting
- Small tweak to 404 page text


<!---------------------------------->
<a name="v0.0.19.0"></a>
## v0.0.19.0
- Added functionality to search page
- Fixed scrolling to anchors not compensating for header


<!---------------------------------->
<a name="v0.0.18.0"></a>
## v0.0.18.0
- Added the "Uninitialized" page to Panther documentation
- Changed the text of a few terms


<!---------------------------------->
<a name="v0.0.17.1"></a>
## v0.0.17.1
- Fixed grammar mistakes and added some to the "Undefined Behavior" page of Panther documentation


<!---------------------------------->
<a name="v0.0.17.0"></a>
## v0.0.17.0
- Added "Modules" page to Panther documentation
- Made slight modification to "When Conditionals" page in Panther documentation


<!---------------------------------->
<a name="v0.0.16.0"></a>
## v0.0.16.0
- Added devlog "Dependencies V2"
- Added term "when conditionals"


<!---------------------------------->
<a name="v0.0.15.1"></a>
## v0.0.15.1
- Fixed indentation in code blocks when in landscape on mobile
- Fixed inline code blocks in README


<!---------------------------------->
<a name="v0.0.15.0"></a>
## v0.0.15.0
- Added "When Conditionals" page to Panther documentation
- Fixed missing links from terms `comptime`, `constexpr`, and `runtime`	


<!---------------------------------->
<a name="v0.0.14.0"></a>
## v0.0.14.0
- Created new 404 page


<!---------------------------------->
<a name="v0.0.13.1"></a>
## v0.0.13.1
- Updated README


<!---------------------------------->
<a name="v0.0.13.0"></a>
## v0.0.13.0
- Added some examples of comptime and constexpr values to the Panther documentation of Value Stages


<!---------------------------------->
<a name="v0.0.12.0"></a>
## v0.0.12.0
- Added "Value Stages" page to Panther documentation


<!---------------------------------->
<a name="v0.0.11.0"></a>
## v0.0.11.0
- Added `concrete-forwardable` to Panther value categories page
- Switched `Odin` to `Carbon` in list of languages that Panther is an alternative to on Panther home page


<!---------------------------------->
<a name="v0.0.10.0"></a>
## v0.0.10.0
- Added change to name of `destructive-movable-concrete-const` Panther value category (from `concrete-const-movable`)
- Fixed various mistakes in Panther documentation value categories page


<!---------------------------------->
<a name="v0.0.9.0"></a>
## v0.0.9.0
- Added "Undefined Behavior" page to Panther documentation
- Added support for `%`, `+%`, `-%`, and `*%` in Panther code snippet syntax highlighting


<!---------------------------------->
<a name="v0.0.8.1"></a>
## v0.0.8.1
- Removed the word "compiled" from the Panther tagline on the home page


<!---------------------------------->
<a name="v0.0.8.0"></a>
## v0.0.8.0
- Added "Value Categories" page to Panther documentation
- Improved the Panther home page
	- Added the "Versatile Usage" section (merged with the C/C++ interoperability section)
	- Added the "Learn More" section
- Improved the "Important Note" on the home page
- Added terms to the generator


<!---------------------------------->
<a name="v0.0.7.1"></a>
## v0.0.7.1
- Fixed extra `/` at end of LinkedIn link on about page


<!---------------------------------->
<a name="v0.0.7.0"></a>
## v0.0.7.0
- Changed `News` to `Devlog`
- Added devlog story `New Systems Require Major Changes`
- Added `Search` Tab
- Adjusted margins from 20% to 25%
- Adjusted navbar title fade transition from 0.5s to 0.75s
- Fixed `News` tab going to `Downloads`
- Fixed highlighting of `->` Panther code snippet not being red 


<!---------------------------------->
<a name="v0.0.6.0"></a>
## v0.0.6.0
- Added colors to console output of generator script
- Added automatic update of copyright year to the year it was generated
- Minor updates to some text


<!---------------------------------->
<a name="v0.0.5.0"></a>
## v0.0.5.0
- Added pages:
	- Documentation
	- Tutorials
	- Downloads
	- News
	- About
- Added transition on dropdown
- Added footer
- Added home page splash
- Updated licensing to use Apache License v2.0 with LLVM and PCIT exceptions
- Fixed typos
- Fixed links being the wrong color
- Fixed header of Panther code snippet being the wrong color


<!---------------------------------->
<a name="v0.0.4.5"></a>
## v0.0.4.5
- Fixed font size of code snippet on mobile


<!---------------------------------->
<a name="v0.0.4.4"></a>
## v0.0.4.4
- Added to README on how to create new pages 
- Fixed code snippet without line numbers body not being the correct width at all zoom levels on desktop
- Fixed font size of code snippets not changing with zoom levels
- Fixed generator getting stuck when highlighting C++ and encountering `<` or `>`
- Fixed generator getting stuck when highlighting C++ or Panther and encountering a `\` in a string


<!---------------------------------->
<a name="v0.0.4.3"></a>
## v0.0.4.3
- Fixed code snippet line numbers not lining up correctly on mobile when landscape
- Fixed code snippet body not being the correct width at all zoom levels on desktop


<!---------------------------------->
<a name="v0.0.4.2"></a>
## v0.0.4.2
- Made navbar not selectable


<!---------------------------------->
<a name="v0.0.4.1"></a>
## v0.0.4.1
- Improved README


<!---------------------------------->
<a name="v0.0.4.0"></a>
## v0.0.4.0
- Added generator scripting
- Added fancy code blocks
	- Supports `Panther`, `C++`, `C`, `Terminal`, and `Text`
	- Automatic syntax highlighting
	- Line indicators
	- Copy button
- Added custom 404 page


<!---------------------------------->
<a name="v0.0.3.1"></a>
## v0.0.3.1
- Updated index.html to have name of PIR


<!---------------------------------->
<a name="v0.0.3.0"></a>
## v0.0.3.0
- Added hamburger dropdown in header on mobile 
- Added GitHub logo next to `Source Code` button in header
- Fixed the mobile landscape experience


<!---------------------------------->
<a name="v0.0.2.0"></a>
## v0.0.2.0
- Added mobile support


<!---------------------------------->
<a name="v0.0.1.0"></a>
## v0.0.1.0
- Added homepage
- Added Panther page


<!---------------------------------->
<a name="v0.0.0.0"></a>
## v0.0.0.0
- Initial Commit