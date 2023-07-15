function Question(questiontext, options, correctAnswer) {
    this.questiontext = questiontext;
    this.options = options;
    this.correctAnswer = correctAnswer;

}

Question.prototype.checkAnswer = function (check) {
    return check === this.correctAnswer;
}

let questions = [
    new Question("1-What web developer must know?", { a: "Python", b: "JS", c: "Java" }, "b"),
    new Question("2- What are the newly introduced input types in HTML5?", { a: "color date , Datetime-local ,email ,month ,number range", b: " audio, video , source", c: "border-top-left-radius, border-top-right-radius, border-bottom-left-radius" }, "a"),
    new Question("3-Why is float used in CSS?", { a: "JavaScript can be used to easily modify classes and styles in an element by making use of the following syntax:", b: "It only applies to elements that are positioned, i.e., those elements having the position attribute compulsorily.", c: "Float is a popular property in CSS to control the layout and position of an element on a web page." }, "c"),
]