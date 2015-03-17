$(document).ready(function() {
    var current_question = 0;
    var number_correct = 0;
    var quiz_questions = [
        {
            question: "What is the average depth of the Great Salt Lake?",
            answers: ["68 Feet", "53 Feet", "27 Feet", "13 Feet"],
            question_number: 0,
            correct_answer: "13 Feet",
            correct_answer_index: 3
        },
        {
            question: "Which Fast Food Chain is Utah Home to?",
            answers: ["Taco Bell", "Wendys", "KFC", "Mcdonalds"],
            question_number: 1,
            correct_answer: "KFC",
            correct_answer_index: 2
        },
        {
            question: "How many inches does Alta Ski Resort get per year?",
            answers: ["240\"", "560\"", "460\"", "350\""],
            question_number: 2,
            correct_answer: "",
            correct_answer_index: 1
        },
        {
            question: "What is the state bird",
            answers: ["Blue Bird", "California Gull", "Golden Eagle", "Woodpecker"],
            question_number: 3,
            correct_answer: "California Gull",
            correct_answer_index: 1
        },
        {
            question: "What is Utah's greatest local restaurant?",
            answers: ["Crown Burger", "Iceberg", "Hires Big H", "Cafe Rio"],
            question_number: 4,
            correct_answer: "Hires Big H",
            correct_answer_index: 2
        }
    ];

    $('input#submit-button').click(function() {
        current_question++;
        next_question();
    });

    function next_question() {
        // check for correct answer

        // move to next question
        if (next_question > 4) {
            // show stats prompt to start over
            // how many got correct

            // switch buttons
        }
        else {
            // change elements to current question
            $(".question").remove();
            add_question_block();
        }
    }

    function check_answer() {
    }

    function remove_current_content() {
        $(".question").remove();
    }

    function add_question_block() {
        var q_block = '<span class="question">'+quiz_questions[current_question].question+
                        '</span><br><br><div class="answer-holder">';
        for (var i = 0; quiz_questions[current_question].answers.length > i; i++) {
            q_block += '<input type="radio" name="option" class="option" value=i><span class="answer">'+quiz_questions[current_question].answers[i]+'</span><br>';
        };
         q_block += '</div>';
         $('.question-wrapper').html(q_block);
    };

});