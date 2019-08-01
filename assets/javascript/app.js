var questions = [{
    "q": "What is the weather like?",
    "a": [
      "Sunny",
      "Raining",
      "Cloudy",
      "Windy"
    ],
    "ca": 1,
    "ct": "The weather is, in fact, Sunny"
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
    "ct": "actually its 1"
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
    "ct": "dubstep is bes"
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
    "ct": "the other season"
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
    "ct": "weather is the worst"
  }
];

console.log(questions);
var questionTracker = [];
var questionAmount = 1;
var answerValue;
var time = 5;
var intervalId;
var currentObject = questions[0];
var questionNumber = -1;
var gameStarted = false;
rightAnswers = 0;
wrongAnswers = 0;


window.onload = function() {
    $("button").on("click", nextQuestion)
    $("#timeRemaining").css("display","none");
    $("#question").css("display","none");
    $("#ans1").css("display","none");
    $("#ans2").css("display","none");
    $("#ans3").css("display","none");
    $("#ans4").css("display","none");
    };

function resetPage(){
    $("#timeRemaining").css("display","none");
    $("#question").css("display","none");
    $("#ans1").css("display","none");
    $("#ans2").css("display","none");
    $("#ans3").css("display","none");
    $("#ans4").css("display","none");
    $("#rightWrong").css("display","none");
    $("#info").css("display","none");


}

function reset() {
    time = 5;
}

function checkAns(a){
    console.log("thatwork?")
    if (currentObject.ca === a) {
        rightAnswers++;
        $("#rightWrong").html("<h3>That's absolutely right! You so smaaat!</h3>");
      questionAnswered()
    }
    else{
        wrongAnswers++;
        $("#rightWrong").html("<h3>No! Bad! Wrong!</h3>");
        questionAnswered()
        return false;
    }

  }

function showQuestion(){
    $("#start").css("display","none");
    $("#timeRemaining").css("display","inline-block");
    $("#question").css("display","inline-block");
    $("#ans1").css("display","inline-block").click({a: 1}, checkAns);
    $("#ans2").css("display","inline-block").click({a: 2}, checkAns);
    $("#ans3").css("display","inline-block").click({a: 3}, checkAns);
    $("#ans4").css("display","inline-block").click({a: 4}, checkAns);
}


function nextQuestion() {
    showQuestion();
    countdown();
    updateQuestion();
}

function questionAnswered(){
    resetPage()
    $("#info").html("<h3>" + currentObject.ct + "</h3>");
    // setTimeout(nextQuestion(), 3 * 1000);
}

function countdown() {
    clearInterval(intervalId);
    time = 5;
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
function decrement() {

    //  Decrease number by one.
    time--;

    //  Show the number in the #timeRemaining tag.
    $("#timeRemaining").html("<h4>" + time + " Seconds Remaining</h4>");

    if (time === 0) {

        //  Next Question and Reset Timer
            nextQuestion();
            reset();
        }
  }

function updateQuestion(){
    questionNumber++;
    // console.log("ques#: " + questions[questionNumber].q)
  $("#question").html("<h3>" + questions[questionNumber].q + "</h3>");
  var qAns = questions[questionNumber].a;
  currentObject = questions[questionNumber];

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


  // Add the question to the tracker

console.log("questrac: " + questionTracker)
// If the current random number already exists in the tracker, return true




