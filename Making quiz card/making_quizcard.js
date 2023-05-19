function Question(text, options, right_answer) {


    this.text = text;
    this.options = options;
    this.right_answer = right_answer;
    this.control = function (answer) {
        return answer === this.right_answer;
    }

}



let questions = [
    new Question("Which is program language", { a: "python", b: "java", c: "C", }, "c"),


    new Question("Which is program language", { a: "python", b: "java", c: "C", }, "c"),


    new Question("Which is program language", { a: "python", b: "java", c: "C", }, "c"),


]

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