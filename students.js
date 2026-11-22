function toggleInfo(button) {
  const info = button.nextElementSibling;

  if (info.style.display === "block") {
    info.style.display = "none";
    button.textContent = "View profile";
  } else {
    info.style.display = "block";
    button.textContent = "Hide profile";
  }
}
