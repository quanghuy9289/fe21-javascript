"use strict";
var $ = function (id) { return document.getElementById(id); };

// create the slideshow object 
var slideshow = createSlideshow();
// createSlideshow.getSpeed())
var changeSpeed = function () {
    var msg = 'Please enter a new speed in milliseconds (200 min).';
    var milliseconds = parseInt(prompt(msg, slideshow.getSpeed()));
    slideshow.setSpeed(milliseconds);
    slideshow.stopSlideShow();
    slideshow.startSlideShow();
};

window.onload = function () {
    var slides = [
        { href: "gear.jpg", title: "Fishing Gear" },
        { href: "plane.jpg", title: "Bush Plane" },
        { href: "release.jpg", title: "Catch and Release" },
        { href: "lunch.jpg", title: "Streamside Lunch" },
        { href: "dusk.jpg", title: "Day's End" }
    ];
    slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));
    $("play_pause").onclick = slideshow.createToggleHandler();
    $("change_speed").onclick = changeSpeed;
    slideshow.nodes = null;
};
