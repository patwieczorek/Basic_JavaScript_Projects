document.write("10" + 5);
function my_Function() {
    document.getElementById("Test").innerHTML =0/0;
}
document.getElementById("Test2").innerHTML = isNaN('This is a string');
document.write(10==9);
document.write(10==10);
console.log(2+2);
console.log(8>9);

X= 82;
Y= "82";
document.write(X===Y);

document.write(4>7 && 5<6);
document.write(4>8 || 5<6);

function not_Function() {
    document.getElementById("Not").innerHTML= !(20>10);
}