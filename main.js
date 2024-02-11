//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깎지 않음

let randomNumber = 0;
const playButton = document.getElementById("play-button");
const userInput = document.querySelector("#input-form input");
const resultArea = document.getElementById("result-area");
const resetButton = document.getElementById("reset-btn");
const chanceArea = document.getElementById("chance-area");
let history = [];
let chances = 5;
let gameOver = false;

function pickRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("answer:", randomNumber);
}

function clickPlayBtn(event) {
  event.preventDefault();
  let userValue = userInput.value;
  //userInput number 유효성 검사
  if (userValue < 1 || userInput.value > 100) {
    resultArea.textContent = "Please enter a number between 1 to 100";
    return; //리턴 하면 함수 종료
  }
  //history 데이터 유효성 검사
  if (history.includes(userValue)) {
    resultArea.textContent = "This number has already been entered";
    return;
  }
  chances--;
  chanceArea.textContent = `Chance: ${chances}`;

  if (userValue < randomNumber) {
    resultArea.textContent = "Up!!";
  } else if (userValue > randomNumber) {
    resultArea.textContent = "Down!!";
  } else {
    resultArea.textContent = "You are Win!!!";
    gameOver = true;
    chanceArea.textContent = "";
  }
  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver) {
    playButton.disabled = true;
  }
}
function resetGame() {
  //user input 비우기
  userInput.value = "";
  //새로운 랜덤 번호 생성
  pickRandomNumber();
  //결과 멘트 초기화
  resultArea.textContent = "The result is?";
  gameOver = false;
  userValue = [];
  playButton.disabled = false;
  chances = 5;
  chanceArea.textContent = `Chance: ${chances}`;
}
pickRandomNumber();
playButton.addEventListener("click", clickPlayBtn);
resetButton.addEventListener("click", resetGame);
userInput.addEventListener("focus", (event) => {
  userInput.value = "";
});
