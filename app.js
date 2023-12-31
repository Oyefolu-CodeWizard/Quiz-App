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

  {
    question: "What is Hoisting in javascript?",
    answer: [
      {
        text: "Hoisting is the behaviour of javascript where all Object are stored in the heap.",
        correct: false,
      },
      {
        text: `Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.
        This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.`,
        correct: true,
      },
      {
        text: "Hoisting is the default behaviour of javascript where all the variable and function declarations are stored in the call stack.",
        correct: false,
      },
      {
        text: "Hoisting is the default behaviour of javascript where all arrays are moved below the scope.",
        correct: false,
      },
    ],
  },

  {
    question: "What is the difference between “ == “ and “ === “ operators?",
    answer: [
      {
        text: "Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types.",
        correct: true,
      },
      {
        text: "The difference between both the operators is that “==” is an equality sign whereas, “ === “ is a comparison sign.",
        correct: false,
      },
      {
        text: "The difference between both the operators is that “==” is an assignment operator whereas, “ === “ is a conditional operator.",
        correct: false,
      },
      {
        text: "The difference between both the operators is that “==” is used to compare variables whereas, “ === “ is used to compare both variables and functions.",
        correct: false,
      },
    ],
  },

  {
    question: "What is Type Coercion in javascript?",
    answer: [
      {
        text: "Type coercion in javascript is the conversion of strings to numbers.",
        correct: false,
      },
      {
        text: "Type coercion is the automatic conversion of number to strings.",
        correct: false,
      },
      {
        text: "Type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.",
        correct: true,
      },
      {
        text: "Type coercion in javascript is the automatic conversion of numbers from one data type to another.",
        correct: false,
      },
    ],
  },

  {
    question: "What is NaN property in JavaScript?",
    answer: [
      {
        text: "NaN indicates a value that is not a legal string.",
        correct: false,
      },
      {
        text: "NaN indicates a value that is a string.",
        correct: false,
      },
      {
        text: "NaN indicates a value that is a legal number.",
        correct: false,
      },
      {
        text: "NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.",
        correct: true,
      },
    ],
  },

  {
    question: "What is an Immediately Invoked Function in JavaScript?",
    answer: [
      {
        text: "An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.",
        correct: true,
      },
      {
        text: "It is a function that runs as soon as it is called.",
        correct: false,
      },
      {
        text: "It is an asynchronous function that runs as soon as it is defined.",
        correct: false,
      },
      {
        text: "It is a function that runs as soon as it is returned.",
        correct: false,
      },
    ],
  },

  {
    question: "What is “this” keyword?",
    answer: [
      {
        text: "The “this” keyword refers to the event that the function is a property of.",
        correct: false,
      },
      {
        text: "The “this” keyword refers to the function that the parameter is a property of.",
        correct: false,
      },
      {
        text: "The “this” keyword refers to the object that the function is a property of.",
        correct: true,
      },
      {
        text: "The “this” keyword refers to the object that the value is a property of.",
        correct: false,
      },
    ],
  },

  {
    question: "What is currying in JavaScript?",
    answer: [
      {
        text: "Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.",
        correct: true,
      },
      {
        text: "Currying is an advanced technique to transform a function of parenthesis n, to n functions of one or fewer arguments.",
        correct: false,
      },
      {
        text: "Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer parameter.",
        correct: false,
      },
      {
        text: "Currying is an advanced technique to transform a function of parenthesis n, to n functions of one or fewer parameter.",
        correct: false,
      },
    ],
  },

  {
    question: "What is Closures in JavaScript?",
    answer: [
      {
        text: "Closures are an ability of a function to remember it's parameter and arguments that are declared in its inner scope.",
        correct: false,
      },
      {
        text: "Closures are an ability of a function to remember the variables and functions that are declared in its inner scope.",
        correct: false,
      },
      {
        text: "Closures are an ability of an object to remember the property and value that are declared in its outer scope.",
        correct: false,
      },
      {
        text: "Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.",
        correct: true,
      },
    ],
  },

  {
    question: "What are callbacks?",
    answer: [
      {
        text: "A callback is a function that will be executed after another function gets executed. In javascript, functions are treated as first-class citizens, they can be used as an argument of another function, can be returned by another function, and can be used as a property of an object.",
        correct: true,
      },
      {
        text: "A callback is a function that will be executed after another function is declared.",
        correct: false,
      },
      {
        text: "A callback is a function that will be executed before another function gets executed.",
        correct: false,
      },
      {
        text: "A callback is a function that will be executed after another function is returned.",
        correct: false,
      },
    ],
  },

  {
    question: "What is recursion in a programming language?",
    answer: [
      {
        text: "Recursion is a technique to iterate over an operation by having a function call itself repeatedly until it arrives at a result.",
        correct: true,
      },
      {
        text: "Recursion is a technique to loop over an operation by having a function call itself once until it arrives at a result.",
        correct: false,
      },
      {
        text: "Recursion is a technique to iterate over an operation by having a function call itself once until it is returned.",
        correct: false,
      },
      {
        text: "Recursion is a technique to loop over an operation by having a function call itself twice until it arrives at a result.",
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
