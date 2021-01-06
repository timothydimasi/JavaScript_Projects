function Call_Loop() {
    var str = "";
    var x = 1;
    while (x < 6) {
        str += "<br>" + x;
        x++
    }
    document.getElementById("Loop").innerHTML = str;
}


var Padres = ["Manny Machado", "Fernando Tatis Jr.", "Yu Darvish", "Blake Snell", "Dinelson Lamet", "Tommy Pham"];
var content = "";
var x;
function for_Loop() {
    for (x = 0; x < Padres.length; x++) {
    content += Padres[x] + "<br>";
    }
    document.getElementById("Padres_Players").innerHTML = content;     // when I click the button for this function, the output keeps duplicating. this doesn't happen with other functions and I would like to know why
}

function array_Function() {
    var Padres = ["Manny Machado", "Fernando Tatis Jr.", "Jake Cronenworth", "Eric Hosmer", "Austin Nola"];
    document.getElementById("Array").innerHTML = Padres[2] + " is an infielder for the San Diego Padres.";
}

const car = {make: "Mini", model: "Countryman", color: "white", seats: "shag", paid_for: "almost paid off"};
function constant_function() {
    document.getElementById("Constant").innerHTML = 
        "My " + car.make + " " + car.model + " is a lot of fun to drive and it is " + car.paid_for + ".";
}

function let_function() {
    let x = 42;
    document.getElementById("let").innerHTML = x;
}

function return_function() {
    x = 400;
    return x;
}
document.getElementById("return").innerHTML = return_function();


let video_game = {
    name: "World of Warcraft",
    system_type: "PC",
    style: "MMORPG",
    difficulty: "Intermediate",
    output_sentence: function let_sentence() {   //the concept of methods in objects is still a bit foreign to me
        return this.name + " is an " + this.difficulty + " " + this.style + " designed to be played on " +
            this.system_type + "."
    }
}
document.getElementById("let_2").innerHTML = video_game.output_sentence();

var text = "";
var i
for (i = 0; i < 6; i++) {
    if (i === 2) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

var text_2 = "";
var i;
for (i = 1; i < 11; i++) {
    if (i === 5) { continue; }                //not sure why we use the '===' operator here. why not '=='?
    text_2 += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text_2;