document.body.onclick = function () {
  var audio = document.getElementById("background-music");
  audio.play();
};

function toggleAudio() {
  var audio = document.getElementById("background-music");
  if (audio.muted) {
    audio.muted = false;
  } else {
    audio.muted = true;
  }
}
function generateParagraphs() {
  let htmlContent = "";
  for (let i = 0; i < 1024; i++) {
    htmlContent += `<p class="cell" data-index="${i}"></p>`;
  }
  document.querySelector(".board").innerHTML = htmlContent;
}
let playerPosition = 0;
let playerPosition2 = 0;
let canMove1 = true;
let canMove2 = true;

function movePlayer(newPosition) {
  if (!canMove1) return;
  let currentCell = document.querySelectorAll(".cell")[playerPosition];
  currentCell.classList.remove("player");
  playerPosition = newPosition;
  let newCell = document.querySelectorAll(".cell")[playerPosition];
  newCell.classList.add("player");

  canMove1 = false;
  setTimeout(() => {
    canMove1 = true;
  }, 200);
}
function movePlayer2(newPosition2) {
  if (!canMove2) return;
  let currentCell2 = document.querySelectorAll(".cell")[playerPosition2];
  currentCell2.classList.remove("player2");
  playerPosition2 = newPosition2;
  let newCell2 = document.querySelectorAll(".cell")[playerPosition2];
  newCell2.classList.add("player2");
  canMove2 = false;
  setTimeout(() => {
    canMove2 = true;
  }, 200);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && playerPosition >= 32 && canMove1) {
    movePlayer(playerPosition - 32);
  } else if (event.key === "ArrowDown" && playerPosition < 992 && canMove1) {
    movePlayer(playerPosition + 32);
  } else if (
    event.key === "ArrowLeft" &&
    playerPosition % 32 !== 0 &&
    canMove1
  ) {
    movePlayer(playerPosition - 1);
  } else if (
    event.key === "ArrowRight" &&
    playerPosition % 32 !== 31 &&
    canMove1
  ) {
    movePlayer(playerPosition + 1);
  } else if (
    event.key === "q" ||
    (event.key === "Q" && playerPosition2 >= 32 && canMove2)
  ) {
    movePlayer2(playerPosition2 - 32);
  } else if (
    event.key === "s" ||
    (event.key === "S" && playerPosition2 < 992 && canMove2)
  ) {
    movePlayer2(playerPosition2 + 32);
  } else if (
    event.key === "w" ||
    (event.key === "W" && playerPosition2 % 32 !== 0 && canMove2)
  ) {
    movePlayer2(playerPosition2 - 1);
  } else if (
    event.key === "d" ||
    (event.key === "D" && playerPosition2 % 32 !== 31 && canMove2)
  ) {
    movePlayer2(playerPosition2 + 1);
  }
});

function toggleFullScreen() {
  const board = document.querySelector(".board");
  if (!document.fullscreenElement) {
    board
      .requestFullscreen()
      .then(() => {
        board.style.width = "100vw";
        board.style.height = "100vh";
        board.style.display = "grid";
        board.style.gridTemplateColumns = "repeat(32, 1fr)";
        board.style.gridTemplateRows = "repeat(32, 1fr)";
      })
      .catch((err) => {
        console.log(`Erreur lors du passage en plein écran: ${err.message}`);
      });
  } else {
    document.exitFullscreen();
  }
}

document.addEventListener("fullscreenchange", () => {
  const board = document.querySelector(".board");
  if (!document.fullscreenElement) {
    board.style.width = "";
    board.style.height = "";
    board.style.gridTemplateColumns = "repeat(32, 1fr)";
    board.style.gridTemplateRows = "repeat(32, 17px)";
  }
});

// Création du bouton fullscreen
const fullScreenButton = document.createElement("button");
fullScreenButton.textContent = "Plein écran";
fullScreenButton.style.display = "flex";
fullScreenButton.style.margin = "auto 40px 40px auto";
fullScreenButton.style.padding = "10px";
fullScreenButton.style.borderRadius = "5px";
fullScreenButton.style.border = "1px solid rgba(255, 255, 255, 0.233)";
fullScreenButton.addEventListener("click", toggleFullScreen);
document.body.appendChild(fullScreenButton);

window.onload = function () {
  let joueur1 = localStorage.getItem("joueur1");
  let joueur2 = localStorage.getItem("joueur2");
  let gameExited = sessionStorage.getItem("gameExited");

  if ((!joueur1 || !joueur2) && !gameExited) {
    alert("Un joueur a quitté avant de choisir. Retour à la sélection !");
    window.location.href = "../ChoiceCharacter/selection.html";
    return;
  }

  document.getElementById("message").innerHTML = `<div class="TextField">
                  <div class="el">
                      <p>Joueur 1 :</p>
                      <span>${joueur1}</span>
                  </div>
                  <div class="el">
                      <p class="vs">VS</p>
                  </div>
                  <div class="el">
                      <p>Joueur 2 :</p>
                      <span>${joueur2}</span>
                  </div>
              </div>`;
};

function fermerJeu() {
  sessionStorage.setItem("gameExited", "true");
  localStorage.removeItem("joueur1");
  localStorage.removeItem("joueur2");
  window.location.href = "../index.html";
}
generateParagraphs();
