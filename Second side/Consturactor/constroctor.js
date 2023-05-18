
function Answer(text, options, right_answer) {
    this.text = text;
    this.options = options;
    this.right_answer = right_answer;
    this.control = function (answer) {
        return answer == this.right_answer;
    }

}
let question1 = new Answer("Which is program language", { a: "python", b: "java", c: "C", }, "c");
console.log(question1.right_answer);

console.log(question1.control("c"));
