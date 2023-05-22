function Question(id, text, options, right_answer) {

    this.id = id;
    this.text = text;
    this.options = options;
    this.right_answer = right_answer;
    this.control = function (answer) {
        return answer === this.right_answer;
    }

}



let questions = [
    new Question(1, "Which is program language", { a: "C#", b: "java", c: "C", d: "Javascript", e: "Javascript" }, "d"),
    // new Question(2, "Which is program language", { a: "C#", b: "java", c: "C", d: "Javascript"}, "d"),
    // new Question(3, "Which is program language", { a: "C#", b: "java", c: "C", d: "Javascript" }, "d"),
    // new Question(4, "Which is program language", { a: "C#", b: "java", c: "C", d: "Javascript" }, "d"),

]

bring_quiz();


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
        for (let i = 0; i < question.options.children.length; i++) {
            question.options.children[i].classList.add("disabled");
        }



        bringer.insertAdjacentHTML("beforeend", quiz);


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