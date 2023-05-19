function Question(id,text, options, right_answer) {

    this.id = id;
    this.text = text;
    this.options = options;
    this.right_answer = right_answer;
    this.control = function (answer) {
        return answer === this.right_answer;
    }

}



let questions = [
    new Question(1, "Which is program language", { a: "python", b: "java", c: "C", }, "c"),


  
]

bring_quiz();

// /0,undefined,null,'',"", -- false  ////// [],{}


function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.bring = returnQuiz(questions)

const quiz = Quiz.prototype.bring;
document.querySelector(".btn-start").addEventListener("click", function () {
    document.querySelector(".quiz-box").classList.add("active");
    console.log(quiz.options)
    console.log(quiz.control('c'))

})


function returnQuiz(questions) {
    return questions[0];
}

function bring_quiz() {
    let bringer = document.getElementById("quizes")

    for (taken_question of questions) {
        let quiz = `
        <header>
        <div class="head">
            <h1 class="title">Quiz test</h1>
        </div>
         </header>

    <section id="${taken_question.id}" class="card-body">
        <div class="question">${taken_question.text}</div>
        <div class="option-list">
            <div class="option  correct">
                <div class="inner_option">
                    <span>${taken_question.options} </span>
                    <div class="icon"> <i class="fas fa-check"></i></div>
                </div>

            </div>

            <div class="option incorrect">
                <div class="inner_option">
                    <span>${taken_question.options}</span>
                    <div class="icon"> <i class="fas fa-times"></i></div>
                </div>

            </div>

            <div class="option  incorrect">
                <div class="inner_option">
                    <span>${taken_question.options}</span>
                    <div class="icon"> <i class="fas fa-times"></i></div>
                </div>

            </div>

            <div class="option  incorrect">
                <div class="inner_option">
                    <span> ${taken_question.options}</span>
                    <div class="icon"> <i class="fas fa-times"></i></div>
                </div>

            </div>
        </div>
     </section> `;
        bringer.insertAdjacentHTML("beforeend", quiz);
    }
}