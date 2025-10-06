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

  // Ensure all panels start closed
  accordions.forEach(acc => {
    const panel = acc.nextElementSibling;
    const chevron = acc.querySelector(".chevron");
    acc.classList.remove("active");
    if (panel) {
      panel.style.display = "none";
      panel.style.opacity = 0;
    }
    if (chevron) chevron.style.transform = "rotate(0deg)";
  });

  accordions.forEach(acc => {
    acc.addEventListener("click", function() {
      const isActive = acc.classList.contains("active");
      const panel = acc.nextElementSibling;
      const chevron = acc.querySelector(".chevron");

      // Close all panels first
      accordions.forEach(other => {
        const otherPanel = other.nextElementSibling;
        const otherChevron = other.querySelector(".chevron");
        other.classList.remove("active");
        if (otherPanel) {
          otherPanel.style.display = "none";
          otherPanel.style.opacity = 0;
        }
        if (otherChevron) otherChevron.style.transform = "rotate(0deg)";
      });

      // Open the clicked one (only if it was closed)
      if (!isActive) {
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
