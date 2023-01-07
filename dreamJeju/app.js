const slides = document.querySelector("#slides > img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let current = 0;

showSlides();
// prev.onclick = prevSlide;
// next.onclick = nextSlide;

function showSlides() {
    let slides = document.querySelectorAll("#slides > img");
    for(let i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    current++;
    if(current>slides.length)
        current = 1;
    slides[current - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}





// function prevSlide() {
//     if(current > 0) current -= 1;
//     else current = slides.length - 1;
//         showSlides(current);
// }

// function nextSlide() {
//     if(current < slides.length - 1) current += 1;
//     else current = 0;
//         showSlides(current);
// }