"use strict";
myapp.prototype = {
    get: function () {
      var storageItem = localStorage.getItem(this.key) || "";
      return storageItem === "" ? [] : storageItem.split("|");
    },
    set: function (arr) {
      if (Array.isArray(arr)) {
        localStorage.setItem(this.key, arr.join("|"));
      }
    },
    clear: function () {
      localStorage.removeItem(this.key);
    },
  };
  
  myapp.storage = function (key) {
    var storage = Object.create(myapp.prototype);
    storage.key = key;
    return storage;
  };