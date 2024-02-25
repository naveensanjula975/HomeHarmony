document.addEventListener("DOMContentLoaded", function () {
  function redirectToHomePage(event) {
    event.preventDefault();
    window.location.href = "index.html";
  }

  document
    .getElementById("loginForm")
    .addEventListener("submit", redirectToHomePage);
  document
    .getElementById("signupForm")
    .addEventListener("submit", redirectToHomePage);
});

// scroll reveal
const animate = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

animate.reveal(".nav");
animate.reveal(".home-text", { origin: "left" });
animate.reveal(".home", { origin: "right" });
animate.reveal(".about", { origin: "bottom" });
animate.reveal(".btn-home, .sales, .properties, .newsletter, .login", {
    interval: 100,
    }
);
