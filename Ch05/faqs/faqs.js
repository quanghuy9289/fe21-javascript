"use strict";
var $ = function (id) { return document.getElementById(id); };

// the event handler for the click event of each h2 element
var toggle = function () {
    var a = this;
    var div = a.parentNode.nextElementSibling;  // trỏ đến node cha-parent(h2) để dùng nexE.. trỏ đến node div

    // toggle plus and minus image in h2 elements by adding or removing a class
    if (a.hasAttribute("class")) {
        // a.removeAttribute("class");
        a.className = "";
    } else {
        // a.setAttribute("class", "minus"); 
        a.className = "minus";

    }

    // toggle div visibility by adding or removing a class
    if (div.hasAttribute("class")) {
        // div.removeAttribute("class");
        div.className = "";
    } else {
        // div.setAttribute("class", "open");
        div.className = "open";
    }
};

window.onload = function () {
    // get the h2 tags
    var faqs = $("faqs");
    var aElements = faqs.getElementsByTagName("a");

    // attach event handler for each h2 tag	    
    for (var i = 0; i < aElements.length; i++) {
        aElements[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    aElements[0].firstChild.focus();
};
