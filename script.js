// Smooth scroll animation and GSAP effects

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});

// GSAP Animations
gsap.from("header h1", { y: -50, opacity: 0, duration: 1 });
gsap.from("header p", { opacity: 0, delay: 0.5, duration: 1 });
gsap.from("nav a", { opacity: 0, y: -20, stagger: 0.2, delay: 1 });
