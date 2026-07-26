// Simple JavaScript for header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
    header.style.background = "rgba(255, 249, 245, 0.98)";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    header.style.background = "rgba(255, 249, 245, 0.95)";
  }
});

const slides = document.querySelectorAll(".about-image .slide");

let current = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

setInterval(() => {
  current++;

  if (current >= slides.length) {
    current = 0;
  }

  showSlide(current);
}, 3000); // changes every 3 seconds
