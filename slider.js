var slideIndex = 1; 

function showSlides(n) {
    var i = 0;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < slides.length; i++){
        if (i != slideIndex)
        slides[i].style.display = "none"
    }
}

showSlides(slideIndex);