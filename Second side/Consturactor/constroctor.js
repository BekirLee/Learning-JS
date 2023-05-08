// let question = {
//     text: "Which is program language",
//     options: {
//         a: "pthon",
//         b: "css",
//         c: "html"

//     },
//     right_answer: "a",

//     control: function (answer) {
//         return answer === this.right_answer;
//     }
// }

// console.log(question.text);
// console.log(question.control("d"));


function Answer(text, options, right_answer){
    this.text=text;
    this.options=options;
    this.right_answer=right_answer;

}
let question1= new Answer("Which is program language",{a:"python",b:"java",c:"C",} ,"c") 

