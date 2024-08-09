document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Earth", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionElement = document.getElementById('question');
    const optionsList = document.getElementById('options-list');
    const nextButton = document.getElementById('next-btn');
    const resultSection = document.getElementById('result');
    const scoreElement = document.getElementById('score');
    const restartButton = document.getElementById('restart-btn');

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsList.innerHTML = '';

        currentQuestion.options.forEach(option => {
            const li = document.createElement('li');
            li.textContent = option;
            li.addEventListener('click', () => checkAnswer(option));
            optionsList.appendChild(li);
        });

        nextButton.classList.add('hidden');
    }

    function checkAnswer(selectedOption) {
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (selectedOption === correctAnswer) {
            score++;
        }

        document.querySelectorAll('#options-list li').forEach(li => {
            if (li.textContent === correctAnswer) {
                li.style.backgroundColor = '#4CAF50'; // Green for correct
            } else if (li.textContent === selectedOption) {
                li.style.backgroundColor = '#f44336'; // Red for incorrect
            }
        });

        nextButton.classList.remove('hidden');
    }

    function showResult() {
        questionElement.classList.add('hidden');
        optionsList.classList.add('hidden');
        nextButton.classList.add('hidden');
        resultSection.classList.remove('hidden');
        scoreElement.textContent = `Your score: ${score} / ${questions.length}`;
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    });

    restartButton.addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        resultSection.classList.add('hidden');
        questionElement.classList.remove('hidden');
        optionsList.classList.remove('hidden');
        loadQuestion();
    });

    loadQuestion();
});
