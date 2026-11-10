const screen = document.getElementById("screen");
const coinsText = document.getElementById("coins");
const coinBtn = document.getElementById("coin-btn");
const form = document.getElementById("buy-form");
const codeInput = document.getElementById("code");
const tray = document.getElementById("tray");

let coins = 0;

const drinks = {
    A1: "🍓 strawberry milk",
    A2: "🍵 matcha",
    A3: "🧃 apple juice",
    B1: "🥤 soda",
    B2: "🧋 bubble tea",
    B3: "☕ coffee"
};

const cuteThings = ["🍓", "🌸", "⭐", "🍵", "🎀", "💗", "🍃", "✨", "🧋"];

function makeRain(item) {
    const thing = document.createElement("span");
    thing.className = "fall";

    thing.textContent = item || cuteThings[Math.floor(Math.random() * cuteThings.length)];

    thing.style.left = Math.random() * 100 + "vw";
    thing.style.fontSize = 16 + Math.random() * 20 + "px";
    thing.style.animationDuration = 5 + Math.random() * 5 + "s";

    document.body.appendChild(thing);

    setTimeout(function () {
        thing.remove();
    }, 10000);
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(function () {
        makeRain();
    }, 400);
}

coinBtn.addEventListener("click", function () {
    coins++;
    coinsText.textContent = coins;
    screen.textContent = "coin in! now type a code";
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const code = codeInput.value.trim().toUpperCase();

    if (coins === 0) {
        screen.textContent = "insert a coin first!";
        shakeScreen();
    } else if (drinks[code] === undefined) {
        screen.textContent = "hmm, " + code + " isn't a drink";
        shakeScreen();
    } else {
        coins--;
        coinsText.textContent = coins;
        screen.textContent = "enjoy your " + drinks[code] + "!";

        const emoji = drinks[code].split(" ")[0];

        const item = document.createElement("span");
        item.textContent = emoji;
        tray.appendChild(item);

        for (let i = 0; i < 15; i++) {
            makeRain(emoji);
        }
    }

    codeInput.value = "";
});