function Question(questiontext, options, correctAnswer) {
    this.questiontext = questiontext;
    this.options = options;
    this.correctAnswer = correctAnswer;
    console.log(this);
}

Question.prototype.checkAnswer = function (check) {
    return (check) === this.correctAnswer;
}

let questions = [
    new Question("What web developer should know?",{a:"What web developer should know?",b})
]





console.log(question1.checkAnswer("c"));