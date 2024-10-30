var daysInAWeeek=7;
var weeksInAYear=52;
function daysInAYear(daysInAWeek, weeksInAYear) {
    return daysInAWeeek * weeksInAYear;
} //creating a function to calculate days in a year
let result = daysInAYear(7, 52);
document.getElementById("demo").innerHTML = result;
document.write("We have this many days in a year.");

function myFunction() {
    var sentence= "I am learning";
    sentence += "a lot from this book!"; //writing function with += operator combining two lines of text
    document.getElementById("Concatenate") .innerHTML=sentence; //linking it to the correct Id
}
function addition_Function() {
    var addition= 2+2;
    document.getElementById("Math").innerHTML="2 + 2=" + addition;
}