let slideIndexX = 1;
showSlidesM(slideIndex);

function plusSlides(n) {
    showSlidesM(slideIndexX += n);
}

function showSlidesM(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides_p");
    if (n > slides.length) {slideIndexX = 1}
    if (n < 1) {slideIndexX = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexX-1].style.display = "flex";
}