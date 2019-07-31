var questions = [{
    "q": "What is the weather like?",
    "a": [
      "Sunny",
      "Raining",
      "Cloudy",
      "Windy"
    ]
  },
  {
    "q": "What time of day is it?",
    "a": [
      "2",
      "5",
      "6",
      "10"
    ]
  },
  {
    "q": "Whats your favourite music?",
    "a": [
      "pop",
      "hip hop",
      "stuff",
      "classical"
    ]
  },
  {
    "q": "Which season is your favourite?",
    "a": [
      "spring",
      "summer",
      "fall",
      "winter"
    ]
  },
  {
    "q": "What colour are your eyes?",
    "a": [
      "Sunny",
      "Raining",
      "Cloudy",
      "Windy"
    ]
  }
];
console.log(questions);
var questionTracker = [];
var questionAmount = 1;

// $("#start").click(console.log("wutt"));

window.onload = function() {
$("#start").on("click", startGame);

function startGame() {
    console.log("wut")
// Iterate however many times
for (var i = 0; i < questionAmount; i++) {
  // Keep creating random numbers until the number is unique
  do {
    var randomQuestion = Math.floor(Math.random() * questions.length);
  } while (existingQuestions()){

  $("#question").text(questions[randomQuestion].q);
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
