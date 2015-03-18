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
        if ($('input[type="radio"]:checked').val()) {
            check_answer();
            current_question++;
            next_question();
        } else {
            alert("You've got to pick an answer.");
        }
    });

    $('input#start-over').click(function() {
        current_question = 0;
        number_correct = 0;
        $(".question").remove();
        next_question();
        $('input#submit-button').css('display', 'inline-block');
        $('input#start-over').css('display', 'none');
    });

    function next_question() {
        // check for correct answer
        $(".question").remove();
        // move to next question
        if (current_question > 4) {
            // show stats prompt to start over
            // how many got correct
            var quiz_result = "<span>You got "+number_correct+" out of "+current_question+" correct!</span>"
            $('.question-wrapper').html(quiz_result);
            // switch buttons
            $('input#submit-button').css('display', 'none');
            $('input#start-over').css('display', 'inline-block');
        }
        else {
            // change elements to current question
            add_question_block();
        }
    }

    function check_answer() {
        var checked_answer = $("input[type='radio']:checked").val()
        if (checked_answer == quiz_questions[current_question].correct_answer_index) {
            number_correct++;
        }
    }

    function add_question_block() {
        var q_block = '<span class="question">'+quiz_questions[current_question].question+
                        '</span><br><br><div class="answer-holder">';
        for (var i = 0; quiz_questions[current_question].answers.length > i; i++) {
            q_block += '<input type="radio" name="option" class="option" value='+i+'><span class="answer">'+quiz_questions[current_question].answers[i]+'</span><br>';
        };
         q_block += '</div>';
         $('.question-wrapper').html(q_block);
    };

});