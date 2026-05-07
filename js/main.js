const year = document.getElementById("year");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.getElementById("navLinks");

year.textContent = new Date().getFullYear();

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});
