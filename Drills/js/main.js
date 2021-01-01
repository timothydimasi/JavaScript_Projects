function Divide_by2(x) {
    quotient = x / 2;
    return quotient;
}
document.write(Divide_by2(100))


function greenText() {
    var x = "Now, it's green text.";
    var y = x.fontcolor("green");
    document.getElementById("p").innerHTML = y;
}