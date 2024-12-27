//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



document.addEventListener("scroll", () => {
    const home_spash = document.getElementById("home-splash");
    const navbar_fader = document.getElementById("navbar-fader");

    if(home_spash.getBoundingClientRect().bottom <= 100){
        navbar_fader.classList.add("navbar-fader-visible");
        navbar_fader.classList.remove("navbar-fader-hidden");
    }else{
        navbar_fader.classList.add("navbar-fader-hidden");
        navbar_fader.classList.remove("navbar-fader-visible");
    }
});