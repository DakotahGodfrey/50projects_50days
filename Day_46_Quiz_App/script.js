const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'JavaScript',
    c: 'Python',
    d: 'C',
    correct: 'b',
  },
  {
    question: 'What Does Sass Stand for?',
    a: 'Syntactically awesome style sheets',
    b: 'Super amazing style sheets',
    c: 'SUVS, and super sailboats',
    d: 'Special Air Services',
    correct: 'a',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markdown Language',
    b: 'Hyperloop Machine Language',
    c: 'Hypertext Markup Language',
    d: 'Hypertext Math Language',
    correct: 'c',
  },
  {
    question: 'What is the answer to life. the universe and everything?',
    a: '7*2*3',
    b: '42',
    c: '14 * 3',
    d: 'All of the above',
    correct: 'd',
  },
];
const quiz = document.getElementById('quiz');
const answersEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answersEl.forEach((answerEl) => (answerEl.checked = false));
};

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

loadQuiz();

const getSelected = () => {
  let answer;

  answersEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
};

submitBtn.addEventListener('click', () => {
  let answer = getSelected();
  console.log(quizData[currentQuiz].correct);
  console.log(score);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h1 id="question"> You got ${score}/${quizData.length} questions right!</h2>
      <button onclick = "location.reload()">Retry</button>
      `;
    }
  }
});
