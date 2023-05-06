let question = {
    text: "Which is program language",
    options: {
        a: "pthon",
        b: "css",
        c: "html"

    },
    right_answer: "a",

    control:function(answer){
        return answer===this.right_answer;
    }
}

console.log(question.text);
console.log(question.control("d"));