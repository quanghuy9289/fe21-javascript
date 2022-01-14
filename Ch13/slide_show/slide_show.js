"use strict";
var $ = function (id) { return document.getElementById(id); };

// var changeSpeed = function (e) {
//     // code to change the slide show speed goes here
//     var milliseconds = prompt("Current speed is: " + slideshow.speed + "\nEnter new slide show speed", "2000");
//     if (isNaN(milliseconds)) {
//         alert("Must be number");
//     } else
//         if (milliseconds < 0) {
//             alert("Must be greater than 0 ");
//         } else {
//             slideshow.speed = milliseconds;
//             slideshow.stopSlideShow();
//             slideshow.startSlideShow();
//         }
// };

window.onload = function () {
    var slides = [
        { href: "images/gear.jpg", title: "Fishing Gear" },
        { href: "images/plane.jpg", title: "Bush Plane" },
        { href: "images/release.jpg", title: "Catch and Release" },
        { href: "images/lunch.jpg", title: "Streamside Lunch" },
        { href: "images/dusk.jpg", title: "Day's End" }
    ];

    slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));

    evt.attach($("play_pause"), "click", slideshow.togglePlay);
    $("change_speed").onclick = slideshow.changeSpeed;
};