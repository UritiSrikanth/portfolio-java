const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const currentTheme = document.body.classList.contains("light") ? "light" : "dark";
    localStorage.setItem("portfolio-theme", currentTheme);
  });
}

const skillFills = document.querySelectorAll(".skill-fill");
if ("IntersectionObserver" in window) {
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        fill.style.width = fill.getAttribute("data-width");
      }
    });
  }, { threshold: 0.35 });

  skillFills.forEach((fill) => skillObserver.observe(fill));
} else {
  skillFills.forEach((fill) => {
    fill.style.width = fill.getAttribute("data-width");
  });
}

function showMessage(event) {
  event.preventDefault();
  const formMessage = document.getElementById("formMessage");
  formMessage.textContent =
    "Thank you! Your message has been captured in the demo form. Connect this form to Formspree, Netlify Forms, or your backend to receive real submissions.";
}

const revealElements = document.querySelectorAll("section, .hero-card, .profile-card");
revealElements.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((el) => revealObserver.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("active"));
}
