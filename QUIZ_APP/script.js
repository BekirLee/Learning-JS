
const quiz = new QUIZ(questions);
let ui = new UI();


ui.btn_start.addEventListener("click", function () {
    ui.quiz_box.classList.add("active");
    ui.btn_start.classList.add("disappearing");
    // aşağıda olan hissəni anla
    showQuestion(quiz.getQuestion());
    showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
    ui.next_btn.classList.remove("show");
});

ui.next_btn.addEventListener("click", function () {


    if (quiz.questionIndex != questions.length + 1) {
        ui.quiz_box.classList.add("active");
        ui.btn_start.classList.add("disappearing");
        // aşağıda olan hissəni anla
        quiz.questionIndex += 1;
        showQuestion(quiz.getQuestion());
        showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
        ui.next_btn.classList.remove("show");

    }
    else {
        console.log("Quiz is over!");
    }

});

const option_list = ui.option_list;

function showQuestion(opinion) {

    let variant = `<span>${opinion.questiontext}</span>`;
    let option = '';
    for (let answers in opinion.options) {
        option +=
            `
            <div class="option ">
            <span><b>${answers}</b>: ${opinion.options[answers]}</span>
            </div>
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

function optionSelected(options) {

    // const correctIcon = '  <div class="icon"><i class="fas fa-check"></i></div>';
    // const incorrectIcon = '  <div class="icon"><i class="fas fa-times"></i></div>';
    let answer = options.querySelector("span b").textContent;
    let question = quiz.getQuestion();
    if (question.checkAnswer(answer)) {
        options.classList.add("correct");
        options.insertAdjacentHTML("beforeend", ui.correctIcon);
    }
    else {
        options.classList.add("incorrect");
        options.insertAdjacentHTML("beforeend", ui.incorrectIcon);

    }

    for (i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.next_btn.classList.add("show");

}

function showQuestionNumber(presentQuestion, allQuestions) {
    let tag = ` <span class="badge bg-warning">${presentQuestion}/${allQuestions}</span> `;
    ui.question_count.innerHTML = tag;

}