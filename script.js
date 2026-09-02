// ===== ARTNY CIVILS — Shared JavaScript =====

document.addEventListener('DOMContentLoaded', function() {

  // === Mobile menu toggle ===
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // === Nav bar scroll effect ===
  const navBar = document.querySelector('.nav-bar');
  if (navBar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 20) {
        navBar.classList.add('scrolled');
      } else {
        navBar.classList.remove('scrolled');
      }
    });
  }

  // === Hero slideshow ===
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (slides.length > 0) {
    let currentSlide = 0;
    function showSlide(index) {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      slides[index].classList.add('active');
      if (dots[index]) dots[index].classList.add('active');
      currentSlide = index;
    }
    function nextSlide() {
      showSlide((currentSlide + 1) % slides.length);
    }
    let slideInterval = setInterval(nextSlide, 5000);
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide(i);
        slideInterval = setInterval(nextSlide, 5000);
      });
    });
  }

  // === Fade-up animation on scroll ===
  const fadeElements = document.querySelectorAll('.fade-up');
  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    fadeElements.forEach(el => observer.observe(el));
  }

  // === FAQ accordion ===
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        item.classList.toggle('open');
      });
    }
  });

  // === Animated stat counters ===
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (statNumbers.length > 0) {
    const statObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'));
          let current = 0;
          const increment = Math.ceil(target / 40);
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = target;
              clearInterval(timer);
            } else {
              el.textContent = current;
            }
          }, 30);
          statObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    statNumbers.forEach(el => statObserver.observe(el));
  }

  // === Quote form → WhatsApp ===
  const quoteForm = document.querySelector('#quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = quoteForm.querySelector('[name="name"]')?.value || '';
      const phone = quoteForm.querySelector('[name="phone"]')?.value || '';
      const service = quoteForm.querySelector('[name="service"]')?.value || '';
      const location = quoteForm.querySelector('[name="location"]')?.value || '';
      const details = quoteForm.querySelector('[name="details"]')?.value || '';
      
      let message = `*New Quote Request — ARTNY CIVILS*\n\n`;
      message += `*Name:* ${name}\n`;
      message += `*Phone:* ${phone}\n`;
      message += `*Service:* ${service}\n`;
      message += `*Location:* ${location}\n`;
      message += `*Details:* ${details}\n`;
      
      const waUrl = `https://wa.me/27734411697?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    });
  }

  // === Contact form → WhatsApp ===
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = contactForm.querySelector('[name="name"]')?.value || '';
      const phone = contactForm.querySelector('[name="phone"]')?.value || '';
      const message = contactForm.querySelector('[name="message"]')?.value || '';
      
      let waMessage = `*New Enquiry — ARTNY CIVILS*\n\n`;
      waMessage += `*Name:* ${name}\n`;
      waMessage += `*Phone:* ${phone}\n`;
      waMessage += `*Message:* ${message}\n`;
      
      const waUrl = `https://wa.me/27734411697?text=${encodeURIComponent(waMessage)}`;
      window.open(waUrl, '_blank');
    });
  }

  // === Gallery lightbox ===
  const galleryItems = document.querySelectorAll('.gallery-item, .project-tile');
  if (galleryItems.length > 0) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.cssText = `position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:9999;display:none;align-items:center;justify-content:center;cursor:pointer;padding:20px;`;
    lightbox.innerHTML = `<img style="max-width:90%;max-height:90%;border-radius:12px;" />`;
    document.body.appendChild(lightbox);
    const lbImg = lightbox.querySelector('img');
    
    galleryItems.forEach(item => {
      item.addEventListener('click', function() {
        const bg = getComputedStyle(item).backgroundImage;
        const url = bg.slice(5, -2);
        if (url && url !== 'none') {
          lbImg.src = url;
          lightbox.style.display = 'flex';
        }
      });
    });
    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  }

});
