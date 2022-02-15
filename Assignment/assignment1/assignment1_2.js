var pointMath = parseFloat(prompt("nhap diem toan",0));
var pointPhysics = parseFloat(prompt("nhap diem ly",0));
var pointChemistry = parseFloat(prompt("nhap diem hoa",0));
var average = ((pointMath + pointPhysics + pointChemistry) / 3).toFixed(1);
var rank;
if (average >= 8.0) {
    rank = "A";
    document.write("average = " + average + "\nRank " + rank);
}
else if (average >= 6.5){
    rank = "B";
    document.write("average = " + average + "\nRank " + rank);
}
else if (average >= 5.0){
    rank = "C";
    document.write("average = " + average + "\nRank " + rank);
}
else{
    rank = "D";
    document.write("average = " + average + "\nRank " + rank);
}