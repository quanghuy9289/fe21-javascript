"use strict";

(function(mod) {
    mod.changeSpeed = function(speed) {
        var newSpeed = parseInt(speed);
        this.speed = (newSpeed < 200 || isNaN(newSpeed))? 2000: newSpeed;
        return this; // so method can be chained
    };
})(myapp.slideshow); 