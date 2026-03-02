document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     1️⃣ Smooth Scroll
  =============================== */
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


  /* ===============================
   Mobile Menu Toggle
=============================== */

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('#nav-links a');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


  /* ===============================
     3️⃣ Contact Form
  =============================== */
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const successMessage = document.getElementById("successMessage");
      if (successMessage) {
        successMessage.style.display = "block";
      }

      alert("Message sent successfully!");
      this.reset();
    });
  }


  /* ===============================
     4️⃣ Typing Animation
  =============================== */
  const roles = [
    "Full Stack Developer.",
    "Programmer.",
    "Web Designer.",
    "MERN Developer."
  ];

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

    typingSpan.textContent = displayedText;

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
    } 
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentRole = (currentRole + 1) % roles.length;
      setTimeout(typeEffect, 500);
    } 
    else {
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
  }

  typeEffect();


  /* ===============================
     5️⃣ Stars Background Animation
  =============================== */
  const canvas = document.getElementById("starsCanvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let starsArray = [];

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.5;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initStars() {
      starsArray = [];
      for (let i = 0; i < 150; i++) {
        starsArray.push(new Star());
      }
    }

    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsArray.forEach(star => {
        star.update();
        star.draw();
      });

      requestAnimationFrame(animateStars);
    }

    initStars();
    animateStars();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    });
  }

});
