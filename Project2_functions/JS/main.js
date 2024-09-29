var daysInAWeeek=7;
var weeksInAYear=52;
function daysInAYear(daysInAWeek, weeksInAYear) {
    return daysInAWeeek * weeksInAYear;
}
let result = daysInAYear(7, 52);
document.getElementById("demo").innerHTML = result;
document.write("We have this many days in a year.");

function myFunction() {
    var sentence= "I am learning";
    sentence += "a lot from this book!";
    document.getElementById("Concatenate") .innerHTML=sentence;
}