let score = 0;
let level = 1;
let streak = 0;
let currentAnswer;

const answerInput = document.getElementById("answer");
const submitButton = document.getElementById("submitButton");
const message = document.getElementById("message");

const patternDisplay = document.getElementById("pattern");
const scoreDisplay = document.getElementById("score");
const levelDisplay = document.getElementById("level");
const streakDisplay = document.getElementById("streak");


const patterns = {

    1: [
        {
            numbers: [2, 4, 6, 8],
            answer: 10
        },
        {
            numbers: [5, 10, 15, 20],
            answer: 25
        },
        {
            numbers: [3, 6, 9, 12],
            answer: 15
        },
        {
            numbers: [10, 20, 30, 40],
            answer: 50
        }
    ],

    2: [
        {
            numbers: [3, 6, 12, 24],
            answer: 48
        },
        {
            numbers: [20, 18, 16, 14],
            answer: 12
        },
        {
            numbers: [2, 6, 18, 54],
            answer: 162
        },
        {
            numbers: [5, 10, 20, 40],
            answer: 80
        }
    ],

    3: [
        {
            numbers: [2, 5, 10, 17, 26],
            answer: 37
        },
        {
            numbers: [1, 4, 9, 16, 25],
            answer: 36
        },
        {
            numbers: [3, 8, 15, 24, 35],
            answer: 48
        },
        {
            numbers: [4, 9, 16, 25, 36],
            answer: 49
        }
    ]
};


function generatePattern() {

    const levelPatterns = patterns[level];

    const randomIndex =
        Math.floor(Math.random() * levelPatterns.length);

    const selectedPattern =
        levelPatterns[randomIndex];

    patternDisplay.textContent =
        selectedPattern.numbers.join("   ") + "   ?";

    currentAnswer = selectedPattern.answer;
}


function checkAnswer() {

    const userAnswer = Number(answerInput.value);

    if (answerInput.value === "") {
        message.textContent =
            "⚠️ Please enter an answer!";
        return;
    }


    if (userAnswer === currentAnswer) {

        score += 10;
        streak++;

        message.textContent =
            "🎉 Correct! +10 points!";


        if (score >= 30 && level === 1) {

            level = 2;

            message.textContent =
                "🔥 Level 2 Unlocked!";
        }


        if (score >= 60 && level === 2) {

            level = 3;

            message.textContent =
                "🚀 Level 3 Unlocked!";
        }


        scoreDisplay.textContent = score;
        levelDisplay.textContent = level;
        streakDisplay.textContent = streak;

        answerInput.value = "";

        generatePattern();

    } else {

        streak = 0;

        streakDisplay.textContent = streak;

        message.textContent =
            "❌ Wrong answer. Try again!";

    }
}


submitButton.addEventListener(
    "click",
    checkAnswer
);


answerInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            checkAnswer();

        }

    }
);


generatePattern();