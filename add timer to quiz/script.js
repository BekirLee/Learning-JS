let questions = [
    {
        id: 0,
        type: "Quiz",
        text: "Which programming language is JavaScript?",
        options: { a: "C#", b: "Java", c: "C", d: "JavaScript" },
        right_answer: "d",
    },
    {
        id: 1,
        type: "Quiz",
        text: "Which programming language is Python?",
        options: { a: "C#", b: "Java", c: "C", d: "Python" },
        right_answer: "d",
    },
    {
        id: 2,
        type: "Quiz",
        text: "Which programming language is Ruby?",
        options: { a: "Ruby", b: "Java", c: "C", d: "JavaScript" },
        right_answer: "a",
    },
];

var bringer = document.getElementById("quizes");
var question;





let button = document.querySelector(".btn-start.main");

var startQuestionIndex=0;
button.addEventListener("click", function () {
    // timer
    startTimer(1);
    // 
    button.style.display = "none"; // Start düyməsini gizlədər
    bring_quiz(startQuestionIndex);
});


let nextButton = document.querySelector(".next");


nextButton.addEventListener("click", function () {
    bringer.innerHTML='';
    startQuestionIndex++;
    // timer
    startTimer(1);
    bring_quiz(startQuestionIndex);
  
});



function bring_quiz(id) {

    question = questions[id];

        let optionsHTML = "";

        for (let option in question.options) {

            optionsHTML += `    
                <div class="option" data-value="${option}">
                    <div class="inner_option">
                        <span>${question.options[option]}</span>
                        <div class="icon">
                            <i class="fas"></i>
                        </div>
                    </div>
                </div>
            `;
        }

        let quizHTML = `  <div class="header">
             <div class="title_text"><span>Begin Quiz</span></div>
            <div class="timer">
                <div class="time_next">Remaining time:</div>
                <div class="second_time">1</div>
            </div>
            </div>
            <section id="${question.id}" class="card-body">
                <div class="question">${question.text}</div>
                <div class="option-list">
                    ${optionsHTML}
                </div>
            </section>
        `;

        bringer.insertAdjacentHTML("beforeend", quizHTML);

    let options = document.querySelectorAll('.option');
    options.forEach(option => {

        option.addEventListener('click', function () {

            option.classList.toggle ('disabled');

            if (!option.classList.contains('disabled')) {

                
                let otherOptions = Array.from(options).filter(opt => opt !== option);
                otherOptions.forEach(opt => opt.classList.add('disabled'));

                let icon = option.querySelector(".icon i");
                if (option.dataset.value === question.right_answer) {
                    option.classList.add("correct");
      
                    icon.classList.add("fa-check");
                } else {
                    option.classList.add("incorrect");
                    icon.classList.add("fa-times");
                }
            }
        });
    });
}

let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);
    // setInterval(timer, 1000);
    function timer() {
        document.querySelector(".second_time").textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            // document.querySelector(".second_time").textContent = 0;
            document.querySelector(".time_next").textContent = "Time over :  "
            let answer = question.right_answer;

          let options =   document.querySelector('.option-list');

          for (const item of options.children) {
            
            if(item.getAttribute('data-value') == answer  ){
            item.classList.add('correct')
            }
          }
          
        }
    }

}