var $ = function(id) {
  return document.getElementById(id);
}
window.onload = function() {
  var slides = [
      {href:"img/gear.jpg", title:"Fishing Gear"},
      {href:"img/plane.jpg", title:"Bush Plane"},
      {href:"img/release.jpg", title:"Catch and Release"},
      {href:"img/lunch.jpg", title:"Streamside Lunch"},
      {href:"img/dusk.jpg", title:"Day's End"}
  ];
  slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));
  evt.attach($("play_pause"), "click", slideshow.togglePlay);
  evt.attach($("change_speed"), "click", slideshow.changeSpeed);
}