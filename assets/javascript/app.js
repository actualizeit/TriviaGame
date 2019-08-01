var questions = [{
    "q": "What is the weather like?",
    "a": [
      "Sunny",
      "Raining",
      "Cloudy",
      "Windy"
    ],
    "ca": 1,
    "ct": "The weather is, in fact, Sunny",
    "gif": "'https://media.giphy.com/media/f8sUe17QkXY9o8uoFk/giphy.gif'"
  },
  {
    "q": "What time of day is it?",
    "a": [
      "2",
      "5",
      "6",
      "10"
    ],
    "ca": 1,
    "ct": "actually its 1",
    "gif": "'https://media.giphy.com/media/f8sUe17QkXY9o8uoFk/giphy.gif'"

  },
  {
    "q": "Whats your favourite music?",
    "a": [
      "pop",
      "hip hop",
      "stuff",
      "classical"
    ],
    "ca": 1,
    "ct": "dubstep is bes",
    "gif": "'https://media.giphy.com/media/f8sUe17QkXY9o8uoFk/giphy.gif'"

  },
  {
    "q": "Which season is your favourite?",
    "a": [
      "spring",
      "summer",
      "fall",
      "winter"
    ],
    "ca": 1,
    "ct": "the other season",
    "gif": "'https://media.giphy.com/media/f8sUe17QkXY9o8uoFk/giphy.gif'"

  },
  {
    "q": "What colour are your eyes?",
    "a": [
      "Sunny",
      "Raining",
      "Cloudy",
      "Windy"
    ],
    "ca": 1,
    "ct": "weather is the worst",
    "gif": "'https://media.giphy.com/media/f8sUe17QkXY9o8uoFk/giphy.gif'"

  }
];

console.log(questions.length);
// var answerValue;
var time = 35;
var timeout;
var intervalId;
var currentObject = questions[0];
var questionNumber = -1;
// var answeredValue = 0;
// var gameStarted = false;
var rightAnswers = 0;
var wrongAnswers = 0;


window.onload = function() {
    $("#start").on("click", nextQuestion);
    $("#timeRemaining").css("display","none");
    $("#question").css("display","none");
    $("#ansButtons").css("display","none");
    $("#ans1").on("click", ansClicked);
    $("#ans2").on("click", ansClicked);
    $("#ans3").on("click", ansClicked);
    $("#ans4").on("click", ansClicked);
    };

function resetPage(){
    $("#timeRemaining").css("display","none");
    $("#question").css("display","none");
    $("#ansButtons").css("display","none");
}

function checkAns(a){
    console.log("question#: " + questionNumber)
    timeout = setTimeout(function(){
        nextQuestion()}, 1000)
    if (currentObject.ca == a) {
        rightAnswers++;
        console.log("right: " + rightAnswers + "wrong: " + wrongAnswers)
        $("#rightWrong").html("<h3>That's absolutely right! You so smaaat!</h3>");
        questionAnswered()
    }else{
        console.log("wrong: " + wrongAnswers + "right: " + rightAnswers)
        wrongAnswers++;
        $("#rightWrong").html("<h3>No! Bad! Wrong!</h3>");
        questionAnswered()
    }
}

function ansClicked(){
    console.log(this);
    if(this.id == "ans1"){
        checkAns(1);
    }
    if(this.id == "ans2"){
        checkAns(2);
    }
    if(this.id == "ans3"){
        checkAns(3);
    }
    if(this.id == "ans4"){
        checkAns(4);
    }
}

function showQuestion(){
    $("#start").css("display","none");
    $("#answerArea").css("display","none");
    // $("#info").css("display","none");
    $("#timeRemaining").css("display","inline-block");
    $("#question").css("display","inline-block");
    $("#ansButtons").css("display","inline-block")
}


function nextQuestion() {
    $("#timeRemaining").html("<h4>30 Seconds Remaining</h4>");
    clearTimeout(timeout);
    time=30;
    showQuestion();
    countdown();
    updateQuestion();
}

function questionAnswered(){
    resetPage()
    // $("#rightWrong").css("display","inline-block");
    $("#answerArea").css("display","inline-block");
    $("#gif").html("<img src=" + currentObject.gif + ">");
    $("#info").html("<h3>" + currentObject.ct + "</h3>");
}

function countdown() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
function decrement() {

    //  Decrease number by one.
    time--;

    //  Show the number in the #timeRemaining tag.
    $("#timeRemaining").html("<h4>" + time + " Seconds Remaining</h4>");

    if (time === 0) {
            checkAns(0);
        }
  }

function updateQuestion(){
    if(questionNumber === questions.length - 1){
        resetPage()
        clearInterval(intervalId);
        $("#timeRemaining").css("display","inline-block").html("<h3>It's over. It's all over.</h3>");
        $("#question").css("display","inline-block").html("<h4>Correct Answers: " + rightAnswers + "</h4>");
        $("#wrongAns").css("display","inline-block").html("<h4>Incorrect Answers: " + wrongAnswers + "</h4>");
        $("#start").css("display","inline-block").text("Play again?").on("click", restartGame);
        return;
    }
    questionNumber++;
    currentObject = questions[questionNumber];
    // console.log("ques#: " + questions[questionNumber].q)
  $("#question").html("<h3>" + questions[questionNumber].q + "</h3>");
  var qAns = questions[questionNumber].a;
  
  for (var j = 0; j < qAns.length; j++) {
    var answer = qAns[j];
    if (j == 0) {
        $("#ans1").text(answer);
    } 
    if (j == 1) {
        $("#ans2").text(answer);
    }
    if (j == 2) {
        $("#ans3").text(answer);
    }
    if (j == 3) {
        $("#ans4").text(answer);
    }
  }
}

function restartGame(){
    $("#wrongAns").css("display","none");
    questionNumber = -1;
    currentObject = questions[0];
    rightAnswers = 0;
    wrongAnswers = 0;
    nextQuestion();
}



