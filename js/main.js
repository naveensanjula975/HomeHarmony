document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const forgotPasswordForm = document.getElementById("forgotPasswordForm");
  const signupForm = document.getElementById("signupForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      window.location.href = "/index.html";
    });
  }

  if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener("submit", function (event) {
      event.preventDefault();
      window.location.href = "/index.html";
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (validateForm()) {
        window.location.href = "/index.html";
      }
    });
  }
});

function validateForm() {
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{3}\s?\d{7}$/;
  const passwordRegex = /^.{8,}$/;

  document.querySelectorAll('.error').forEach(function (error) {
    error.innerText = "";
  });

  let isValid = true;

  if (fullname.trim() === "") {
    const fullnameError = document.getElementById("fullnameError");
    fullnameError.innerHTML = "<i class='bx bx-error-circle'></i> Full name is required";
    fullnameError.style.color = "red";
    isValid = false;
  }

  if (!emailRegex.test(email)) {
    const emailError = document.getElementById("emailError")
    emailError.innerHTML = "<i class='bx bx-error-circle'></i> Invalid email address";
    emailError.style.color = "red";
    isValid = false;
  }


  if (!phoneRegex.test(phone)) {
    const phoneError = document.getElementById("phoneError");
    phoneError.innerHTML = "<i class='bx bx-error-circle'></i> Invalid phone number (Ex: 0711245789)";
    phoneError.style.color = "red";
    isValid = false;
  }

  if (!passwordRegex.test(password)) {
    const passwordError = document.getElementById("passwordError");
    passwordError.innerHTML = "<i class='bx bx-error-circle'></i> Password must be at least 8 characters long";
    passwordError.style.color = "red";
    isValid = false;
  }

  return isValid;
}


// Scroll reveal
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
});
