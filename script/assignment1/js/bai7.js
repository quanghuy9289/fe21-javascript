function $(id) {
return document.getElementById(id);
}


function getInfo() {
    var studentCode = $("codehs").value;
    var studentName = $("namehs").value;
    var studentAge = $("agehs").value;
    var html = "";
    var sex = "";
    var required = "Vui long nhap vao"
    isValid = true
    // checkcode
    if(studentCode == "") {
        $("check1").firstChild.nodeValue = required 
        isValid = false
    }else {
        $("check1").firstChild.nodeValue = "";
    }

    // checkName
    if(studentName == "") {
        $("check2").firstChild.nodeValue = required
        isValid = false
    }else {
        $("check2").firstChild.nodeValue = "";
    }

    // checkAge
    if(studentAge == "") {
        $("check3").firstChild.nodeValue = required
        isValid = false
    }else {
        $("check3").firstChild.nodeValue = "";
    }
    if($("sex1").checked) {
        sex = 'Nam'
    }
    if($("sex2").checked) {
        sex = 'Nu'
    }
        html += "<tr><td>Ma hoc sinh: </td><td>" + studentCode + "</td></tr>";
        html += "<tr><td>Ten hoc sinh: </td><td>" + studentName + "</td></tr>";
        html += "<tr><td>Tuoi hoc sinh: </td><td>" + studentAge + "</td></tr>";
        html += "<tr><td>Gioi tinh hoc sinh: </td><td>" + sex + "</td></tr>";
        $("print").innerHTML = html;
}

var ressetInfo = function() {
    $("codehs").value = "";
    $("namehs").value = "";
    $("agehs").value = "";
    $("print").innerHTML = "";
    $("sex1").focus();
    $("codehs").focus();
}
var escEvent = function() {
    alert("You have stopped entering student information.");
    $("codehs").disabled = true;
    $("namehs").disabled = true;
    $("agehs").disabled = true;
    $("btn").disabled = true;
    $("reset").disabled = true
};

window.onload = function() {
    $("codehs").focus();
    $("btn").onclick = getInfo; 
    $("reset").onclick = ressetInfo;
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            escEvent();
        }
    })
}

