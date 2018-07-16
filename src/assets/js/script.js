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

// ----------------- SCROLL VIEW  ------------------

var scrollPos = {x: 0, y: 0};
var ticking = false;

function requestScrollAnimation(callback) {
    window.addEventListener('scroll', (e) => {
    
        scrollPos = {
            x: window.scrollX || window.pageXOffset,
            y: window.scrollY || window.pageYOffset
        };
    
        if (!ticking) {
            
            window.requestAnimationFrame((t) => {
                callback(scrollPos);
                ticking = false;
            });
            
            ticking = true;
        }    
    });
}

function isScrolledIntoView(el, isCompleteVisible = false) {
    var rect = el.getBoundingClientRect();
    var elTop = rect.top;
    var elBottom = rect.bottom;

    var isVisible;

    if (isCompleteVisible) {
        isVisible = (elTop >= 0) && (elBottom <= window.innerHeight);
    }
    else {
        isVisible = (elTop < window.innerHeight) && (elBottom >= 0);
    }

    return isVisible;
}

function translateElement(el, x, y) {
    var transform = `translate(${x}px, ${y}px)`;
    transformElement(el, transform);
}

function transformElement(el, transform) {
    el.style.webkitTransform = transform;
    el.style.MozTransform = transform;
    el.style.msTransform = transform;
    el.style.OTransform = transform;
    el.style.transform = transform;
}