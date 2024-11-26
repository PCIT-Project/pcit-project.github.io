//////////////////////////////////////////////////////////////////////
//                                                                  //
// Part of PCIT, under the Apache License v2.0                      //
// You may not use this file except in compliance with the License. //
// See `http://www.apache.org/licenses/LICENSE-2.0` for info        //
//                                                                  //
//////////////////////////////////////////////////////////////////////



var hamburger_dropdown = document.getElementsByClassName("hamburger-dropdown")[0];
function make_sure_hamburger_dropdown_is_set(){
	while(hamburger_dropdown === undefined){
		hamburger_dropdown = document.getElementsByClassName("hamburger-dropdown")[0];
	}
}


var hamburger_opened = false;
var may_toggle_hamburger = true;

function close_hamburger(){
	hamburger_dropdown.style.display = "none"
	hamburger_opened = false;
}

function open_hamburger(){
	hamburger_dropdown.style.display = "block"
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

function toggle_hamburger(){
	if(!may_toggle_hamburger){ return; }
	may_toggle_hamburger = false;

	if(hamburger_opened){
		close_hamburger();
	}else{
		open_hamburger();
	}

	setTimeout(()=>{ may_toggle_hamburger = true; },250);
}