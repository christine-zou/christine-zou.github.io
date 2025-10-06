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

  // Start all panels closed
  accordions.forEach(acc => {
    const panel = acc.nextElementSibling;
    const chevron = acc.querySelector(".chevron");
    acc.classList.remove("active");
    if (panel) {
      panel.style.maxHeight = "0px";
      panel.style.opacity = 0;
      panel.style.overflow = "hidden";
      panel.style.transition = "max-height 0.6s ease, opacity 0.4s ease";
    }
    if (chevron) chevron.style.transform = "rotate(0deg)";
  });

  accordions.forEach(acc => {
    acc.addEventListener("click", function() {
      const panel = acc.nextElementSibling;
      const chevron = acc.querySelector(".chevron");
      const isActive = acc.classList.contains("active");

      // Close others first
      accordions.forEach(other => {
        if (other !== acc) {
          const otherPanel = other.nextElementSibling;
          const otherChevron = other.querySelector(".chevron");
          other.classList.remove("active");
          if (otherPanel) {
            // Smoothly collapse before hiding
            otherPanel.style.maxHeight = otherPanel.scrollHeight + "px";
            requestAnimationFrame(() => {
              otherPanel.style.maxHeight = "0px";
              otherPanel.style.opacity = 0;
            });
          }
          if (otherChevron) otherChevron.style.transform = "rotate(0deg)";
        }
      });

      // Toggle this one
      if (isActive) {
        // Smoothly close
        acc.classList.remove("active");
        panel.style.maxHeight = panel.scrollHeight + "px"; // ensure current height
        requestAnimationFrame(() => {
          panel.style.maxHeight = "0px";
          panel.style.opacity = 0;
        });
        if (chevron) chevron.style.transform = "rotate(0deg)";
      } else {
        // Smoothly open
        acc.classList.add("active");
        panel.style.opacity = 1;
        panel.style.maxHeight = panel.scrollHeight + "px";
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
