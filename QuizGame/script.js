const quizData = [
  {
    question: "which language has the easiest syntax?",
    a: "Javascript",
    b: "Python",
    c: "Java",
    d: "C++",
    correct: "b",
  },

  {
    question: "what does HTML stands for?",
    a: "Hyper Text Markup Language",
    b: "Hyper text Markdown Language",
    c: "High Technologies Making library",
    d: "Hyper technologies Making Language",
    correct: "a",
  },

  {
    question: "What does CSS stands for?",
    a: "Cascading style maker",
    b: "Cascading sheets style",
    c: "Cascading style sheets",
    d: "cascade science sheet",
    correct: "c",
  },

  {
    question:
      "Which are the three basic Languages that need to become a front end developer",
    a: "HTML CSS Java",
    b: "HTML CSS C++",
    c: "HTML CSS Python",
    d: "HTML CSS Javascript",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnsers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnsers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", function () {
  const answer = getSelected();

  if (answer === quizData[currentQuiz].correct) {
    score++;
  }

  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
      
      <h2>You answered ${score}/${quizData.length} correctly</h2>

      <button onclick="location.reload()">Reload</button>

      `;
  }
});
