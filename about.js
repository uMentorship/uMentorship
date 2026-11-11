
// Select all sections
const sections = document.querySelectorAll(".about > section");

// Reveal sections when scrolling
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});


// Back to top button
const topButton = document.createElement("button");

topButton.textContent = "↑";
topButton.classList.add("back-to-top");

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topButton.classList.add("visible");
    } else {
        topButton.classList.remove("visible");
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
