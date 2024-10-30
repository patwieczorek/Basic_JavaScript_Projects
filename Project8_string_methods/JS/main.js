//Using concatenate method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "started learning ";
    var part_3 = "how to ";
    var part_4 = "use JavaScript.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Using .slice() method
function slice_Method() {
    var Sentence = "This is fun!";
    var Section = Sentence.slice(8,11);
    document.getElementById("Slice").innerHTML = Section;
}

//Using .string() method
function string_Method() {
    var X = 180;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//Using .toPrecision() method
function precision_Method() {
    var X = 1265.864697999;
    document.getElementById("Precision").innerHTML = X.toPrecision(6);
}

//Using .toFixed() method
function fixed_Method() {
    var X = 675.89;
    document.getElementById("Fixed").innerHTML = X.toFixed();
}

//Using .toValueOf() method
function value_Method() {
    let text = new String ("Hello World!");
    document.getElementById("ValueOf").innerHTML = text.valueOf();
}