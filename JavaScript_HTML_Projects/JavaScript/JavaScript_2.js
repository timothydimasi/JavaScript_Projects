function validate_Form() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;       //almost tried creating a separate function for 'lname' but thought it through and figured it out this way
    if (x == "" || y == "") {                              //pretty proud of myself for figuring out how to do this on my own, as simple as it was!
        alert("Both name fields must be completed");
        return false;                                      //I'm not sure what this line achieves. When i removed it, nothing changed
    }
}