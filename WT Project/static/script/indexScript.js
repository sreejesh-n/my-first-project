let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");

  // Hide all slides
  slides.forEach(slide => slide.style.display = "none");

  // Remove the active class from all dots
  dots.forEach(dot => dot.classList.remove("active"));

  // Move to the next slide
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  // Display the current slide and activate the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  // Change slide every 4 seconds
  setTimeout(showSlides, 4000);
}

