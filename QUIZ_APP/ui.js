function UI() {
    this.btn_start = document.querySelector(".btn-start"),
        this.quiz_box = document.querySelector(".quiz-box"),
        this.next_btn = document.querySelector(".next"),
        this.option_list = document.querySelector(".option-list"),
        this.question_text = document.querySelector(".question_text"),
        this.question_count = document.querySelector(".questionCount"),
        this.correctIcon = '  <div class="icon"><i class="fas fa-check"></i></div>',
        this.incorrectIcon = '  <div class="icon"><i class="fas fa-times"></i></div>',
        this.score_box = document.querySelector(".score_box"),
        this.score = document.querySelector(".score"),
        this.finish = document.querySelector(".quit"),
        this.second_time = document.querySelector(".second_time"),
        this.time_text = document.querySelector(".time_text")

}