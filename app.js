document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slides = document.querySelectorAll('.slide');
    let slideIndex = 0;
  
    prevBtn.addEventListener('click', function() {
      slideIndex = Math.max(slideIndex - 1, 0);
      updateSlider();
    });
  
    nextBtn.addEventListener('click', function() {
      slideIndex = Math.min(slideIndex + 1, slides.length - 1);
      updateSlider();
    });
  
    function updateSlider() {
      slides.forEach(function(slide, index) {
        if (index === slideIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    }
  });