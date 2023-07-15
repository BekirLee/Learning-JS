const quiz = new QUIZ(questions);
let ui = new UI();


ui.btn_start.addEventListener("click", function () {
    startTimer(10);
    startTimerLine();
    ui.quiz_box.classList.add("active");
    ui.btn_start.classList.add("disappearing");
    // aşağıda olan hissəni anla
    showQuestion(quiz.getQuestion());
    showQuestionNumber(quiz.questionIndex, quiz.questions.length);
    ui.next_btn.classList.remove("show");
});

ui.next_btn.addEventListener("click", function () {


    if (quiz.questionIndex != questions.length) {
        ui.quiz_box.classList.add("active");
        ui.btn_start.classList.add("disappearing");
        // aşağıda olan hissəni anla
        quiz.questionIndex += 1;
        startTimer(10);

        clearInterval(counterLine);
        startTimerLine();

        showQuestion(quiz.getQuestion());
        showQuestionNumber(quiz.questionIndex, quiz.questions.length);
        ui.next_btn.classList.remove("show");

    }
    else {
        console.log("Quiz is over!");
        clearInterval(counter);
        clearInterval(counterLine);
        startTimerLine();
        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active");
        showResult(quiz.trueAnswer, quiz.wrongAswer, quiz.noneAnswer, quiz.questions.length);
    }

});

ui.finish.addEventListener("click", function () {
    ui.btn_start.classList.add("disabled");
    window.location.reload();
})

const option_list = ui.option_list;

function showQuestion(opinion) {

    let variant = `<span>${opinion.questiontext}</span>`;
    let option = '';
    for (let answers in opinion.options) {
        option +=
            `
            <div class="option ">
            <span>      
            <input type="radio" name="" id="same">
            <label for="same">  <b>${opinion.options[answers]}</b></label>
            </span>
        </div>
          
        
        `;
    }

    ui.question_text.innerHTML = variant;
    ui.option_list.innerHTML = option;

    let options = option_list.querySelectorAll(".option");

    for (let value of options) {
        value.setAttribute("onclick", "optionSelected(this)");
    }
}

// function optionSelected(options) {
//     clearInterval(counter);

//     const correctIcon = '  <div class="icon"><i class="fas fa-check"></i></div>';
//     const incorrectIcon = '  <div class="icon"><i class="fas fa-times"></i></div>';
//     let answer = options.querySelector("span ").textContent;
//     let question = quiz.getQuestion();
//     if (question.checkAnswer(answer)) {
//         clearInterval(counterLine);
//         quiz.trueAnswer += 1;
//         options.classList.add("correct");
//         options.insertAdjacentHTML("beforeend", ui.correctIcon);
//     }
//     else {
//         clearInterval(counterLine);
//         quiz.wrongAswer += 1;
//         options.classList.add("incorrect");
//         options.insertAdjacentHTML("beforeend", ui.incorrectIcon);

//     }

//     for (i = 0; i < ui.option_list.children.length; i++) {
//         ui.option_list.children[i].classList.add("disabled");
//     }
//     ui.next_btn.classList.add("show");

// }


function optionSelected(option) {
    clearInterval(counter);

    let answer = option.querySelector("span b").textContent;
    console.log(answer);
    let question = quiz.getQuestion();
    if (question.checkAnswer(answer)) {

        clearInterval(counterLine);
        quiz.trueAnswer += 1;
    } else {
        clearInterval(counterLine);
        quiz.wrongAswer += 1;
    }

    // Tüm seçeneklerin checked özelliğini false yapalım
    const allOptions = ui.option_list.querySelectorAll(".option input[type='radio']");
    allOptions.forEach((opt) => (opt.checked = false));

    // Sadece seçilen seçeneğin checked özelliğini true yapalım
    option.querySelector("input[type='radio']").checked = true;

    // Diğer seçeneklerin üzerindeki tıklamayı devre dışı bırakalım
    for (let i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
        ui.option_list.children[i].removeAttribute("onclick");
    }

    ui.next_btn.classList.add("show");
}



function showQuestionNumber(presentQuestion, allQuestions) {
    let tag = ` <span class="badge bg-warning">${presentQuestion}/${allQuestions}</span> `;
    ui.question_count.innerHTML = tag;

}

function showResult(correct, wrong, none, allQuestions) {
    let tag = `<div>
            <span>${correct} : true answer <br></br>
            ${wrong} : wrong answer <br></br>
            ${none} : none answer from ${allQuestions} questions </span>
            </div>
    `;
    ui.score.innerHTML = tag;

}

let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        if (time >= 0) {
            ui.second_time.textContent = time;
            time--;
        } else {
            clearInterval(counter);
            ui.time_text.textContent = "Quiz Over!";
            quiz.noneAnswer += 1;
            // choose correct answers itself
            let true_answer = quiz.getQuestion().correctAnswer;
            for (let option of ui.option_list.children) {
                if (option.querySelector("span b").textContent == true_answer) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                option.classList.add("disabled");
                ui.next_btn.classList.add("show");
            }
        }
    }

}
let counterLine;
function startTimerLine() {
    let line = 550;
    counterLine = setInterval(timer, 20);
    function timer() {
        line -= 1;
        ui.time_line.style.width = line + "px";
        if (line < 0) {
            clearInterval(counterLine);
        }
    }
}