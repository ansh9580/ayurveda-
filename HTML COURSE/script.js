// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the image container and images
    const slider = document.querySelector('.slider-images');
    const images = document.querySelectorAll('.slider-images img');
    let currentIndex = 0;

    // Function to change the image
    function changeImage() {
        // Increment the index
        currentIndex++;

        // If the index is out of range, reset to 0 (loop back to the first image)
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        // Update the transform to slide to the next image
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Set interval to change image every 2 seconds (2000 ms)
    setInterval(changeImage, 2000);
});
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
  currentIndex += direction;
  
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

