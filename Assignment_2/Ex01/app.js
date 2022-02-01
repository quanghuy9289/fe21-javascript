var $ = function(id) {
    return document.getElementById(id);
}
  
  var arr = [11, 15, -4, 0, 97, 18, -10, 7, 45, -36];
  
  var print = function() {
    return arr.join(", ");
};
  
  var findNum = function(number) {
    number = parseInt(prompt("Enter a number you want to find:"));
    if(isNaN(number)) {
      alert("Please enter a valid number")
    } else {
      if(arr.indexOf(number) > -1) {
        return number + " is exists in array";
    } else {
        return number + " is not exist in array";
    }
    }
};
  
  var findMax = function() {
    var max = arr[0];
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i];
    }
    return "Maximum number is: " + max;
  };
  
  var sumArr = function() {
    var sum = 0;
    for (var arrNum of arr) {
      sum += arrNum;
    }
    return "Sum of all number is: " + sum;
  };
  
  var sort = function() {
    var sortByDescending = function(a,b) {
      return b - a;
    }
    return arr.sort(sortByDescending).join(", ");
  };
  
  var menu = function() {
    var selected = $("select_number").value;
    switch(selected) {
      case "1": {
        $("display").innerHTML = print(arr);
        break;
      }
      case "2": {
        $("display").innerHTML = findNum();
        break;
      }
      case "3": {
        $("display").innerHTML = findMax();
        break;
      }
      case "4": {
        $("display").innerHTML = sumArr();
        break;
      }
      case "5": {
        $("display").innerHTML = sort();
        break;
      }
    };
  };
  
  window.onload = function() {
    $("run").onclick = menu;
}