let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  const nextButton = document.getElementById('nextButton');
  nextButton.addEventListener('click', nextSlide);
  
}

// You can add a setInterval to automatically move to the next slide
// setInterval(nextSlide, 5000); // Change 5000 to the desired interval in milliseconds

// Alternatively, you can trigger the next slide with a button or any other event
// Example with a button:
// const nextButton = document.getElementById('nextButton');
// nextButton.addEventListener('click', nextSlide);

// Initial display
showSlide(currentIndex);
