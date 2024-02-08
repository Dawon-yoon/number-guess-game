//유저가 번호를 입력 한다 -> go라는 버튼을 누름
//유저가 번호를 맞추면-> 맞췄습니다. 표시
//유저번호 > 랜덤번호 -> Down!
//유저번호 <랜덤번호 -> Up!
//리셋 버튼 누르면 게임이 리셋된다
//5회 기회 소진시 게임이 끝(버튼이 disable)
//유저가 1=100 범위 밖 숫자를 입력하면 알려준다. 기회를 깎지 않음
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깎지 않음

let randomNumber = 0;
const playButtonn = document.getElementById("play-button");
const userInput = document.querySelector("#input-form input");
const resultArea = document.getElementById("result-area");

function clickPlayBtn(event) {
  event.preventDefault();
  let userValue = userInput.value;
  if (userValue < randomNumber) {
    resultArea.textContent = "Up!";
  } else if (userValue > randomNumber) {
    resultArea.textContent = "Down!";
  } else {
    resultArea.textContent = "Perpect Answer";
  }
}
playButtonn.addEventListener("click", clickPlayBtn);

function pickRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("정답", randomNumber);
}

pickRandomNumber();
