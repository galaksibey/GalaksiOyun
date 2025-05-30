
let score = 0;
let gameArea = document.getElementById("gameArea");
let scoreSpan = document.getElementById("score");

function startGame() {
  score = 0;
  scoreSpan.textContent = score;
  spawnMouse();
}

function spawnMouse() {
  gameArea.innerHTML = "";
  let mouse = document.createElement("div");
  mouse.classList.add("mouse");

  let x = Math.random() * 260;
  let y = Math.random() * 260;
  mouse.style.left = x + "px";
  mouse.style.top = y + "px";

  mouse.onclick = function () {
    score++;
    scoreSpan.textContent = score;
    spawnMouse();
  };

  gameArea.appendChild(mouse);
}
