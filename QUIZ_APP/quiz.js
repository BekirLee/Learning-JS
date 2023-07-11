
function QUIZ(questions) {
    this.questions = questions;
    this.questionIndex = 1;
    this.trueAnswer = 0;
    this.wrongAswer = 0;
}

QUIZ.prototype.getQuestion = function () {
    return this.questions[this.questionIndex - 1];
}


