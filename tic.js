const boxes = document.querySelectorAll(".box");
const reset = document.querySelector(".reset");
const msg = document.querySelector(".msg");
const winner = document.querySelector(".winner");

let player0 = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach(box => {
  box.addEventListener("click", () => {
    if (player0) {
      box.innerText = "O";
    } else {
      box.innerText = "X";
    }
    box.disabled = true;
    player0 = !player0;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      showWinner(pos1);
      disableBoxes();
      break;
    }
  }
};

const showWinner = (win) => {
  winner.innerText = `Congratulations, winner is ${win}`;
  msg.classList.remove("hide");
};

const disableBoxes = () => {
  boxes.forEach(box => {
    box.disabled = true;
  });
};

const enableBoxes = () => {
  boxes.forEach(box => {
    box.disabled = false;
    box.innerText = "";
  });
};

const resetGame = () => {
  player0 = true;
  enableBoxes();
  msg.classList.add("hide");
};

reset.addEventListener("click", resetGame);
