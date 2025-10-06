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

  // Initialize all panels as closed
  accordions.forEach(acc => {
    const panel = acc.nextElementSibling;
    const chevron = acc.querySelector(".chevron");
    acc.classList.remove("active");
    if (panel) {
      panel.style.display = "none";
      panel.style.opacity = 0;
      panel.style.transition = "opacity 0.4s ease";
    }
    if (chevron) chevron.style.transform = "rotate(0deg)";
  });

  accordions.forEach(acc => {
    acc.addEventListener("click", function() {
      const isActive = acc.classList.contains("active");
      const panel = acc.nextElementSibling;
      const chevron = acc.querySelector(".chevron");

      // Close all other panels
      accordions.forEach(other => {
        if (other !== acc) {
          other.classList.remove("active");
          const otherPanel = other.nextElementSibling;
          const otherChevron = other.querySelector(".chevron");
          if (otherPanel) {
            otherPanel.style.opacity = 0;
            setTimeout(() => (otherPanel.style.display = "none"), 400);
          }
          if (otherChevron) otherChevron.style.transform = "rotate(0deg)";
        }
      });

      // Toggle this one
      if (isActive) {
        // Fade out and close
        acc.classList.remove("active");
        panel.style.opacity = 0;
        setTimeout(() => (panel.style.display = "none"), 400);
        if (chevron) chevron.style.transform = "rotate(0deg)";
      } else {
        // Open and fade in
        acc.classList.add("active");
        panel.style.display = "block";
        setTimeout(() => (panel.style.opacity = 1), 50);
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
