//Function using a while loop
function count_To_Ten() {
    var Digit = "";
    var X =1;
    while (X <15) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;
}

//Function using a for loop
var Instruments = ["Piano", "Drums", "Violin", "Guitar", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var cat_picture = [];
    cat_picture[0] = "sleeping";
    cat_picture[1] = "eating";
    cat_picture[2] = "playing";
    document.getElementById("Array").innerHTML = "In this picture the cat is " +
    cat_picture[2] + ".";
    
}


function constant_function(){
    const Musical_Instrument = {type:"guitar ", brand:"Fender ", color:"blue "};
    Musical_Instrument.color = "blue ";
    Musical_Instrument.price = "£900 ";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.type + "was " + Musical_Instrument.price;

}


var X = 77;
document.write(X);
{
    let X = 26;
    document.write("<br>" + X);
}
document.write("<br>" + X);

function car() {
let car = {
    make: "Fiat",
    model: "500",
    year: "2020",
    color: "pink",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
}