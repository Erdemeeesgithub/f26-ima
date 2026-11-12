// mobile menu
let nav = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("open");
    menuBtn.textContent = nav.classList.contains("open") ? "✕" : "☰";
});


// copy email button
let emailBtn = document.querySelector("#email");

if (emailBtn) {
    emailBtn.addEventListener("click", function () {
        navigator.clipboard.writeText("berdemdelgerekh@gmail.com");
        emailBtn.textContent = "copied! ♡";

        // change the text back after 2 seconds
        setTimeout(function () {
            emailBtn.textContent = "copy my email ♡";
        }, 2000);
    });
}


// open a popup with more info when you click a note
let notes = document.querySelectorAll(".note");
let popup = document.querySelector(".popup");

notes.forEach(function (note) {
    note.addEventListener("click", function () {
        // copy the note's title, subtitle and details into the popup
        popup.querySelector(".post-title").textContent = note.querySelector("h3").textContent;
        popup.querySelector(".post-sub").textContent = note.querySelector("p").textContent;
        popup.querySelector(".post-body").innerHTML = note.querySelector(".details").innerHTML;

        popup.classList.add("open");
        document.body.style.overflow = "hidden"; // stop the page behind from scrolling
    });
});

function closePopup() {
    popup.classList.remove("open");
    document.body.style.overflow = "";
}

if (popup) {
    popup.querySelector(".close").addEventListener("click", closePopup);

    // clicking the dark area outside the post also closes it
    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            closePopup();
        }
    });

    // so does pressing Escape
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closePopup();
        }
    });
}


// fade things in when they scroll into view
let revealItems = document.querySelectorAll(".reveal");

let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealItems.forEach(function (item, i) {
    // small delay so items in a row come in one after another
    item.style.setProperty("--delay", (i % 3) * 0.12 + "s");
    observer.observe(item);
});


// emoji rain every time the page opens
let emojis = ["🌸", "🍓", "🎀", "💗", "🍏", "🦋", "⭐", "🌷", "✨", "🐝", "🍀", "💌"];

for (let i = 0; i < 80; i++) {
    let emoji = document.createElement("span");
    emoji.className = "emoji";
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // random spot, size, speed and start time
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.fontSize = 20 + Math.random() * 25 + "px";
    emoji.style.animationDuration = 2 + Math.random() * 2 + "s";
    emoji.style.animationDelay = Math.random() * 1.5 + "s";

    document.body.appendChild(emoji);

    // remove it once it's fallen off the screen
    emoji.addEventListener("animationend", function () {
        emoji.remove();
    });
}


// little friends floating across the screen
// "left" means it flies right-to-left (because it's facing left)
let friends = [
    { src: "img/p15.png", type: "right flap" },
    { src: "img/p8.png", type: "right flap" },
    { src: "img/p12.png", type: "right" },
    { src: "img/p14.png", type: "left" },
];

friends.forEach(function (friend) {
    let floater = document.createElement("div");
    floater.className = "floater " + friend.type;

    let img = document.createElement("img");
    img.src = friend.src;
    img.alt = "";
    floater.appendChild(img);

    // random height, speed, and starting point
    let duration = 25 + Math.random() * 20;
    floater.style.top = 10 + Math.random() * 70 + "vh";
    floater.style.animationDuration = duration + "s";
    floater.style.animationDelay = -Math.random() * duration + "s"; // negative = already mid-flight

    document.body.appendChild(floater);
});