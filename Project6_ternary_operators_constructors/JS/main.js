function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age >= 18) ? "You are old enough to vote":"You are not old enough to vote";
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Padres(FirstName, LastName, Position) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Position = Position;
}

var Manny = new Padres("Manny", "Machdo", "3rd Base");
var Fernando = new Padres("Fernando", "Tatis", "Shortstop");
var Yu = new Padres("Yu", "Darvish", "Pitcher");
function Padres_Function() {
    document.getElementById("New_and_This").innerHTML = 
    Fernando.FirstName + " " + Fernando.LastName + 
    " plays " + Fernando.Position + " for the San Diego Padres."
}

function Stadiums(name, team, capacity) {
    this.Name = name;
    this.Team = team;
    this.Capacity = capacity;
}

function Subtract_Function() {
    document.getElementById("Nested_Function").innerHTML = subtract();
    function subtract() {
        var Starting_Point = 5;
        function subtract_one() {
            Starting_Point -= 1;
        }
        subtract_one();
        return Starting_Point;
    }
}
