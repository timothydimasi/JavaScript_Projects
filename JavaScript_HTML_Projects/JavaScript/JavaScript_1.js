function favorite_Padre() {                                             // declaring a function to be accessed by the click of the button on html page
    let player_output = "";                                             // empty string to alter and then use to output
    let players = document.getElementById("Player_Input").value;        // creating a variable to represent the value inputted by the user
    let player_str = " is your favorite Padre in 2021. Go Pads!";       // a string to be used universally throughout the function. we will add the user input to this string for the player_output string
    switch(players) {                                                   // discoverd that the expression 'players' needs to be linked with the variable for the user's input
        case "Yu Darvish":
            player_output = "Yu Darvish" + player_str;                  // one of these will be executed depending on the user's input
        break;
        case "Blake Snell":
            player_output = "Blake Snell" + player_str;
        break;
        case "Dinelson Lamet":
            player_output = "Dinelson Lamet" + player_str;
        break;
        case "Jake Cronenworth":
            player_output = "Jake Cronenworth" + player_str;
        break;
        case "Manny Machado":
            player_output = "Manny Machado" + player_str;
        break;
        case "Fernando Tatis Jr.":
            player_output = "Fernando Tatis Jr." + player_str;
        break;
        case "Eric Hosmer":
            player_output = "Eric Hosmer" + player_str;
        break;
        case "Tommy Pham":
            player_output = "Tommy Pham" + player_str;
        break;
        case "Will Myers":
            player_output = "Will Myers" + player_str;
        break;
        case "Trent Grisham":
            player_output = "Trent Grisham" + player_str;
        break;
        default:
            player_output = "Please enter a player's name just as it appears on the list, and try again..."   // if the user enters a player not recognized or mispells their name, this will appear. did I just mispell mispell? IDK
    }
    document.getElementById("output").innerHTML = player_output; 
}

function class_function() {
    var a = document.getElementsByClassName("test");  
    a[0].innerHTML = "New Text";                      // I tried doing this without the '[0]' to see if it would effect all elements w/ class "test" - did not work
}                                                      // at this point, we've only learned how to select the index of the element we want to change

var c = document.getElementById("Canvas_1");           //just curious, how important is this topic?
var ctx = c.getContext("2d");                          // even after googling, not 100% sure what this does
ctx.beginPath();
ctx.arc(275,150,100,0,2*Math.PI);                      //i understand the first 3 values in here but not the last 2
ctx.stroke();                                          //draws the path defined above - nothing appears without this

var g = document.getElementById("Canvas_2");
var gtx = g.getContext("2d");

var grd = gtx.createLinearGradient(0, 0, 510, 450);   //tinkered with this a bit so I can see what it does but still not 100% clear but that's ok
grd.addColorStop(0, "black");
grd.addColorStop(1, "red");

gtx.fillStyle = grd;
gtx.fillRect(20, 20, 510, 260);                        //this makes sense