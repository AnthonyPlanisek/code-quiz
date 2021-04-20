var start = document.getElementById("start")
var quiz = document.getElementById("quiz")
var question = document.getElementById("question")
var counter = document.getElementById("counter")
var timeGauge = document.getElementById("timeGauge")
var choiceA = document.getElementById("A")
var choiceB = document.getElementById("B")
var choiceC = document.getElementById("C")
var choiceD = document.getElementById("D")

//questions to be displayed

var questions = [
    {
    question: "Commonly used Data Types do not include:",
    choiceA: "1. Strings",
    choiceB: "2. Booleans",
    choiceC: "3. Alerts",
    choiceD: "4. Numbers",
    correct: "C"
    },
    {
    question: "The condition in an if/else statement is enclosed within ___",
    choiceA: "1. Quotes",
    choiceB: "2. Curly brackets",
    choiceC: "3. Parenthesis",
    choiceD: "4. Square brackets",
    correct: "B"
    },
    {
    question: "Arrays in JavaScript can be used to store ____",
    choiceA: "1. Numbers and strings",
    choiceB: "2. Other arrays",
    choiceC: "3. Booleans",
    choiceD: "4. All of the above",
    correct: "D"
    },
    {
    question: "String values must be enclosed within _____",
    choiceA: "1. Strings",
    choiceB: "2. Booleans",
    choiceC: "3. Alerts",
    choiceD: "4. Numbers",
    correct: "C"
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choiceA: "1. Strings",
    choiceB: "2. Booleans",
    choiceC: "3. Alerts",
    choiceD: "4. Numbers",
    correct: "C"
    },
    {
    question: "String values must be enclosed within _____",
    choiceA: "1. Strings",
    choiceB: "2. Booleans",
    choiceC: "3. Alerts",
    choiceD: "4. Numbers",
    correct: "C"
    }
]
console.log(questions[0])

//start quiz

start.addEventListener("click", startQuiz)

function startQuiz(){
    start.style.display = "none"
    //start timer
    showQuestions()
    quiz.style.display = "block"
}



//runs the questions

var lastQuestionIndex = questions.length - 1
var runningQuestionIndex = 0

function showQuestions() {
    var q = questions[runningQuestionIndex]
    question.innerHTML = "<p>" +q.question+ "</p>"
    choiceA.innerHTML = q.choiceA
    choiceB.innerHTML = q.choiceB
    choiceC.innerHTML = q.choiceC
    choiceD.innerHTML = q.choiceD
}
//checks what the user selected 

/* function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct == answer){
        
    }else{
        //reduce time
    }
}
if(runningQuestionIndex < lastQuestionIndex){
    //runningQuestionIndex++
    //showQuestions()
}else{
    //show score
}
*/


