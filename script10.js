const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b"
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d"
    }
];

const quizContainer = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quizContainer.innerHTML = `
        <div class="mb-4">
            <h2 class="text-xl">${currentQuizData.question}</h2>
        </div>
        <div class="mb-2">
            <input type="radio" name="answer" id="a" value="a">
            <label for="a">${currentQuizData.a}</label>
        </div>
        <div class="mb-2">
            <input type="radio" name="answer" id="b" value="b">
            <label for="b">${currentQuizData.b}</label>
        </div>
        <div class="mb-2">
            <input type="radio" name="answer" id="c" value="c">
            <label for="c">${currentQuizData.c}</label>
        </div>
        <div class="mb-2">
            <input type="radio" name="answer" id="d" value="d">
            <label for="d">${currentQuizData.d}</label>
        </div>
    `;
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;
    answers.forEach((answer) => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });
    return selectedAnswer;
}

submitBtn.addEventListener('click', () => {
    const selectedAnswer = getSelected();
    if (selectedAnswer) {
        if (selectedAnswer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizContainer.innerHTML = '';
            resultContainer.innerHTML = `<p class="text-2xl">You answered ${score}/${quizData.length} questions correctly.</p>`;
        }
    }
});

loadQuiz();
