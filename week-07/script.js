console.log("My JavaScript file is connected!");

let title = document.getElementById("title");
let message = document.getElementById("message");

title.style.color = "darkgreen";

message.textContent = "Something has already changed.";

let button = document.getElementById("change-button");

button.addEventListener("click", function () {
  title.textContent = "You Changed the Story!";

  message.textContent = "The page responded to your action.";

  document.body.style.backgroundColor = "Black";
});

button.addEventListener("click", function () {
  title.textContent = "Why did you do that?";

  title.style.color = "crimson";

  message.textContent = "You were not supposed to find this.";

  message.style.color = "red";

  message.style.fontSize = "6rem";

  title.style.fontSize = "4rem";

  button.textContent = "You will regret this!";

    message.classList.add("shake");
});
