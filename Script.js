
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Form submission handler
  document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const button = this.querySelector('button[type="submit"]');
    if (!button) return;

    const originalText = button.textContent;

    button.textContent = 'Sending...';
    button.disabled = true;

    // Simulate form submission
    setTimeout(() => {
      button.textContent = 'Message Sent! ✓';
      button.classList.add('bg-green-600');

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        button.classList.remove('bg-green-600');
        this.reset();
      }, 2000);
    }, 1500);
  });

  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
  });

//    document.getElementById('linkedin').addEventListener('click', function () {
//     window.location.href = 'https://www.linkedin.com/in/sai-aditya-pattanaik-3054a3336'; 
//   });
