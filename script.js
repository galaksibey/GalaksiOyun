
const mouse = document.getElementById("mouse");
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");

let score = 0;

// Rastgele konum ayarla
function moveMouse() {
    const maxX = gameArea.clientWidth - 50;
    const maxY = gameArea.clientHeight - 50;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    mouse.style.left = randomX + "px";
    mouse.style.top = randomY + "px";
}

mouse.addEventListener("click", () => {
    score += 1;
    scoreDisplay.textContent = score;
    moveMouse();
});

// Oyunu başlat
moveMouse();
