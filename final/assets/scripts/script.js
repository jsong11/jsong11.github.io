/* Carousel */
let currentIndex = 0;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel img');
  const totalSlides = slides.length;

    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const translateValue = -currentIndex * 100;
        carousel.style.transform = `translateX(${translateValue}%)`;
}

function prevSlide() {
    showSlide(currentIndex - 1);
  }

function nextSlide() {
    showSlide(currentIndex + 1);
  }

  document.getElementById('prev').onclick = prevSlide;
  document.getElementById('next').onclick = nextSlide;


  /* Labels */

  