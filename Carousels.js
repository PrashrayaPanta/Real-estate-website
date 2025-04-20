 let index = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

export function showSlide(i) {
  index = (i + totalSlides) % totalSlides; // Handle wrap-around
  document.querySelector(".slider").style.transform = `translateX(-${
    index * 100
  }%)`;
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

document.querySelector(".prev").onclick = prevSlide;

document.querySelector(".next").onclick = nextSlide;


