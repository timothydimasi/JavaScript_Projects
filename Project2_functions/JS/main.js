function myFirstFunction() {
    var A = "This is the first string.";
    var B = "This is the second string.";
    document.getElementById("demo_3").innerHTML = A += B; 
}

function mySecondFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("demo_2").innerHTML = sentence;
}
