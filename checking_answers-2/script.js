let questions = [
    {
        id: 1,
        type: "Quiz",
        text: "Which programming language is JavaScript?",
        options: { a: "C#", b: "Java", c: "C", d: "JavaScript", e: "JavaScript" },
        right_answer: "d",
    },
    // {
    //     id: 2,
    // type:"Quiz",
    //     text: "Which programming language is Python?",
    //     options: { a: "C#", b: "Java", c: "C", d: "Python" },
    //     right_answer: "d",
    // },
    // {
    //     id: 3,
    // type:"Quiz",
    //     text: "Which programming language is Ruby?",
    //     options: { a: "Ruby", b: "Java", c: "C", d: "JavaScript" },
    //     right_answer: "a",
    // },
];


function bring_quiz() {
    let bringer = document.getElementById("quizes");

    for (let question of questions) {

        let optionsHTML = "";

        for (let option in question.options) {

            optionsHTML += `    
                <div class="option ${question.right_answer == option ? 'correct' : 'incorrect'}">
                    <div class="inner_option">
                        <span>${question.options[option]}</span>
                        <div class="icon">
                            <i class="fas ${question.right_answer == option ? 'fa-check' : 'fa-times'}"></i>
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

    // Variant seçildikdən sonra onları deaktiv edək
    let options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', function () {
            if (!option.classList.contains('disabled')) {
                option.classList.add('disabled');
                let otherOptions = Array.from(options).filter(opt => opt !== option);
                otherOptions.forEach(opt => opt.classList.add('disabled'));
            }
        });
    });
}

document.querySelector(".btn-start").addEventListener("click", function () {
    document.querySelector(".btn-start").style.display = "none"; // Start düyməsini gizlədər
    bring_quiz();
});
