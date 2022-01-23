"use strict";
var createSlideshow = function () {// object 
    //private variables and functions
    var timer, play = true, speed = 2000;

    var nodes = { image: null, caption: null };//boject    
    var img = { cache: [], counter: 0 };//object 

    var stopSlideShow = function () { clearInterval(timer); }; // stop run time 
    var displayNextImage = function () {
        img.counter = ++img.counter % img.cache.length; // couter = ++couter % length of cache / couter(1) = 2 % 3 = 1 
        var image = img.cache[img.counter];
        nodes.image.src = image.src;
        nodes.caption.firstChild.nodeValue = image.title;
    };
    var setPlayText = function (btn) {
        btn.value = (play) ? "Resume" : "Pause";
    };

    //public methods that have access to private variables and functions
    return {
        loadImages: function (slides) {
            var image;
            for (var i = 0; i < slides.length; i++) { // this loop to load 
                image = new Image();// create a object image
                image.src = "images/" + slides[i].href;// path image + tail count i and set href for image tag
                image.title = slides[i].title;// sign slide element i for title of image
                img.cache.push(image); // push image to cache array
            }
            return this;
        },
        startSlideShow: function () {
            if (arguments.length === 2) {
                nodes.image = arguments[0];
                nodes.caption = arguments[1];
            }
            timer = setInterval(displayNextImage, speed);
            return this;
        },
        createToggleHandler: function () {
            var me = this;
            // closure to be used as the click event handler
            return function () {
                // 'this' is the clicked button; 'me' is the object literal
                if (play) { stopSlideShow(); } else { me.startSlideShow(); }
                setPlayText(this);
                play = !play; //toggle play flag
            };
        },

        getSpeed: function () {
            return speed;
        },

        setSpeed: function (newSpeed) {
            if (isNaN(newSpeed)) {
                alert("Must be number");
            } else if (newSpeed < 2000) {
                alert("Must be greater than or equal 2000 ");
            } else {
                speed = newSpeed;
            }
        },
        stopSlideShow: function () { clearInterval(timer); }
    };
};