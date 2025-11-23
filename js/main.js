// Año automático en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Menú hamburguesa móvil
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// Cerrar menú al pulsar enlaces (móvil)
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

