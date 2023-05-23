// function Question(id, text, options, right_answer) {

//     this.id = id;
//     this.text = text;
//     this.options = options;
//     this.right_answer = right_answer;
//     this.control = function (answer) {
//         return answer === this.right_answer;
//     }

// }



// let questions = [
//     new Question(1, "Which is program language", { a: "C#", b: "java", c: "C", d: "Javascript", e: "Javascript" }, "d"),
//     // new Question(2, "Which is program language", { a: "C#", b: "java", c: "C", d: "Javascript"}, "d"),
//     // new Question(3, "Which is program language", { a: "C#", b: "java", c: "C", d: "Javascript" }, "d"),
//     // new Question(4, "Which is program language", { a: "C#", b: "java", c: "C", d: "Javascript" }, "d"),

// ]
let questions = [
    {
        id: 1,
        text: "Which is program language",
        options: { a: "C#", b: "java", c: "C", d: "Javascript", e: "Javascript" },
        right_answer: "d",
    },
    // {
    //     id: 2,
    //     text: "Which is program language",
    //     options: { a: "C#", b: "java", c: "C", d: "Javascript", e: "Javascript" },
    //     right_answer:"d",
    // },
    // {
    //     id: 3,
    //     text: "Which is program language",
    //     options: { a: "C#", b: "java", c: "C", d: "Javascript", e: "Javascript" },
    //     right_answer:"d",
    // },


]


bring_quiz();
// check();


// /0,undefined,null,'',"", -- false  ////// [],{}


function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
}

// Quiz.prototype.bring = returnQuiz(questions);

const quiz = Quiz.prototype.bring;
document.querySelector(".btn-start").addEventListener("click", function () {
    document.querySelector(".quiz-box").classList.add("active");

})






function bring_quiz() {
    let bringer = document.getElementById("quizes");

    // let title = `<span>${questions.text}</span>`;
    // let options = '';


    for (let question of questions) {
        let quiz = `
        <header>
        <div class="head">
            <h1 class="title">Quiz test</h1>
        </div>
         </header>

    <section id="${question.id}" class="card-body">
        <div class="question">${question.text}</div>
        <div class="option-list">


            <div class="option  ${question.right_answer == 'a' ? 'correct' : 'incorrect'}">
                <div class="inner_option">
                    <span>${question.options.a}</span>
                    <div class="icon"> <i class="fas ${question.right_answer == 'a' ? 'fa-check' : 'fa-times'}"></i></div>
                </div>

            </div>
            <div class="option   ${question.right_answer == 'b' ? 'correct' : 'incorrect'}">
                <div class="inner_option">
                    <span>${question.options.b}</span>
                    <div class="icon"> <i class="fas  ${question.right_answer == 'b' ? 'fa-check' : 'fa-times'}"></i></div>
                </div>
            </div>

            <div class="option   ${question.right_answer == 'c' ? 'correct' : 'incorrect'}">
                <div class="inner_option">
                    <span>${question.options.c}</span>
                    <div class="icon"> <i class="fas  ${question.right_answer == 'c' ? 'fa-check' : 'fa-times'}"></i></div>
                 </div>
            </div>

            <div class="option   ${question.right_answer == 'd' ? 'correct' : 'incorrect'}">
               <div class="inner_option">   
                    <span>${question.options.d}</span>
                    <div class="icon"> <i class="fas  ${question.right_answer == 'd' ? 'fa-check' : 'fa-times'}"></i></div>
                </div>
             </div>

        </div>

     </section>
       `;

        bringer.insertAdjacentHTML("beforeend", quiz);

        let option = document.querySelector(".option");

        for (i = 0; i < 2; i++) {
            option.addEventListener("click", function () {
                option.classList.add("disabled");


            });
        }

    }
}








    // function bring_test() {
    //     let title = `<span>${questions.text}</span>`;
    //     let options = '';

        // for (let answer in questions.options) {
        //     options +=
        //         ` <div class="option incorrect">
        //                <div class="inner_option">
        //                   <span><b>${answer}</b>: ${questions.right_answer[answer]}</span>
        //                </div>
        //           </div>

        //         `;
        // }



    // }