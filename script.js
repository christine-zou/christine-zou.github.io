/************************************
 * PROJECTS SLIDESHOW
 ************************************/
let slideIndex = 1;
showSlides(slideIndex);

// Next/prev controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail controls (dots)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let buttons = document.querySelectorAll(".project-buttons button");

  if (slides.length === 0) return;

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  buttons[slideIndex - 1].classList.add("active");
}

/************************************
 * RESEARCH ACCORDION
 ************************************/
document.addEventListener("DOMContentLoaded", function() {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach(acc => {
    acc.addEventListener("click", function() {
      // Close all panels first
      accordions.forEach(other => {
        if (other !== acc) {
          other.classList.remove("active");
          let otherPanel = other.nextElementSibling;
          let otherChevron = other.querySelector(".chevron");
          if (otherPanel) {
            otherPanel.style.maxHeight = null;
            otherPanel.style.paddingTop = "0";
            otherPanel.style.paddingBottom = "0";
          }
          if (otherChevron) {
            otherChevron.style.transform = "rotate(0deg)";
          }
        }
      });

      // Toggle the clicked panel
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      let chevron = this.querySelector(".chevron");

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null; // close
        panel.style.paddingTop = "0";
        panel.style.paddingBottom = "0";
        if (chevron) chevron.style.transform = "rotate(0deg)";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px"; // open
        panel.style.paddingTop = "1rem";
        panel.style.paddingBottom = "1rem";
        if (chevron) chevron.style.transform = "rotate(180deg)";
      }
    });
  });
});
