"use strict";
    myapp.prototype.localStoragePrototype = {
    get: function() { return localStorage.getItem(this.key); },
    set: function(str) { localStorage.setItem(this.key, str); },
    clear: function() { localStorage.setItem(this.key, ""); }
};

var stringArrayStoragePrototype = Object.create(myapp.prototype.localStoragePrototype); 
stringArrayStoragePrototype.get = function() {
    var str = myapp.prototype.localStoragePrototype.get.call(this) || "";
    return (str === "")? []: str.split("|");
};
stringArrayStoragePrototype.set = function(arr) {
    if (Array.isArray(arr)) {
        var str = arr.join("|"); 
        myapp.prototype.localStoragePrototype.set.call(this, str);
    }
};

myapp.storage.getTaskStorage = function(key) {
    var storage = Object.create(stringArrayStoragePrototype); 
    storage.key = key;                               
    return storage;
};
