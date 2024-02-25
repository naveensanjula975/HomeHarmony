document.addEventListener("DOMContentLoaded", function () {
  function redirectToHomePage(event) {
    event.preventDefault();
    window.location.href = "/index.html";
  }

  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const forgotPasswordForm = document.getElementById("forgotPasswordForm");

  if (loginForm) {
    loginForm.addEventListener("submit", redirectToHomePage);
  }
  if (signupForm) {
    signupForm.addEventListener("submit", redirectToHomePage);
  }
  if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener("submit", redirectToHomePage);
  }
});


// scroll reveal
const animate = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

animate.reveal(".nav");
animate.reveal(".home", { origin: "right" });
animate.reveal(".home-text", { origin: "left" });
animate.reveal(".about", { origin: "bottom" });
animate.reveal(".sales, .properties, .newsletter, .login", {
    interval: 100,
    }
);
