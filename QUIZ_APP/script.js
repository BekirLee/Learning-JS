function Question(questiontext, options, correctAnswer) {
    this.questiontext = questiontext;
    this.options = options;
    this.correctAnswer = correctAnswer;

}

Question.prototype.checkAnswer = function (check) {
    return check === this.correctAnswer;
}

let questions = [
    new Question("1-What web developer should know?", { a: "Python", b: "JS", c: "Java" }, "b"),
    new Question("2- What are the newly introduced input types in HTML5?", { a: "color date , Datetime-local ,email ,month ,number range", b: " audio, video , source", c: "border-top-left-radius, border-top-right-radius, border-bottom-left-radius" }, "a"),
    new Question("3-Why is float used in CSS?", { a: "Long polling is a development pattern that is used to emulate a data push operation from a server to a client machine.", b: "It only applies to elements that are positioned, i.e., those elements having the position attribute compulsorily.", c: "Float is a popular property in CSS to control the layout and position of an element on a web page." }, "c")
];

function QUIZ(questions) {
    this.questions = questions;
    this.questionIndex = 0;
}

QUIZ.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];
}

const quiz = new QUIZ(questions);


document.querySelector(".main").addEventListener("click", function () {
    document.querySelector(".quiz-box").classList.add("active");
    document.querySelector(".main").classList.add("disappearing");
    // aşağıda olan hissəni anla
    showQuestion(quiz.getQuestion());

});

document.querySelector(".next").addEventListener("click", function () {


    if (quiz.questionIndex != questions.length + 1) {
        document.querySelector(".quiz-box").classList.add("active");
        document.querySelector(".main").classList.add("disappearing");
        // aşağıda olan hissəni anla
        quiz.questionIndex += 1;
        showQuestion(quiz.getQuestion());

    }
    else {
        alert('Quiz Completed');
    }

});

function showQuestion(opinion) {

    let variant = `<span>${opinion.questiontext}</span>`;
    let option = '';
    for (let answers in opinion.options) {
        option +=
            `
            <div class="option correct">
            <span>${answers}: ${opinion.options[answers]}</span>
            </div>
        </div>
          

            `;
    }
    document.querySelector(".question_text").innerHTML = variant;
    document.querySelector(".option-list").innerHTML = option;

}
