"use strict";
const localStoragePrototype = {
  get: function () {
    return localStorage.getItem(this.key);
  },
  set: function (str) {
    localStorage.setItem(this.key, str);
  },
  clear: function () {
    localStorage.setItem(this.key, "");
  },
};

const stringArrayStoragePrototype = Object.create(localStoragePrototype);
stringArrayStoragePrototype.get = function () {
  const str = localStoragePrototype.get.call(this) || "";
  return str === "" ? [] : str.split("|");
};
stringArrayStoragePrototype.set = function (arr) {
  if (Array.isArray(arr)) {
    const str = arr.join("|");
    localStoragePrototype.set.call(this, str);
  }
};


const getTaskStorage = function (key) {
  const storage = Object.create(stringArrayStoragePrototype);
  storage.key = key;
  return storage;
};
