// ==========================
// Hiệu ứng gõ chữ [DESIGN], [LIVING], ...
// ==========================
const texts = ["DESIGN", "LIVING", "FUTURE", "ART"];
const el = document.querySelector(".changing-text");
let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentText = texts[textIndex];

  if (!deleting) {
    el.textContent = currentText.slice(0, ++charIndex);
    if (charIndex < currentText.length) {
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(() => {
        deleting = true;
        typeEffect();
      }, 3000);
    }
  } else {
    el.textContent = currentText.slice(0, --charIndex);
    if (charIndex > 0) {
      setTimeout(typeEffect, 100);
    } else {
      deleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeEffect, 150);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// ==========================
// Toggle menu
// ==========================
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuToggle.textContent = menu.classList.contains("active")
    ? "MENU –"
    : "MENU +";
});

// Đóng menu khi nhấn link
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuToggle.textContent = "MENU +";
  });
});
