var $ = function(id) {
    return document.getElementById(id);
};

var arr = [];

// get n, m
var processEntries = function () {
    var rows = $('n').value;
    rows = parseInt(rows);
    var cols = $('m').value;
    cols = parseInt(cols);

    arr = new Array(rows)
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array(cols)
        for (var j = 0; j < cols; j++) {
            arr[i][j] = null;
        }
    }
    addValue_arr(arr);
    displayScreen_arr(arr);
    sumElements_arr(arr);
}



var addValue_arr = function () {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            arr[i][j] = prompt('Giá trị của phần tử arr' + '[' + i + ']' + '[' + j + ']' );
        }
    }
    // console.log(arr)
}

var displayScreen_arr = function () {     
    for (i = 0; i < arr.length; i++) {
        $('arr_list').value += arr[i] + '\n';
    }
}

var sumElements_arr = function () {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            arr[i][j] = parseInt(arr[i][j]);
            sum += arr[i][j];
        }
    }
    $('arr_list').value += "\n\nsum = " + sum;
}

var findElement_arr = function () {
    var x = prompt('Nhập số cần tìm')
    x = parseInt(x)

    var find = arr.find(function (currentValue, index) {
        return currentValue.includes(x)
    })

    if (find) {
        alert('Có')
    } else {
        alert('Không')
    }
}

var formatSortNumber_arr = function () {
    arr.forEach(function (currentValue, index) {
        currentValue.sort(function (a, b) {
            return a - b
        });
    });
    $('arr_list').value = "";
    displayScreen_arr();
    sumElements_arr();
}

var formatSortString_arr = function () {
    arr.forEach(function (currentValue, index) {
        return currentValue.sort();
    });
}

var clear_arr = function () {
    arr.length = 0;  
    $('arr_list').value = "";
    $('n').focus();
}

window.onload = function () {
    $('calculate').onclick = processEntries;
    $('clear').onclick = clear_arr;
    $('find').onclick = findElement_arr;
    $('sort').onclick = formatSortNumber_arr;
    $('n').focus();
}