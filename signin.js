const form = document.getElementById("signin-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  const role = document.querySelector('input[name="role"]:checked').value;
  const message = document.getElementById("message");

  if (username === "student1" && password === "pass123" && role === "Student") {
    window.location.href = "index.html";
  } else if (
    username === "student2" &&
    password === "abc123" &&
    role === "Student"
  ) {
    window.location.href = "index.html";
  } else if (
    username === "mentor1" &&
    password === "mentor123" &&
    role === "Mentor"
  ) {
    window.location.href = "index.html";
  } else {
    message.textContent = "Incorrect username, password, or account type.";
  }
});
