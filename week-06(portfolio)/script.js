let nav = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("open");
    menuBtn.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

let emailBtn = document.querySelector("#email");

if (emailBtn) {
    emailBtn.addEventListener("click", function () {
        navigator.clipboard.writeText("berdemdelgerekh@gmail.com");
        emailBtn.textContent = "copied! ♡";
    });
}
