let questions = [
    {
        id: 1,
        type: "Quiz",
        text: "Which programming language is JavaScript?",
        options: { a: "C#", b: "Java", c: "C", d: "JavaScript" },
        right_answer: "d",
    },
    // {
    //     id: 2,
    //     type: "Quiz",
    //     text: "Which programming language is Python?",
    //     options: { a: "C#", b: "Java", c: "C", d: "Python" },
    //     right_answer: "d",
    // },
    // {
    //     id: 3,
    //     type: "Quiz",
    //     text: "Which programming language is Ruby?",
    //     options: { a: "Ruby", b: "Java", c: "C", d: "JavaScript" },
    //     right_answer: "a",
    // },
];


function bring_quiz() {
    let bringer = document.getElementById("quizes");

    for (question of questions) {

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

        let quizHTML = ` 
         <div class="title_text"><span>Begin Quiz</span></div>
            <section id="${question.id}" class="card-body">
                <div class="question">${question.text}</div>
                <div class="option-list">
                    ${optionsHTML}
                </div>
            </section>
        `;

        bringer.insertAdjacentHTML("beforeend", quizHTML);
    }

    let options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', function () {
            if (!option.classList.contains('disabled')) {
                option.classList.add('disabled');
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



let button = document.querySelector(".btn-start.main");

button.addEventListener("click", function () {
    button.style.display = "none"; // Start düyməsini gizlədər
    bring_quiz();
});
