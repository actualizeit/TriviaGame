var questions = [{
    "q": "What is the weather like?",
    "a": [
      "Sunny",
      "Raining",
      "Cloudy",
      "Windy"
    ],
    "ca": "sunny"
  },
  {
    "q": "What time of day is it?",
    "a": [
      "2",
      "5",
      "6",
      "10"
    ],
    "ca": "6"
  },
  {
    "q": "Whats your favourite music?",
    "a": [
      "pop",
      "hip hop",
      "stuff",
      "classical"
    ],
    "ca": "stuff"
  },
  {
    "q": "Which season is your favourite?",
    "a": [
      "spring",
      "summer",
      "fall",
      "winter"
    ],
    "ca": "winter"
  },
  {
    "q": "What colour are your eyes?",
    "a": [
      "Sunny",
      "Raining",
      "Cloudy",
      "Windy"
    ],
    "ca": "Windy"
  }
];

console.log(questions);
var questionTracker = [];
var questionAmount = 1;
var time = 30;
var intervalId;

$("#start").click(console.log("wutt"));
function reset() {
    time = 30;
}

function countdown() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    time--;

    //  Show the number in the #show-number tag.
    $("#timeRemaining").html("<h4>" + time + " Seconds Remaining</h4>");


    //  Once number hits zero...
    if (time === 0) {

      //  ...run the stop function.
      stop();

      //  Next Question and Reset Timer
      nextQuestion();
      reset();
    }
  }

window.onload = function() {
$("button").on("click", nextQuestion);
$("#timeRemaining").css("display","none");
$("#question").css("display","none");
$("#ans1").css("display","none");
$("#ans2").css("display","none");
$("#ans3").css("display","none");
$("#ans4").css("display","none");


function nextQuestion() {
    console.log("wut")
    $("#start").css("display","none");
    $("#timeRemaining").css("display","inline-block");
    $("#question").css("display","inline-block");
    $("#ans1").css("display","inline-block");
    $("#ans2").css("display","inline-block");
    $("#ans3").css("display","inline-block");
    $("#ans4").css("display","inline-block");
    countdown();


// Iterate however many times
for (var i = 0; i < questionAmount; i++) {
  // Keep creating random numbers until the number is unique
  do {
    var randomQuestion = Math.floor(Math.random() * questions.length);
  } 
  while (existingQuestions()){
  $("#question").html("<h3>" + questions[randomQuestion].q + "</h3>");
  var qAns = questions[randomQuestion].a;

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
};
};
var wePlayin;
var count = 0;






    // for(i=0; i < questions.length; i++){
    //     var iAnswers = [];
    //     $("#question").text(questions[i])
    //     for(i=0; i < 4; i++){
    //     iAnswers.append(answers[i*])
    // }
