function dictionary_1() {
    var Padres = {                                // can you tell yet that I'm a padres fan?
        First: "Hosmer",                          // gold glove first baseman
        Second: "Cronenworth",                    // NL rookie of the year
        Third: "Machado",                         // in the running for NL MVP
        Short: "Tatis",                           // in the running for NL MVP
        Catcher: "Nola"                           // .300+ BA catcher
    };
    delete Padres.Short
    document.getElementById("dictionary").innerHTML = Padres.Short;
}