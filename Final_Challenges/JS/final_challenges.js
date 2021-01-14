//this is the function for form validation and keyframes challenges
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    let z = document.forms["myForm"]["phone"].value;
    if (x == "" || y == "" || z == "") {
        alert("Each field needs to be completed before entry");    
    }
}
//end form validation

//popup contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
//end popup contact form

//slideshow
var myIndex = 0;
slideShow();
function slideShow() {
    var i;
    var x = document.getElementsByClassName("mySlides"); //creates an array
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(slideShow, 2000); //change the image every 2 seconds (2000 miliseconds)
}