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