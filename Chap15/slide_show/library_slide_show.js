"use strict";
// create namespace
const myapp = {};

myapp.slideshow = (function () {
  // private variables and functions
  let timer,
    play = true,
    speed = 2000; // private speed variable
  const nodes = { image: null, caption: null };
  const img = { cache: [], counter: 0 }; // private img.cache array
  const stopSlideShow = function () {
    clearInterval(timer);
  };
  const displayNextImage = function () {
    img.counter = ++img.counter % img.cache.length;
    const image = img.cache[img.counter];
    const index = img.cache.indexOf(image); // get array index of the image object

    nodes.image.src = image.src;
    nodes.caption.firstChild.nodeValue = image.title;
    nodes.caption.title = index; // store index in caption span's title attribute
  };
  const setPlayText = function (btn) {
    btn.value = play ? "Resume" : "Pause";
  };
  // public slideshow object
  const slideshow = {
    loadImages: function (slides) {
      let image;
      for (let i = 0; i < slides.length; i++) {
        image = new Image();
        image.src = "images/" + slides[i].href;
        image.title = slides[i].title;
        img.cache.push(image);
      }
      return this;
    },
    startSlideShow: function () {
      if (arguments.length === 2) {
        nodes.image = arguments[0];
        nodes.caption = arguments[1];
      }
      stopSlideShow();
      timer = setInterval(displayNextImage, speed);
      return this;
    },
    changeSpeed: function (newSpeed) {
      const ns = parseInt(newSpeed);
      speed = ns < 200 || isNaN(ns) ? 2000 : ns;
      return this;
    },
    createToggleHandler: function () {
      const that = this;

      return function () {
        if (play) {
          stopSlideShow();
        } else {
          that.startSlideShow();
        }
        setPlayText(this);
        play = !play;
      };
    },
  };
  /*** Add code here to make read-only accessor properties that return ***
   *** the private speed variable and the img.cache array              ***/

  return slideshow;
})();
