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

let isQuizFinished = false;

var bringer = document.getElementById("quizes");
var question;

//start button
let button = document.querySelector(".btn-start.main");

var startQuestionIndex = 0;
button.addEventListener("click", function () {
    // timer
    startTimer(10);
    // 
    button.style.display = "none"; // Start düyməsini gizlədər
    nextButton.style.display = "block";
    previousButton.style.display = "block";

    bring_quiz(startQuestionIndex);
    timeLine();
});

//next button
let nextButton = document.querySelector(".next");

nextButton.style.display = "none";
nextButton.addEventListener("click", function () {

    bringer.innerHTML = '';
    startQuestionIndex++;

    //isQuizFinished  quiz bitdikden sonra butun counter ve counterLine i silir
    if (startQuestionIndex === questions.length - 1) {
        isQuizFinished = true;
        // last change for write "quiz over"
        document.querySelector(".score_box").classList.add("active");
    }

    // timer

    bring_quiz(startQuestionIndex);
    clearInterval(counter);
    startTimer(10);
    clearInterval(counterLine);
    timeLine();


});

//previous button
let previousButton = document.querySelector(".previous");

previousButton.style.display = "none";

previousButton.addEventListener("click", function () {

    bringer.innerHTML = '';
    startQuestionIndex--;



    // timer

    bring_quiz(startQuestionIndex);
    clearInterval(counter);
    startTimer(10);
    clearInterval(counterLine);
    timeLine();


});




//bring quiz from back
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
                <div class="second_time">10</div>
            </div>
            <div class="time-line"></div>
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
            //selected elave olunur ki, hover secildikde olmasin.
            option.classList.add('selected');
            // if (!option.classList.contains('disabled')) {

            let otherOptions = Array.from(options).filter(opt => opt !== option);
            otherOptions.forEach(opt => opt.classList.add('disabled'));

            let icon = option.querySelector(".icon i");
            if (option.dataset.value === question.right_answer) {
                option.classList.add("correct");
                icon.classList.add("fa-check");
                otherOptions.forEach(opt => opt.classList.add('disabled'));
            }
            else {
                option.classList.add("incorrect");
                icon.classList.add("fa-times");
                otherOptions.forEach(opt => opt.classList.add('disabled'));

            }
            clearInterval(counterLine);
            clearInterval(counter);
            // }
        });
    });



}

let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);
    // setInterval(timer, 1000);
    function timer() {

        if (isQuizFinished) {
            clearInterval(counter);
            return;
        }
        document.querySelector(".second_time").textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            // document.querySelector(".second_time").textContent = 0;
            document.querySelector(".time_next").textContent = "Time over :  "
            let answer = question.right_answer;

            let options = document.querySelector('.option-list');

            for (const item of options.children) {
                if (item.getAttribute('data-value') == answer) {
                    item.classList.add('correct');
                }
            }
        }
    }
}

let counterLine;
function timeLine() {
    let timeWidth = 0;
    counterLine = setInterval(timer, 100);
    function timer() {

        if (isQuizFinished) {
            clearInterval(counterLine);
            return;
        }

        timeWidth += 5;
        document.querySelector(".time-line").style.width = timeWidth + "px";
        if (timeWidth > 559) {
            clearInterval(counterLine);
        }
    }
}