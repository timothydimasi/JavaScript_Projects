function displayPlayer(x) {
    var player = x.getAttribute("data-player_name");
    alert(player + " plays for the " + x.innerHTML);
}