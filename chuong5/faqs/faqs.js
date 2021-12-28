"use strict";
var $ = function(id) { return document.getElementById(id); };

// the event handler for the click event of each a element
var toggle = function() {
    var a = this;//click a tag
    var h2 = a.parentNode;          // get parent element of node a              
    var div = h2.nextElementSibling;  // h2 tag's sibling div tag

    // toggle plus and minus image in h2 elements by adding or removing a class
    // if (h2.hasAttribute("class")) { 
    //     h2.removeAttribute("class");	
    // } else { 
    //     h2.setAttribute("class", "minus"); 
    // }

    // toggle div visibility by adding or removing a class
    // if (div.hasAttribute("class")) { 
    //     div.removeAttribute("class");
    // } else { 
    //     div.setAttribute("class", "open"); 
    // } 
    if (h2.className == "") {
        h2.className = "minus";
    } 
    else {
        h2.className = "";
    }
    if(div.className == "") {
        div.className = "open";
    }
    else{
        div.className = "";
    }
};

window.onload = function() {
    // get the a tags
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("a");
    
    // attach event handler for each a tag	    
    for (var i = 0; i < h2Elements.length; i++ ) {
    	h2Elements[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    h2Elements[0].firstChild.focus();       
};
