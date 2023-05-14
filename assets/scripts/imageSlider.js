let slideIndex = 1;
chooseSlide(slideIndex);

function nextSlide(n) {
  chooseSlide(slideIndex += n);
}
function currentSlide(n) {
  chooseSlide(slideIndex = n);
}
function chooseSlide(n) {
  const slides = document.getElementsByClassName("image-slider-image-wrapper");
  const dots = document.getElementsByClassName("image-slider__pagination-dot");
  n > slides.length ? (slideIndex = 1) : "";
  n < 1 ? (slideIndex = slides.length) : '';
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].classList.add("active");
}
