var $ = function(id) { return document.getElementById(id); };

// the event handler for the click event of each h2 element
var toggle = function() {
    var h2Elements = this;
    var iElements = h2Elements.firstChild;                  // clicked i tag
    var aElements = iElements.nextElementSibling;     
    var div = h2Elements.nextElementSibling;  // h2 tag's sibling div tag
    // toggle plus and minus image in h2 elements by adding or removing a class
    if (iElements.getAttribute("class") == "fas fa-plus") { 
        iElements.setAttribute("class", "fas fa-minus blue");
        aElements.setAttribute("class", "blue");
    } else { 
        // h2.setAttribute("class", "minus");
        iElements.setAttribute("class", "fas fa-plus");
        aElements.removeAttribute("class");
    }

    // toggle div visibility by adding or removing a class
    if (div.hasAttribute("class")) { 
        div.removeAttribute("class");
    } else { 
        div.setAttribute("class", "open"); 
    } 
};
var log = function(e) {
    console.log(e);
}
window.onload = function() {
    // get the a tags
    var faqs = $("faqs");
    // var aElements = faqs.getElementsByTagName("a");
    var h2Elements = faqs.getElementsByTagName("h2");
    
    // attach event handler for each h2 tag	    
    for (var i = 0; i < h2Elements.length; i++ ) {
        var h2 = h2Elements[i];
        var a = h2.lastChild;
        evt.attach(h2, "click", toggle);
        evt.attach(a, "click", evt.preventDefault)
        evt.attach(a, "click", log);
        evt.attach(a, "focus", log);
        evt.attach(a, "mouseover", log);
    	// aElements[i].onclick = toggle;
        // h2Elements[i].onclick = toggle;
    }
    // set focus on first <h2> tag
    // aElements[0].focus();  
    h2Elements[0].focus();     
};