const form = document.getElementById("signup-form");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("user").value.trim();
  const password = document.getElementById("password").value;

  if (username === "") {
    message.textContent = "Please enter a username.";
    return;
  }
  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters.";
    return;
  }

  message.textContent = "Account created! Redirecting to sign in...";
  setTimeout(function () {
    window.location.href = "signin.html";
  }, 1500);
});