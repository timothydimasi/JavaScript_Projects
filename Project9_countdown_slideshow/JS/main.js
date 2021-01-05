function countdown() {
    var seconds = document.getElementById("seconds").value;   // asking for input from the user on HTML page

    function tick() {                     
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);         // refer to notes for this method
    if(seconds == -1) {
        alert("Time's up!");
    } 
        }
    tick();
}

// Slideshow JS 
var slideIndex = 1;
showSlides(slideIndex);

// next/previous controls 
function plusSlides(n) {
    showSlides(slideIndex += n)
}

// thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");        // going to submit this project even though I don't fully understand it
    var dots = document.getElementsByClassName("dot");               // spent close to 2 hours today trying to make sense of this
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); 
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}