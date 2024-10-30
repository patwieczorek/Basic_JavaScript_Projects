function addition() {
    var addition= 2+2;
    document.getElementById("Math").innerHTML="2 + 2=" + add;
}
document.write(addition);

function subtraction() {
var Subtraction = 5-2;
document.getElementById("Math").innerHTML ="5 - 2= " + sub;
}

function multiplication() {
    var simple_Math = 8*6;
    document.getElementById("Math").innerHTML ="8 x 6 = " + multi;
}

function division() {
    var simple_Math = 48/6;
    document.getElementById("Math").innerHTML ="48 / 6 = " + div;
}

function more_Math() {
    var simpe_Math = (1 + 2)* 10/ 2 -5;
    document.getElementById("Math").innerHTML ="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML ="When you divide 25 by 6, you get a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x= 10;
    document.getElementById("Math").innerHTML = -x;
}

var X= 5;
X++;
document.write(X);

var X= 5.25;
X--;
document.write(X);

window.alert(Math.random());
window.alert(Math.random() * 100);

Math.round(4.6)


