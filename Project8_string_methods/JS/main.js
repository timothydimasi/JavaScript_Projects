function connect() {
    var leg_1 = "The San Diego Padres ";
    var leg_2 = "will win a ";
    var leg_3 = "World Series soon!";
    var sentence = leg_1.concat(leg_2, leg_3);
    document.getElementById("concatenate").innerHTML = sentence;
}

function slice_function() {
    var sentence_2 = "Today, Eric Hosmer will be playing 1st Base.";
    var section = sentence_2.slice(7, 18);
    document.getElementById("slice").innerHTML = section;
}

function UpperCase() {
    var str = "This is an example of the toUpperCase method.";
    var str = str.toUpperCase();
    document.getElementById("UpperCase").innerHTML = str;
}

function search_method() {
    var str_2 = "This is an example of the search method.";
    var search_result = str_2.search("search");
    document.getElementById("SearchResult").innerHTML = search_result;
}

function toString_method() {
    var x = 1734;
    document.getElementById("ToString").innerHTML = x.toString();
}

function toPrecision_method() {
    var pi = 3.14159265359;
    document.getElementById("ToPrecision").innerHTML = pi.toPrecision(3);
}

function toFixed_method() {                                                  //if this exists, why is there a need for the "toString" method?
    var z = 2.32532490235;
    document.getElementById("ToFixed").innerHTML = z.toFixed(5);
}

function valueOf_method() {
    var str = "Hello, my name is Tim and I am a Padres fan.";            //trying to think of practical uses for this method and I cannot
    document.getElementById("ValueOf").innerHTML = str.valueOf();
}