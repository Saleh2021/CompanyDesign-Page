function openNav(){
    //show if less than 951 showBar
    var x = window.matchMedia("(max-width: 951px)")
    if (x.matches){
        document.getElementById("lef").style.width="26rem";
    document.getElementById("close").style.visibility="visible";
    

    }else{//hide top of sidebar when over
        document.getElementById("close").style.visibility="hidden";
        
    }
    
    x.addListener(openNav)
    
    
 
}
function closeNav(){
    // hide bar when clicking at the top of sidebar
    var x = window.matchMedia("(max-width: 951px)")
    if (x.matches){
        document.getElementById("lef").style.width="0rem";
        
    }else{//show back when stretching
        document.getElementById("lef").style.width="26rem";
        
    }
    
    x.addListener(closeNav)
    
}
//Overlay
function on() {
    document.getElementById("overlay").style.display = "block";
  }
  //hide overlay and sideBar when clicking anywhere
  function off() {
    document.getElementById("overlay").style.display = "none";
    closeNav()
  }