let questionEl = document.querySelector(".question");
let answerEl = document.querySelector(".answer-buttons");
let nextBtn = document.querySelector(".next-btn");
console.log(questionEl, answerEl, nextBtn);

const questions = [
  {
    question:
      "How can you detect the application name of the client’s browser?",
    answer: [
      {
        text: "navigator.appName",
        correct: true,
      },
      {
        text: "navigator.browserName",
        correct: false,
      },
      {
        text: "browser.name",
        correct: false,
      },
      {
        text: "navigator.userAgent",
        correct: false,
      },
    ],
  },

  {
    question:
      "Which of the following is the correct syntax to redirect a URL using JavaScript?",
    answer: [
      {
        text: "document.location='http://www.w3docs.com';",
        correct: false,
      },
      {
        text: "navigator.location='http://www.w3docs.com';",
        correct: false,
      },
      {
        text: "window.location='http://www.w3docs.com';",
        correct: true,
      },
      {
        text: "browser.location='http://www.w3docs.com';",
        correct: false,
      },
    ],
  },

  {
    question: "Which array method sorts the elements of an array?",
    answer: [
      {
        text: "sort()",
        correct: true,
      },
      {
        text: "changeOrder(order)",
        correct: false,
      },
      {
        text: "order()",
        correct: false,
      },
      {
        text: "None of the above methods",
        correct: false,
      },
    ],
  },

  {
    question: "How do you round the number 5.35 to the nearest integer?",
    answer: [
      {
        text: "rnd(5.35)",
        correct: false,
      },
      {
        text: "Math.rnd(5.35)",
        correct: false,
      },
      {
        text: "round(5.35)",
        correct: false,
      },
      {
        text: "Math.round(5.35)",
        correct: true,
      },
    ],
  },

  {
    question: "How do you write anything into the web page in JavaScript?",
    answer: [
      {
        text: "window.write(...)",
        correct: false,
      },
      {
        text: "document.write(...)",
        correct: true,
      },
      {
        text: "window.page.write(...)",
        correct: false,
      },
      {
        text: "document.page.write(...)",
        correct: false,
      },
    ],
  },

  {
    question:
      "Which of the following events occurs when the user clicks on an HTML element?",
    answer: [
      {
        text: "onchange",
        correct: false,
      },
      {
        text: "onmouseover",
        correct: false,
      },
      {
        text: "onmouseclick",
        correct: false,
      },
      {
        text: "onclick",
        correct: true,
      },
    ],
  },

  {
    question: "Which method converts a JSON string into a JavaScript object?",
    answer: [
      {
        text: "JSON.parse()",
        correct: true,
      },
      {
        text: "JSON.stringify()",
        correct: false,
      },
      {
        text: "Object.parse()",
        correct: false,
      },
      {
        text: "JSON.toObject()",
        correct: false,
      },
    ],
  },

  {
    question: "How do you create a Promise in JavaScript?",
    answer: [
      {
        text: "Promise.create()",
        correct: false,
      },
      {
        text: "new Promise()",
        correct: true,
      },
      {
        text: "Promise()",
        correct: false,
      },
      {
        text: "createPromise()",
        correct: false,
      },
    ],
  },

  {
    question:
      "Which of these is a correct way to declare an arrow function in JavaScript?",
    answer: [
      {
        text: "function() => {}",
        correct: false,
      },
      {
        text: "() -> {}",
        correct: false,
      },
      {
        text: "() => {}",
        correct: true,
      },
      {
        text: "=> function() {}",
        correct: false,
      },
    ],
  },

  {
    question:
      "How do you access the first element of an array named 'myArray'?",
    answer: [
      {
        text: "myArray[0]",
        correct: true,
      },
      {
        text: "myArray[1]",
        correct: false,
      },
      {
        text: "myArray.first",
        correct: false,
      },
      {
        text: "first(myArray)",
        correct: false,
      },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionEl.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerEl.appendChild(button);
    if (answer.correct) {
      console.log(answer.correct);
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";

  while (answerEl.firstChild) {
    console.log(answerEl.firstChild);
    answerEl.removeChild(answerEl.firstChild);
  }
}

function selectAnswer(e) {
  console.log(e);
  const selectedBtn = e.target;
  if (selectedBtn.dataset.correct === "true") {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerEl.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore() {
  resetState();
  questionEl.innerHTML = `You score ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
