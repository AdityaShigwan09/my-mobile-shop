// script.js
let slideIndex = 0;
let slides = document.querySelectorAll('.slide');

function showSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlide,2000); // change the timeout to your liking
}

showSlide();


function display(){
    var x = document.getElementById("name").value;
    alert("Thank you for Feedback, " + x);
}
