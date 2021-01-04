function add_one() {
    var x = 5;
    document.write(x + 1 + "<br>");
}

function add_two() {                     //removed the variable assignment to create an error
    console.log(x + 2 + "<br>");         //took out document.write() for console.log()
}

add_one();
add_two();


function date_test() {
    if (new Date().getHours() < 24 ) {
        document.getElementById("date").innerHTML = "It's not midnight yet.";
    }
}

function ski_trip() {
    Trips = document.getElementById("ski_trips").value;
    if (Trips >= 8) {
        Amount = "That's a lot of ski trips!";
    }
    else {
        Amount = "That's not that many ski trips.";
    }
    document.getElementById("lot_or_little").innerHTML = Amount;
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time.";
    }
    else if (Time > 12 == Time < 18) {      //why can't this be phrased like '12 < Time < 18'?
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}