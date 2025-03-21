//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



var hamburger_dropdown = document.getElementsByClassName("hamburger-dropdown")[0];
function make_sure_hamburger_dropdown_is_set(){
	while(hamburger_dropdown === undefined){
		hamburger_dropdown = document.getElementsByClassName("hamburger-dropdown")[0];
	}
}


var hamburger_opened = false;
var may_toggle_hamburger = true;

function close_hamburger(){
	hamburger_dropdown.style.maxHeight = "0px";
	hamburger_opened = false;
}

function open_hamburger(){
	// each item is 2.5em tall, and there are 6 item
	// the header is 12vmin
	// For some reason without the `+ 30px` the final item gets cutoff in landscape mode on mobile
	hamburger_dropdown.style.maxHeight = "calc(15em + 12vmin + 30px)";
	hamburger_opened = true;
}


// close hamburger if clicked off of it
document.addEventListener('click', (e)=>{
	make_sure_hamburger_dropdown_is_set();
    if(hamburger_opened && may_toggle_hamburger && !hamburger_dropdown.contains(e.target)){
    	close_hamburger();
    }
});

// close hamburger if page scrolled
document.addEventListener("scroll", (e)=>{
	make_sure_hamburger_dropdown_is_set();
	if(hamburger_opened && may_toggle_hamburger && !hamburger_dropdown.contains(e.target)){
		close_hamburger();
	}
});


// close hamburger if page zoom
window.onresize = (e)=>{
	make_sure_hamburger_dropdown_is_set();
	if(hamburger_opened && may_toggle_hamburger){
		close_hamburger();
	}
};

function toggle_hamburger(){
	if(!may_toggle_hamburger){ return; }
	may_toggle_hamburger = false;

	if(hamburger_opened){
		close_hamburger();
	}else{
		open_hamburger();
	}

	setTimeout(()=>{ may_toggle_hamburger = true; }, 250);
}




function highlight_target_anchor(){
	const target_anchor_name = window.location.hash.slice(1);
	if(target_anchor_name == ""){ return; }

	const target_anchor_elem = document.getElementById(target_anchor_name);
	if(target_anchor_elem == null){ return; }

	setTimeout(() => { target_anchor_elem.classList.add("anchor_highlighter"); }, 300);
}


window.onload = (e) => {
	highlight_target_anchor();
};