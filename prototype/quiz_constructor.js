
function Answer(text, options, right_answer) {
    this.text = text;
    this.options = options;
    this.right_answer = right_answer;
    this.control = function (answer) {
        return answer === this.right_answer;
    }

}
let questions = [
    new Answer("Which is program language", { a: "python", b: "java", c: "C", }, "c"),


    new Answer("Which is program language", { a: "python", b: "java", c: "C", }, "c"),


    new Answer("Which is program language", { a: "python", b: "java", c: "C", }, "c"),


]

function Quiz(questions) {
    this.questions = questions;
    this.questionIndex=0;


}
Quiz.prototype.bring = function() {
    return this.questions[this.questionIndex];
}


const quiz = Quiz(questions);


document.querySelector(".btn-start").addEventListener("click", function () {

    console.log(quiz.bring());
    quiz.questionIndex += 1;

})