document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for nav and footer links
    const links = document.querySelectorAll("nav a[href^='#'], footer nav a");
  
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Contact form submission
    const form = document.querySelector('.contact-form');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        alert("Message sent successfully!");
        form.reset();
      });
    }
  
    // Typing animation
    const roles = ["Frontend Developer.", "Programmer.", "Web Developer", "MERN Developer"];
    let currentRole = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpan = document.querySelector(".typing-text");
  
    function typeEffect() {
      if (!typingSpan) return;
  
      const currentText = roles[currentRole];
      const displayedText = isDeleting
        ? currentText.substring(0, charIndex--)
        : currentText.substring(0, charIndex++);
  
      typingSpan.innerHTML = displayedText;
  
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentRole = (currentRole + 1) % roles.length;
        setTimeout(typeEffect, 500);
      } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
      }
    }
  
    typeEffect(); // Start typing animation
  });
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  
  // Toggle menu on hamburger click
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  // Close menu when any nav link is clicked
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
  
