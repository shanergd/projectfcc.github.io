const no = document.getElementById("no");
const messageBox = document.getElementById("messageBox");
const closeButton = document.getElementById("closeButton");

no.addEventListener("click", () => {
    messageBox.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
    messageBox.classList.add("hidden");
});
