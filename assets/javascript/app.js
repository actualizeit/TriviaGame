var questions = [{
    "q": "Which of the following climate change events has actually happened?",
    "a": [
      "Powerful storms with unprecidented storm surges",
      "Droughts and floods in areas typically not prone to them",
      "Thawing permafrost creating a feedback loop due to released methane",
      "All of the above!"
    ],
    "ca": 4,
    "ct": "Yup, we’re pretty much hosed.",
    "gif": "'https://media.giphy.com/media/2vqaiPr1TrevmxCPUV/giphy.gif'"
  },
  {
    "q": "How could an AI go awry and kill us all?",
    "a": [
      "Military applications that go AWOL",
      "Instrumental convergence (good AI optimizing in unexpected ways)",
      "A fundamental loss of our humanity as we drift into artificially induced bliss",
      "All of the above!"
    ],
    "ca": 4,
    "ct": "Beep boop, nothing to see here, certainly not a human in need of extermination!",
    "gif": "'https://media.giphy.com/media/IZY2SE2JmPgFG/giphy.gif'"

  },
  {
    "q": "What are some risk factors for a new pandemic?",
    "a": [
      "The ability to gene edit diseases to make them more virulent/deadly",
      "Ever increasing interconnection of the global human and nonhuman populations",
      "Massive antibiotic use to increase factory farming profitability and because people don’t understand how antibiotics work and they’re cheap",
      "All of the above!"
    ],
    "ca": 4,
    "ct": "Bring out ya dead!",
    "gif": "'https://media.giphy.com/media/WbhyxMSzGTAe4/giphy.gif'"

  },
  {
    "q": "Who has nukes?",
    "a": [
      "A former reality TV star with a year-round, fake-tan glow",
      "A chubby millennial who shot his uncle with an AA gun",
      "A murderous ex KGB agent who likes riding a horses shirtless",
      "All of the above!"
    ],
    "ca": 4,
    "ct": "This is really blowin’ up.",
    "gif": "'https://media.giphy.com/media/3oKIPwoeGErMmaI43S/giphy.gif'"

  },
  {
    "q": "What are our options to deal with any of the issues we face?",
    "a": [
      "Petition our global government to intercede and address systemic existential risks",
      "Work within the market structures to address the issues because people are willing to pay individually for improvements to the commons",
      "Turn to our unifying religious structures to recognize that we are all one and must act as one to solve our problems",
      "Cry"
    ],
    "ca": 4,
    "ct": "Sometimes you just need a good cry. No shame in that. No shame.",
    "gif": "'https://media.giphy.com/media/1BXa2alBjrCXC/giphy.gif'"

  }
];

console.log(questions.length);
var time = 35;
var timeout;
var intervalId;
var currentObject = questions[0];
var questionNumber = -1;
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
        nextQuestion()}, 5000)
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



