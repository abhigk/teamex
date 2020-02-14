export function scrollToSection(section) {
  window.scrollTo({
    behavior: "smooth",
    top: document.getElementById(section).offsetTop - 70,
    left: 0
  });
}
