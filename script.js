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
      // Close all other panels first
      accordions.forEach(other => {
        if (other !== acc) {
          other.classList.remove("active");
          const otherPanel = other.nextElementSibling;
          const otherChevron = other.querySelector(".chevron");
          if (otherPanel) {
            otherPanel.style.display = "none";
            otherPanel.style.paddingTop = "0";
            otherPanel.style.paddingBottom = "0";
          }
          if (otherChevron) otherChevron.style.transform = "rotate(0deg)";
        }
      });

      // Toggle the clicked panel
      const panel = this.nextElementSibling;
      const chevron = this.querySelector(".chevron");
      const isActive = this.classList.contains("active");

      if (isActive) {
        // Close
        this.classList.remove("active");
        panel.style.display = "none";
        panel.style.paddingTop = "0";
        panel.style.paddingBottom = "0";
        if (chevron) chevron.style.transform = "rotate(0deg)";
      } else {
        // Open fully (no scroll restriction)
        this.classList.add("active");
        panel.style.display = "block";
        panel.style.paddingTop = "1rem";
        panel.style.paddingBottom = "1rem";
        panel.style.maxHeight = "none";  // allow full height
        if (chevron) chevron.style.transform = "rotate(180deg)";
      }
    });
  });
});

// --- Responsive header menu toggle ---
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const siteNav = document.getElementById("site-nav");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      siteNav.classList.toggle("active");
      menuToggle.classList.toggle("active"); // add animation toggle
    });
  }
});
