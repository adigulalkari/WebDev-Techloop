import quizData from "./quizData.js"

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

function loadQuiz() {
    // Commet the next line to show how it affects
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

loadQuiz()


// Explain the importance of this function as how the next page retains the selected option
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            if (score >= 5) {
                quiz.innerHTML = `
                                <h2>Damnn!<br> You know your stuff!!<br>Congrats!!<br>Your score is ${score}/${quizData.length}</h2>
                                <button onclick="location.href='index.html';">Go back to HomePage!!!</button>
                                `
            } else {
                quiz.innerHTML = `
            <h2>You could do better!!<br>Your score is ${score}/${quizData.length}</h2>
    
            <button onclick="location.href='index.html';">Go back to HomePage!!</button>
            `
            }
        }
    }
})

