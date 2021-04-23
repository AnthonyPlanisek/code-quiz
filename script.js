var start = document.getElementById("start")
var quiz = document.getElementById("quiz")
var question = document.getElementById("question")
var timer = document.getElementById("timer")
var choiceA = document.getElementById("A")
var choiceB = document.getElementById("B")
var choiceC = document.getElementById("C")
var choiceD = document.getElementById("D")
var highscores = document.getElementById("highscores")
var score = document.getElementById("score")
//var initials = document.getElementById("initials")
var showHS = document.getElementById("showHS")
var topScore = document.getElementById("topScore")
var nameI = document.getElementById("nameI")
var submit = document.getElementById("submit")
var HSpage = document.getElementById("HSpage")
var text = document.getElementById("text")

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
    choiceA: "1. Commas",
    choiceB: "2. Curly brackets",
    choiceC: "3. Quotes",
    choiceD: "4. Parenthesis",
    correct: "C"
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choiceA: "1. Javascript",
    choiceB: "2. Terminal/bash",
    choiceC: "3. For loops",
    choiceD: "4. Console.log",
    correct: "D"
    }
]


//start quiz

start.addEventListener("click", startQuiz)
showHS.addEventListener("click", displayHS)

function displayHS(){
    //start.style.display = "none"
    //text.style.display = "none"
    HSpage.style.display = "block"
    //document.getElementById("topScore").innerHTML = localStorage.getItem("playerScore")




    console.log("World")
    var storage = localStorage.getItem("playerScore")
    for (var i = 0; i < storage.length; i++) {
       
        console.log("storage", typeof storage )
        document.getElementById("topScore").innerHTML = storage[i]
        console.log("hello")
    }
    


    document.getElementById("nameI").innerHTML = JSON.parse(localStorage.getItem("playerInitials"))
}





function startQuiz(){
    showHS.style.display = "none"
    topScore.style.display = "none"
    nameI.style.display = "none"
    starting.style.display = "none"
    //start timer
    showQuestions()
    quiz.style.display = "block"
    countdown()


}

//timer

var counter = 75
var interval 
function countdown() {
    
    interval = setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById('timer');
        span.innerHTML = "Time:" +" "+ counter;
     }
     if (counter === 0) {
        alert('sorry, out of time');
        clearInterval(counter);
      }
      
    }, 1000);
  };
  
  

//runs the questions

var lastQuestionIndex = questions.length - 1
var runningQuestionIndex = 0
//var scoreArray = ""
var initialsArray = []
//var playerS = []
function showQuestions() {
    if(runningQuestionIndex > lastQuestionIndex){
        quiz.style.display = "none"
        timer.style.display = "none"
        highscores.style.display = "block"
        clearInterval(interval)
        score.innerHTML = "Your final score" + " " + counter
        //var playerSC = []
        


        submit.addEventListener("click", save)
        function save(){
        




        //saves user score as time to an array
        
        var playerS =  JSON.parse(localStorage.getItem("playerScores")) || []
        console.log("player", playerS)
        
        console.log("time", counter)
        //if (playerS == null) {
            //localStorage.setItem("playerScores", JSON.stringify(counter))
        //}else {
            playerS.push(counter)
            console.log("player", playerS)
            localStorage.setItem("playerScores", JSON.stringify(playerS))
       // }
        
        





        //saves user inputed initials in an array
        var initials = document.getElementById("initials").value
        initialsArray.push(initials)
        localStorage.setItem("playerInitials", JSON.stringify(initialsArray))
        location.reload()

        }
    }else{
    var q = questions[runningQuestionIndex]
    question.innerHTML = "<p>" +q.question+ "</p>"
    choiceA.innerHTML = q.choiceA
    choiceB.innerHTML = q.choiceB
    choiceC.innerHTML = q.choiceC
    choiceD.innerHTML = q.choiceD
    }
}

//checks what the user selected 

function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct == answer){
        runningQuestionIndex++
        showQuestions()
    }else{
     counter = counter - 10
     runningQuestionIndex++
     showQuestions()
    }

}

