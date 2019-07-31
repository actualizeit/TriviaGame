var questions = [{
    "q": "What is the weather like?",
    "a": [
      "Sunny",
      "Raining",
      "Cloudy",
      "Windy"
    ],
    "ca": 4,
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
    "ca": 2,
    "ct": "The weather is, in fact, Sunny"
  },
  {
    "q": "Whats your favourite music?",
    "a": [
      "pop",
      "hip hop",
      "stuff",
      "classical"
    ],
    "ca": 3,
    "ct": "The weather is, in fact, Sunny"
  },
  {
    "q": "Which season is your favourite?",
    "a": [
      "spring",
      "summer",
      "fall",
      "winter"
    ],
    "ca": 3,
    "ct": "The weather is, in fact, Sunny"
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
    "ct": "The weather is, in fact, Sunny"
  }
];

console.log(questions);
var questionTracker = [];
var questionAmount = 1;
var answerValue;
var time = 5;
var intervalId;
var currentObject;

window.onload = function() {
    $("button").on("click", buttonClicked)
    $("#timeRemaining").css("display","none");
    $("#question").css("display","none");
    $("#ans1").css("display","none");
    $("#ans2").css("display","none");
    $("#ans3").css("display","none");
    $("#ans4").css("display","none");
    };

// $("#start").click(console.log("wutt"));

function reset() {
    time = 5;
}


function buttonClicked() {
    console.log("wut")
    time = 5;
    $("#start").css("display","none");
    $("#timeRemaining").css("display","inline-block");
    $("#question").css("display","inline-block");
    $("#ans1").css("display","inline-block").on("click", checkAns(1));
    $("#ans2").css("display","inline-block").on("click", checkAns(2));
    $("#ans3").css("display","inline-block").on("click", checkAns(3));
    $("#ans4").css("display","inline-block").on("click", checkAns(4));
    countdown();
}

function questionAnswered(){
    resetPage()
    $("#info").html("<h3>" + currentObject.ct + "</h3>");
    setTimeout(buttonClicked(), 3 * 1000);
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

        //  Next Question and Reset Timer
            buttonClicked();
            reset();
        }
  }

function figuredOut(a) {
// Iterate however many times
for (var i = 0; i < questionAmount; i++) {
  // Keep creating random numbers until the number is unique
  do {
    var randomQuestion = Math.floor(Math.random() * questions.length);
  } 
  while (existingQuestions()){
  $("#question").html("<h3>" + questions[randomQuestion].q + "</h3>");
  var qAns = questions[randomQuestion].a;
  currentObject = questions[randomQuestion];

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
console.log("ques: " + questions[randomQuestion].q)
  // Add the question to the tracker
  questionTracker.push(randomQuestion);
}
console.log("questrac: " + questionTracker)
// If the current random number already exists in the tracker, return true
function existingQuestions() {
    for (var i = 0; i < questionTracker.length; i++) {
      if (questionTracker[i] === randomQuestion) {
        return true;
      }
    }
    return false;
  }
  function checkAns(a){
    if (currentObject.ca === a) {
      return true;
    }
    else{
        return false;
    }
  }

}




