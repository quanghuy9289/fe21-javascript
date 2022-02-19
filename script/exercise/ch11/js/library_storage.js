var storagePrototype = {
    get: function() {
        var storage = localStorage.getItem(this.key) || "";
        if(storage === "") {
            return [];
        }else{
            return storage.split('|');
        }
    },
    set: function(arr) {
        if(Array.isArray(arr)){
            localStorage.setItem(this.key, arr.join('|'))
        }
    },
    clear: function() {
        localStorage.removeItem(this.key);
    }
}

var getTaskStorage = function(key) {
    var storage = Object.create(storagePrototype);
    storage.key = key;
    return storage;
}