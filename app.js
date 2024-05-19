const menuBtn = document.getElementById("menuBtn");
const menuShow = document.getElementById("menuShow");

menuBtn.addEventListener("click", () => {
    menuShow.classList.toggle("show");
});