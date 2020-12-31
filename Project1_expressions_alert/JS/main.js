window.alert("Welcome to my first JavaScript Assignment")        //I hadn't been saving past assignments so I went back and added the first few lines here when I was asked to push to github

var A = "The sky is blue and "                                   //assigned the first part of a sentence to variable 'A'
var B = "the ocean is whatever color the sky is."                //assigned the second part of a sentence to variable 'B'
document.write(A + B)                                            //concatenated and displayed full sentence

var NL_West = "Dodgers", NL_Central = "Cubs", NL_East = "Braves" //here I've declared 3 variables at once for the winners of each division last year

var NL_West = NL_West.fontcolor("blue")                          //Dodgers will be displayed in blue
var NL_Central = NL_Central.fontcolor("blue")                    //Cubs will be displayed in blue
var NL_East = NL_East.fontcolor("Red")                           //Braves will be displayed in red

document.write(NL_West);                                         //displaying the value for variable NL_West

document.write(3+3)                                              //statement+expression