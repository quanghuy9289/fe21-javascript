"use strict";
window.onload = function () {
  const $ = function (id) {
    return document.getElementById(id);
  };

  const slides = [
    { href: "gear.jpg", title: "Fishing Gear" },
    { href: "plane.jpg", title: "Bush Plane" },
    { href: "release.jpg", title: "Catch and Release" },
    { href: "lunch.jpg", title: "Streamside Lunch" },
    { href: "dusk.jpg", title: "Day's End" },
  ];


  myapp.slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));

  $("play_pause").onclick = myapp.slideshow.createToggleHandler();
  $("change_speed").onclick = function () {
    const msg = "Current speed is ".concat(
      myapp.slideshow.getSpeed,
      " milliseconds.\n",
      "Please enter a new speed in milliseconds (200 min)."
    );
    const ms = prompt(msg, 2000);
    myapp.slideshow.changeSpeed(ms).startSlideShow();
  };
  $("change_caption").onclick = function () {
    const index = parseInt($("caption").title);
    const caption = prompt("Please enter a new caption.");
  };
};
