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

console.log(questions.length);
var answerValue;
var time = 10;
var intervalId;
var currentObject = questions[0];
var questionNumber = -1;
var answeredValue = 0;
var gameStarted = false;
rightAnswers = 0;
wrongAnswers = 0;


window.onload = function() {
    $("#start").on("click", nextQuestion);
    $("#timeRemaining").css("display","none");
    $("#question").css("display","none");
    $("#ansButtons").css("display","none");
    };

function resetPage(){
    $("#timeRemaining").css("display","none");
    $("#question").css("display","none");
    $("#ansButtons").css("display","none");

}

function checkAns(a){
    console.log("thatwork?")
    console.log("asval" + a)
    if (currentObject.ca == a) {
        rightAnswers++;
        $("#rightWrong").html("<h3>That's absolutely right! You so smaaat!</h3>");
        questionAnswered()
    }else{
        console.log("elsework?")
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
    $("#rightWrong").css("display","none");
    $("#info").css("display","none");
    $("#timeRemaining").css("display","inline-block");
    $("#question").css("display","inline-block");
    $("#ansButtons").css("display","inline-block")
    $("#ans1").on("click", ansClicked);
    $("#ans2").on("click", ansClicked);
    $("#ans3").on("click", ansClicked);
    $("#ans4").on("click", ansClicked);
}


function nextQuestion() {
    showQuestion();
    countdown();
    updateQuestion();
}

function questionAnswered(){
    resetPage()
    $("#rightWrong").css("display","inline-block");
    $("#info").css("display","inline-block");
    $("#info").html("<h3>" + currentObject.ct + "</h3>");
    // setTimeout(nextQuestion(), 3 * 1000);
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
            checkAns(5);
        }
  }

function updateQuestion(){
    if(questionNumber === questions.length - 1){
        resetPage()
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




