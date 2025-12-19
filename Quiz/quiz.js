const temer_text = document.getElementById("timer_text");
const question = document.getElementById("Question");
const opction_a = document.getElementById("opction-a");
const opction_b = document.getElementById("opction-b");
const opction_c = document.getElementById("opction-c");
const opction_d = document.getElementById("opction-d");
const next_btn = document.getElementById("next_btn");
let radio_option_a = document.getElementById("radio_option_a");
let radio_option_b = document.getElementById("radio_option_b");
let radio_option_c = document.getElementById("radio_option_c");
let radio_option_d = document.getElementById("radio_option_d");




let time_id = 0;
let currontQurindex = 0;
let score = 0;
const Quebank = [{
    id: 1,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: "Pacific Ocean",
    category: "Geography"
  },
  {
    id: 2,
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
    correctAnswer: "Albert Einstein",
    category: "Science"
  },
  {
    id: 3,
    question: "In which year did the Titanic sink?",
    options: ["1911", "1912", "1913", "1914"],
    correctAnswer: "1912",
    category: "History"
  },
  {
    id: 4,
    question: "What is the currency of Japan?",
    options: ["Won", "Yuan", "Ringgit", "Yen"],
    correctAnswer: "Yen",
    category: "Economics"
  },
  {
    id: 5,
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra",
    category: "Geography"
  },
  {
    id: 6,
    question: "How many sides does a hexagon have?",
    options: ["Five", "Six", "Seven", "Eight"],
    correctAnswer: "Six",
    category: "Mathematics"
  },
  {
    id: 7,
    question: "Which element has the chemical symbol 'Fe'?",
    options: ["Fluorine", "Iron", "Ferrum", "Fermium"],
    correctAnswer: "Iron",
    category: "Science"
  },
  {
    id: 8,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Michelangelo", "Leonardo da Vinci"],
    correctAnswer: "Leonardo da Vinci",
    category: "Art"
  },
  {
    id: 9,
    question: "What is the full form of 'www'?",
    options: ["World Web Wide", "Web World Wide", "Wide World Web", "World Wide Web"],
    correctAnswer: "World Wide Web",
    category: "Technology"
  },
  {
    id: 10,
    question: "What is the smallest country in the world by area?",
    options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
    correctAnswer: "Vatican City",
    category: "Geography"
  }
];

// Example of how to access a question:
// console.log(generalKnowledgeQuestions[0].question); 
// Output: "What is the largest ocean on Earth?"

// Example of how to access an answer:
// console.log(generalKnowledgeQuestions[0].answer);
// Output: "Pacific Ocean"
const starttimer = () => {
  let count = 60;
  time_id = setInterval(() => {
    temer_text.textContent = count;
    count--;
    if (count < 0) {
      clearInterval(time_id);
      if (currontQurindex < Quebank.length) {
        result();
        startQue();
      } else {
        result();
        // alert("the score is " + score + "/10");
      }
      return;
    }
  }, 1000)

};
const startQue = () => {
  radio_option_b.checked = false;
  radio_option_c.checked = false;
  radio_option_a.checked = false;
  radio_option_d.checked = false;
  clearInterval(time_id);
  starttimer();
  question.textContent = currontQurindex + 1 + " ." + Quebank[currontQurindex].question;

  opction_a.textContent = Quebank[currontQurindex].options[0];

  opction_b.textContent = Quebank[currontQurindex].options[1];

  opction_c.textContent = Quebank[currontQurindex].options[2];

  opction_d.textContent = Quebank[currontQurindex].options[3];
  if (currontQurindex < Quebank.length - 1) {
    currontQurindex++;
  } else {
    currontQurindex++;
    next_btn.textContent = "Submit";
    // next_btn.href = "result.html"; 
  }
}
const result = () => {
  if (radio_option_a.checked) {
    if (Quebank[currontQurindex - 1].correctAnswer == Quebank[currontQurindex - 1].options[0]) {
      score++;
    }
  } else if (radio_option_b.checked) {
    if (Quebank[currontQurindex - 1].correctAnswer == Quebank[currontQurindex - 1].options[1]) {
      score++;
    }
  } else if (radio_option_c.checked) {
    if (Quebank[currontQurindex - 1].correctAnswer == Quebank[currontQurindex - 1].options[2]) {
      score++;
    }
  } else if (radio_option_d.checked) {
    if (Quebank[currontQurindex - 1].correctAnswer == Quebank[currontQurindex - 1].options[3]) {
      score++;
    }
  }
  console.log("cirrect score : " + score);
};
starttimer();
startQue();

next_btn.addEventListener("click", () => {
  if (currontQurindex < Quebank.length) {
    result();
    startQue();
  } else {
    result();
    localStorage.setItem("quizScore", score);
    localStorage.setItem("totalQuestions", Quebank.length);

    
    window.location.href = "result.html";
  }
});
