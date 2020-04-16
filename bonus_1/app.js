var questions = ["What is your name?", "What language rules the web?"];
var answers = [];

var computerText = document.querySelector("#computerText");
var userText = document.querySelector("#answerText");

var questionIndex = 0;

renderQuestion();

var submitBtn = document.querySelector("#answerSubmit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  answers.push(userText.value);
  userText.value = "";
  questionIndex++;

  if (questionIndex === questions.length) {
    if (answers[1] === "javascript") {
      document.body.innerHTML = `<h1>Hello ${answers[0]} You are correct! ${answers[1]} rules the web</h1>`;
    } else {
      document.body.innerHTML = `<h1>Hello ${answers[0]} You are wrong! Javascript rules the web</h1>`;
    }
  } else {
    renderQuestion();
  }
});

function renderQuestion() {
  computerText.textContent = questions[questionIndex];
}
