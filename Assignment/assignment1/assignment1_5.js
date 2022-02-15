"use strict"
var tong = 0;
(function cal() {
    for (let index = 0; index < 50; index++) {
        tong += index;
    }
    console.log(tong);
    return tong;
})()