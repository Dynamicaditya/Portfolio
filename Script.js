  const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    // Smooth Scroll
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
        menu.classList.add("hidden"); // close on mobile
      });
    });

    // Typing Effect
    const typedText = "Hi, I'm Sai Aditya Pattanaik";
    let i = 0;
    function typeWriter() {
      if (i < typedText.length) {
        document.getElementById("typed").innerHTML += typedText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    window.onload = typeWriter;

    // Scroll Reveal
    const sections = document.querySelectorAll(".hidden-section");
    const revealOnScroll = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add("visible-section");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);

    // Theme Toggle
    const themeBtn = document.getElementById("theme-toggle");
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("bg-gray-100");
      document.body.classList.toggle("text-gray-900");
      themeBtn.textContent = themeBtn.textContent === "🌙" ? "☀️" : "🌙";
      localStorage.setItem("theme", document.body.classList.contains("bg-gray-100") ? "light" : "dark");
    });

    // Load Theme Preference
    if (localStorage.getItem("theme") === "light") {
      document.body.classList.add("bg-gray-100", "text-gray-900");
      themeBtn.textContent = "☀️";
    }

    // Contact Form Validation
    document.getElementById("contact-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      if (!name || !email || !message) {
        alert("⚠️ Please fill in all fields before submitting.");
        return;
      }
      alert("✅ Thank you, " + name + "! Your message has been sent.");
      e.target.reset();
    });