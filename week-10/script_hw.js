const form = document.getElementById("ask-form");
const question = document.getElementById("question");
const status = document.getElementById("status");
const answer = document.getElementById("answer");
const button = document.querySelector("button");

function spellOut(text) {
    answer.textContent = "";
    let i = 0;

    const timer = setInterval(function () {
        answer.textContent += text[i];
        i++;

        if (i >= text.length) {
            clearInterval(timer);
            status.textContent = "the spirit has spoken.";
            button.disabled = false;
        }
    }, 80);
}

async function askSpirit() {
    status.textContent = "the spirits are listening...";
    answer.textContent = "";
    button.disabled = true;
    document.body.classList.add("flicker");

    try {
        const response = await fetch("https://api.adviceslip.com/advice?t=" + Date.now());

        if (!response.ok) {
            throw new Error("request failed");
        }

        const data = await response.json();

        setTimeout(function () {
            document.body.classList.remove("flicker");
            status.textContent = "something is moving...";
            spellOut(data.slip.advice.toUpperCase());
        }, 1500);

    } catch (error) {
        document.body.classList.remove("flicker");
        status.textContent = "no one answered. the room went cold.";
        button.disabled = false;
        console.error(error);
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (question.value.trim() === "") {
        status.textContent = "the spirit won't answer silence.";
        return;
    }

    askSpirit();
    question.value = "";
});