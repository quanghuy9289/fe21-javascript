"use strict";

var localStoragePrototype = {
    get: function () {
        return localStorage.getItem(this.key);
    },
    set: function (str) {
        localStorage.setItem(this.key, str);
    },
    clear: function () {
        localStorage.removeItem(this.key,"");
    }
}
var stringArrayStoragePrototype = Object.create(localStoragePrototype); //stringArrayStoragePrototype inherit from localStoragePrototype

stringArrayStoragePrototype.get = function () {
    var reviver = function (key,value) {
        if(key == "date"){
            return new Date(value);
        }
        return value;
    }
    var str = localStoragePrototype.get.call(this) || "";
    return  (str === "") ? [] : JSON.parse(str,reviver);
};
stringArrayStoragePrototype.set = function (arr){
    if(Array.isArray(arr)){
        var str = JSON.stringify(arr); // nối các phần tử trong mảng lại thành một chuỗi để đẩy xuống localStorage
        localStoragePrototype.set.call(this, str);
    }
};
// constructor function
var getTaskStorage = function(key){
    var storage = Object.create(stringArrayStoragePrototype); // storage inherit from stringArrayStoragePrototype
    storage.key = key;
    return storage;
}