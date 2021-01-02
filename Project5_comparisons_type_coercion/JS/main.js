var x = "The Padres will be World Series champs."              // I know this exercise wasn't review but many of the concepts were familiar
document.write(typeof x);

document.write(0/0);

document.write(isNaN("five"));

document.write(isNaN(5));

function pstv_infinity() {
    var a = 3.2E311;
    document.getElementById("infinity").innerHTML = a;
}

function ngtv_infinity() {
    var b = -3.2E311;
    document.getElementById("negative_infinity").innerHTML = b;    
}

document.write(212 > 1);


document.write(43 <= 32);

console.log(2*2);

document.write(20 + "twenty");

console.log(10 < 8);

document.write(20 == 20);

document.write(14 == 15);

document.write("Dog" === "Dog");

document.write("Dog" === 23);

document.write("10" === 10);

document.write("10" === "11");

document.write(10 > 2 && 2 > 1);

document.write(10 > 2 && 2 < 1);

document.write(10 > 2 || 2 < 1);

document.write(10 < 2 || 2 < 1);

document.write(!(2 > 10));  //I know the examples showed the use of a function but I figured this would be quicker/easier

document.write(!(20 > 10));