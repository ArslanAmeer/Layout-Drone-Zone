// Hamburger Menu

var hamBtn = document.getElementById("nav-menu");
var navMenu = document.getElementById("nav");

hamBtn.addEventListener("click", () => {
    if (navMenu.style.display == "none") 
    {
        navMenu.style.display = "block";        
    }
    else
    {
        navMenu.style.display = "none";
    }
});

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.728884, -74.077059),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("myMap"), mapProp);
}