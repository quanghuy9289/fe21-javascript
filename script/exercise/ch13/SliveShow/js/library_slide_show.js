"use strict";
var slideshow = {
    timer: null,
    nodes: {
        image: null,
        captionn: null
    },
    img: {
        cache: [],
        counter: 0
    },
    play: true,
    speed: 2000,
    loadImages: function(slides) {
        var image;
        for (var i in slides) {
            image = new Image();
            image.src = slides[i].href;
            image.title = slides[i].title;
            this.img.cache.push(image);
        }
        return this;
    },
    startSlideShow: function() {
        if (arguments.length === 2) { 
            this.nodes.image = arguments[0]; 
            this.nodes.caption = arguments[1];
        }
        this.timer = setInterval(this.displayNextImage.bind(this), this.speed);
        return this;
    },
    stopSlideShow: function() {
        clearInterval(this.timer);
        return this;
    },
    displayNextImage: function() {
        this.img.counter = ++this.img.counter % this.img.cache.length;
        var image = this.img.cache[this.img.counter];
        this.nodes.image.src = image.src;
        this.nodes.caption.firstChild.nodeValue = image.title;
    },
    setPlayText: function(a) {
        a.innerHTML = (this.play) ? "<i class='fas fa-play'></i>" : "<i class='fas fa-pause'></i>";
        // a.text = (this.play) ? "Resume" : "Pause";
        return this;
    },
    togglePlay: function(e) {
        if (slideshow.play) {
            slideshow.stopSlideShow().setPlayText(this);
        } else {
            slideshow.startSlideShow().setPlayText(this);
        }
        slideshow.play = !slideshow.play;
        evt.preventDefault(e);
    },
    changeSpeed: function() {
        var milliseconds = prompt("Current speed is " + slideshow.speed + " milliseconds\nPlease enter a new speed in milliseconds")
        if (!isNaN(milliseconds) && milliseconds > 0 && milliseconds !== null) {
            slideshow.speed = milliseconds;
            if (slideshow.play) {
                slideshow.stopSlideShow().startSlideShow();
            } else {
                slideshow.stopSlideShow();
            }
        }
        // slideshow.stopSlideShow().startSlideShow();
        // return this;
    }
}