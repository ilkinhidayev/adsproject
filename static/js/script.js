let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

showSlides();

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 1000);
}

function plusSlides(n) {
    showSlidesManually(slideIndex += n);
}

function currentSlide(n) {
    showSlidesManually(slideIndex = n);
}

function showSlidesManually(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        plusSlides(-1); // Sol ok tuşuna basıldığında bir önceki slayta geç
    } else if (event.key === "ArrowRight") {
        plusSlides(1); // Sağ ok tuşuna basıldığında bir sonraki slayta geç
    }
});
