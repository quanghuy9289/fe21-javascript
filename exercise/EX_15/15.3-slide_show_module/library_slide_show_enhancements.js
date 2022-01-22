"use strict";

(function (mod) {
    mod.changeCaption = function (i, newCaption) {
      var currentImage = mod.getImages[i];
      currentImage.title = newCaption;
      return mod;
    };
  })(myapp.slideshow);