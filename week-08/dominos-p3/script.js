function createDominoFace(value) {
    const face = document.createElement("div");
    face.classList.add("domino-face");

    for (let i = 0; i < 9; i++) {
        const pip = document.createElement("div");
        pip.classList.add("pip");

        if (value > 1 && i == 0) pip.classList.add("dot");
        if (value > 1 && i == 8) pip.classList.add("dot");
        if (value > 3 && i == 2) pip.classList.add("dot");
        if (value > 3 && i == 6) pip.classList.add("dot");
        if (value > 5 && i == 3) pip.classList.add("dot");
        if (value > 5 && i == 5) pip.classList.add("dot");
        if (value % 2 == 1 && i == 4) pip.classList.add("dot");

        face.appendChild(pip);
    }
    return face;
}

function createDomino(value1, value2) {
    const domino = document.createElement("div");
    domino.classList.add("domino");
    domino.appendChild(createDominoFace(value1));
    domino.appendChild(createDominoFace(value2));
    return domino;
}

const dominoes = [];

for (let i = 0; i <= 6; i++) {
    for (let j = i; j <= 6; j++) {
        dominoes.push({ top: i, bottom: j });
    }
}

const fortunes = [
    "a fresh start is coming.",
    "someone is thinking about you.",
    "grab a matcha, you deserve it.",
    "today is a good day to text an old friend.",
    "your code will work on the first try (maybe).",
    "something sweet is on its way.",
    "take a nap, trust me.",
    "lucky number! good things are coming.",
    "say yes to the next plan someone asks you to.",
    "you'll find something you lost.",
    "a little adventure is waiting for you.",
    "someone admires you more than you know.",
    "the jackpot! everything's going your way."
];

const dominoContainer = document.getElementById("domino-container");
const fortuneText = document.getElementById("fortune");
const allBtn = document.getElementById("all");
const drawBtn = document.getElementById("draw");

function checkLucky(total) {
    if (total === 7) {
        document.body.classList.add("lucky");

        setTimeout(function () {
            document.body.classList.remove("lucky");
        }, 2000);
    }
}

function showFortune(item) {
    const total = item.top + item.bottom;
    fortuneText.textContent = "you got " + item.top + " + " + item.bottom + " = " + total + ": " + fortunes[total];
    checkLucky(total);
}

function showDominoes(list) {
    dominoContainer.replaceChildren();

    for (const item of list) {
        const domino = createDomino(item.top, item.bottom);


        domino.addEventListener("click", function () {
            domino.classList.toggle("flipped");
            showFortune(item);
        });

        dominoContainer.appendChild(domino);
    }
}


drawBtn.addEventListener("click", function () {
    const random = dominoes[Math.floor(Math.random() * dominoes.length)];
    showDominoes([random]);
    showFortune(random);
});

allBtn.addEventListener("click", function () {
    showDominoes(dominoes);
    fortuneText.textContent = "click a domino to get your fortune ♡";
});

showDominoes(dominoes);