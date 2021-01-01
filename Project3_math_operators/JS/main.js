function sum_function(x, y) {                                 // I really started to understand JS functions after this exercise
    var z = x + y;
    document.getElementById("math").innerHTML = z;
}

function difference_function(x, y) {
    var diff = x - y;
    document.getElementById("subtract").innerHTML = diff;
}

function product_function(x, y) {
    var prod = x * y;
    document.getElementById("multiply").innerHTML = prod;
}

function quotient_function(x, y) {
    var quot = x / y;
    document.getElementById("divide").innerHTML = quot;
}

function all_math() {                                         // never thought I'd be using PEMDAS again...
    var total = 5 + 3 * 3 - 6;
    document.getElementById("all").innerHTML = total;
}

function modulus(x, y) {
    var remain = x % y;
    document.getElementById("remainder").innerHTML = remain;
}

function negation() {
    var x = -8;
    document.getElementById("opposite").innerHTML = -x;
}

function increment() {
    var x = 7;
    document.getElementById("increase").innerHTML = ++x;
}

function decrement() {
    var x = 9;
    document.getElementById("decrease").innerHTML =--x;
}

window.alert(Math.random() * 10);                            
window.alert(Math.floor(Math.random() * 100))               // discovered this one on my own before I was instructed to look elsewhere