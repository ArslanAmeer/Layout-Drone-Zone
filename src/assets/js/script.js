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

function initMap() {
    var location = {lat:40.712775, lng:-74.005973};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 10,
        center: location,
        gestureHandling: 'cooperative'
    }); 
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}