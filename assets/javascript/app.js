
// Create a trivia game that displays 10 questions 

$(document).ready(function () {

    //  array of objects (question, answers (4), right answer (1))

    var myQuestions = [
        {
            question: "What is the capital of Angola?",
            answers: {
                a: "Luanda", 
                b: "Dhaka", 
                c: "Thimphu", 
                d: "Ouagadougou",
            },
            correctAnswer: "a",
        }, {
            question: "What is the capital of Tajikistan?",
            answers: {
                a: "Dodoma", 
                b: "Thimphu", 
                c:"Dushanbe", 
                d: "Tunis",
            },
            correctAnswer: "c",
        }, {
            question: "What is the capital of Jamaica?",
            answers: {
                a: "Portmore", 
                b: "Kingston", 
                c: "Montego Bay", 
                d: "Saint Catherine",
            },
            correctAnswer: "b",
        }, {
            question: "What is the capital of Venezuela?",
            answers: {
                a: "Caracas", 
                b: "San Feliz", 
                c: "Borracho", 
                d: "Bogota",
            },
            correctAnswer: "a",
        }, {
            question: "What is the capital of Iran?",
            answers: {
                a: "Amman", 
                b: "Riyadh", 
                c: "Sanaa", 
                d: "Tehran",
            },
            correctAnswer: "d",
        }, {
            question: "What is the capital of Armenia?",
            answers: {
                a: "Algiers", 
                b: "Yerevan", 
                c: "Manama", 
                d: "Tehran",
            },
            correctAnswer: "b",
        }, {
            question: "What is the capital of Azerbaijan?",
            answers: {
                a: "Baku", 
                b: "Riyadh", 
                c: "Sanaa", 
                d: "Tehran",
            },
            correctAnswer: "a",
        }, {
            question: "What is the capital of Mali?",
            answers: {
                a: "Bamako", 
                b: "Vilnius", 
                c: "Sanaa", 
                d: "Tripoli",
            },
            correctAnswer: "a",
        }, {
            question: "What is the capital of Qatar?",
            answers: {
                a: "Castries", 
                b: "Kigali", 
                c: "Doha", 
                d: "Dakar",
            },
            correctAnswer: "c",
        }, {
            question: "What is the capital of Vietnam?",
            answers: {
                a: "Sa Pa", 
                b: "Ho Chi Minh", 
                c: "Hanoi", 
                d: "Hoi An",
            },
            correctAnswer: "c",
        }
    ]

    $(".counterTimer").hide()
    $("#submit").hide();


$(".startGame").on("click", function () {
    $(".startGame").hide();
    $("#submit").show();
    $(".counterTimer").show();
    $("#quiz").show();

    var time = 60;
    setTimeout(countDown, 1000);

    function countDown() {
        time--;
        $(".counterTimer").text("Time Left: " + time + " seconds");
        if (time > 0) {
            setTimeout(countDown, 1000);
        } else if (time === 0) {
            alert("Time is up!");
            $("#quiz").hide();
            $(".startGame").show();
            $("#submit").hide();
            $(".counterTimer").hide();
            time = 5;
            clearTimeout();

        }
        console.log(time)
    }


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
		
            answers = [];
    
            for(letter in questions[i].answers){
    
                // add radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        // combine output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
	}

    function showResults(questions, quizContainer, resultsContainer){
        $(".counterTimer").hide()
        // $(".startGame").show();

        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question
        for(var i=0; i<questions.length; i++){
    
            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
	
	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


})

})