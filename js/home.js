const bookmarkIcon = document.querySelector.bookmark;
const answerButton = document.querySelector.answer;
const answer = document.querySelector.showAnswer;

// when click on show answer reviel the answer and switch the button to  hide answer
answerButton.addEventListener("click", showAnswer);

function showAnswer() {
  if (answer.style.display === "none") {
    answerButton.classList.add("hide-answer");
    answer.style.display = "block";
    answerButton.textContent = "Hide Answer";
  } else {
    answer.style.display = "none";
    answerButton.classList.remove("hide-answer");
  }
}
