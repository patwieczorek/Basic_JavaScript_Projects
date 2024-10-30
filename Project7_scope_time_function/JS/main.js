//Assigning local and global variables
var X= 8; //global variable

function Add_numbers_1() {
    document.write(20 + X +"<br>"); //local variable
}

function Add_numbers_2() {
    document.write(X + 50);
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_3() {
    var Y = 7;
    document.write(20 + Y + "<br>");
}

function Add_numbers_4() {
    document.write(Y + 60);
}
Add_numbers_3();
Add_numbers_4();


//Using console.log to debug which variable is being used
function Add_numbers_5() {
    var Z = 1;
    console.log(15 + Z);
}
function Add_numbers_6() {
    console.log(Y + 20);
}
Add_numbers_5();
Add_numbers_6();


//Using an if statement
function get_Date() {
    if (new Date().getHours() <12) {
        document.getElementById("Greeting").innerHTML = "Good morning!";
    }
}


//Using both if and else statements
function get_Reply() {
    var user_input = document.getElementById("userInput").value;
    if (user_input >= 18) {
        reply = "You are old enough to vote!";
        document.getElementById("feedback").innerHTML = reply;
    }
    else {
        reply = "You are not old enough to vote!";
        document.getElementById("feedback").innerHTML = reply;
    }
}

//Utilizing the time_function()
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time <18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}