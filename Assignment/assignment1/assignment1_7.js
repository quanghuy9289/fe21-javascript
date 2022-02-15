var studentCode = [];
var studentName = [];
var studentAge = [];
var studentSex= [];

var StudentComfirm = true;

studentCode[0] = "01";
studentName[0] = "Nguyen Anh Tuan";
studentAge[0] = "22";
studentSex[0] = "male";
var index = 0;
do {
    StudentComfirm = window.confirm("Do you want to enter more student's information?");
    if(StudentComfirm == true) {
        index++;
        studentCode[index] = prompt("Please enter code of student " + index);
        studentName[index] = prompt("Please enter name of student " + index);
        studentAge[index] = prompt("Please enter age of student " + index);
        studentSex[index] = prompt("Please enter sex of student " + index);
    }
} while (StudentComfirm == true);
if(StudentComfirm == false) {
    for (let i = 0; i < index; i++) {
        document.write("Code: " + studentCode[i] + " Name: " + studentName[i] + " Age: " + studentAge[i] + " Gender: " + studentSex[i] + "<br>");
    }
}
