let questions = [
    {
        id: 1,
        type: "Quiz",
        text: "Takt tezliyi komputerin hansı hissəsinn göstəricisi sayılır?",
        options: { a: "prosessor", b: "RAM", c: "Klaviatura", d: "SkanerHDD" },
        right_answer: "a",
    },

    {
        id: 2,
        type: "Quiz",
        text: "Kompüteri işə salarkən bu sistemlərdən hansı daha əvvəl işə düşür?",
        options: { a: "BIOSMS", b: "Windows", c: "Autorun.EXE", d: "AutoStart" },
        right_answer: "b",
    },


    {
        id: 3,
        type: "Quiz",
        text: "İnternet saytlarda gördüyünüz, əsasən 2-5 epizoddan ibaret kiçik ölçülü, animasiya necə adlanır?",
        options: { a: "internet-klip", b: "banner", c: "video internet", d: "youtube" },
        right_answer: "b",
    },

];


let isQuizFinished = false;

var bringer = document.getElementById("quizes");
var question;
var curentquestionCount;
var questionsCount;
//start button
let button = document.querySelector(".btn-start.main");

var startQuestionIndex = 0;
var index = 1;
button.addEventListener("click", function () {

    document.querySelector(".quiz-box").style.display = "block";
    // timer
    startTimer(9);
    // 
    // question = questions[id];

    // previousButton.style.display = "none";
    curentquestionCount = document.querySelector(".currentQuestionCount")
    questionsCount = document.querySelector(".questionsCount")

    curentquestionCount.textContent = startQuestionIndex + 1;
    questionsCount.textContent = questions.length;
    button.style.display = "none"; // Start düyməsini gizlədər
    nextButton.style.display = "block";


    bring_quiz(startQuestionIndex);
    timeLine();
});

//next button
let nextButton = document.querySelector(".next");

nextButton.style.display = "none";
nextButton.addEventListener("click", function () {
    // previousButton.style.display = "block";
    // if (index === 0) {
    //     previousButton.style.display = "none";
    // }


    bringer.innerHTML = '';
    startQuestionIndex++;


    //isQuizFinished  quiz bitdikden sonra butun counter ve counterLine i silir
    if (startQuestionIndex === questions.length) {
        isQuizFinished = true;
        // last change for write "quiz over"
        if (isQuizFinished) {
            document.querySelector(".quiz-box").remove();

        }
        document.querySelector(".score_box").classList.add("active");
    }

    // timer

    if (startQuestionIndex < questions.length) {
        bring_quiz(startQuestionIndex);
    }


    clearInterval(counter);
    startTimer(9);
    clearInterval(counterLine);
    timeLine();


});

//previous button
let previousButton = document.querySelector(".previous");

previousButton.addEventListener("click", function () {


    bringer.innerHTML = '';
    startQuestionIndex--;



    // timer

    bring_quiz(startQuestionIndex);
    clearInterval(counter);
    startTimer(9);
    clearInterval(counterLine);
    timeLine();



});




//bring quiz from back
function bring_quiz(id) {

    question = questions[id];
    previousButton.style.display = question.id === 1 ? "none" : "block";
    nextButton.style.display = question.id === questions.length ? "none" : "block";

    curentquestionCount.textContent = id + 1;
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
                <div class="question">${question.id}. ${question.text}</div>

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
    let timeWidth = 100;
    counterLine = setInterval(timer, 1000);
    function timer() {

        if (isQuizFinished) {
            clearInterval(counterLine);
            return;
        }

        timeWidth -= 10;
        document.querySelector(".time-line").style.width = timeWidth + "%";
        if (timeWidth >= 100) {
            clearInterval(counterLine);
        }
    }
}