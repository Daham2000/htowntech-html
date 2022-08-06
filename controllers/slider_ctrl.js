let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 9000); // Change image every 2 seconds
}

let slideIndexX = 1;
showSlidesM(slideIndex);

function plusSlides(n) {
    showSlidesM(slideIndexX += n);
}

function showSlidesM(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides_p");
    console.log(slides)
    if (n > slides.length) {slideIndexX = 1}
    if (n < 1) {slideIndexX = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexX-1].style.display = "block";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function onClickMove(section) {
    document.getElementById(section).scrollIntoView();
}
