function Question(questiontext, options, correctAnswer) {
    this.questiontext = questiontext;
    this.options = options;
    this.correctAnswer = correctAnswer;

}

Question.prototype.checkAnswer = function (check) {
    return check === this.correctAnswer;
}

let questions = [
    new Question("1-What web developer should know?", { a: "What web developer should know?", b: "What web developer should know?", c: "What web developer should know?" }, "c"),
    new Question("2-What web developer should know?", { a: "What web developer should know?", b: "What web developer should know?", c: "What web developer should know?" }, "c"),
    new Question("3-What web developer should know?", { a: "What web developer should know?", b: "What web developer should know?", c: "What web developer should know?" }, "c")
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
    if (quiz.questionIndex != questions.length) {
        console.log(quiz.getQuestion());
        quiz.questionIndex += 1;
        
    }
    else {
        alert('Quiz Completed');
    }

});
