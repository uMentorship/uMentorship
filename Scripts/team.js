
const dialog = document.querySelector("#profile-dialog");

document.querySelectorAll("article button").forEach(button => {
    button.addEventListener("click", () => {
        const member = button.closest("article");

        document.querySelector("#profile-name").textContent =
            member.querySelector("h3").textContent;

        document.querySelector("#profile-role").textContent =
            member.querySelector("h3 + p").textContent;

        document.querySelector("#profile-description").textContent =
            member.querySelector("h3 + p + p").textContent;

        document.querySelector("#profile-linkedin").href = member.getAttribute("data-linkedin") || "#";
        document.querySelector("#profile-github").href = member.getAttribute("data-github") || "#";
        document.querySelector("#profile-instagram").href = member.getAttribute("data-instagram") || "#";

        dialog.showModal();
    });
});

document.querySelector("#close-dialog").addEventListener("click", () => {
    dialog.close();
});
