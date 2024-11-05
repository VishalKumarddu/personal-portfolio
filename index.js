document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
  });
});
