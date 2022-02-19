var localStoragePrototype = {
  get: function() { return localStorage.getItem(this.key); },
  set: function(str) { localStorage.setItem(this.key, str); },
  clear: function() { localStorage.setItem(this.key, ""); }
};

var storagePrototype = Object.create(localStoragePrototype);
  
storagePrototype.get = function(callback) {
  var storage = localStoragePrototype.get.call(this);
  if (callback && typeof callback === "function") {
      return callback(storage);
  } else {
      return storage;
  }
};
storagePrototype.set = function(storage, callback) {
  var storageString;
  if (callback && typeof callback === "function") {
      storageString = callback(storage);
  } else {
      storageString = storage.toString();
  }
  localStoragePrototype.set.call(this, storageString); 
};

var getStorage = function(key) {
  var t = Object.create(storagePrototype);
  t.key = key;
  return t;
};