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
  ];