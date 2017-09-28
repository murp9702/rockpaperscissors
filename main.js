//on page load have computer select rock, paper, or scissor and keep selection hidden


let computerAnswer;
let score = 0;

const answerGenerator = function() {
  let randomNumber = Math.floor(Math.random()*12);
  if (randomNumber <= 3) {
  computerAnswer = "rock";
  }
  else if(randomNumber >= 4 && randomNumber <= 7) {
  computerAnswer = "paper";
  }
  else {
  computerAnswer = "scissors";
  }

};
//user selects rock, paper, or scissor icon
  //if user selects rock
document.getElementById("rock").onclick = function() {
  answerGenerator();
  //compare user selection to computer selection to determine winner
  if(computerAnswer === "rock") {
    document.getElementById("winLose").innerHTML = "Tie!";
    document.getElementById("scoreCounter").innerHTML = score;
  }
  else if(computerAnswer === "paper") {
    document.getElementById("winLose").innerHTML = "You Lose!";
    document.getElementById("scoreCounter").innerHTML = score;
  }
  else if(computerAnswer === "scissors") {
    score += 1;
    document.getElementById("winLose").innerHTML = "You Win!";
    document.getElementById("scoreCounter").innerHTML = score;
  }
};

//user selects rock, paper, or scissor icon
  //if user selects paper
document.getElementById("paper").onclick = function() {
  answerGenerator();
  //compare user selection to computer selection to determine winner
  if(computerAnswer === "rock") {
    score += 1;
    document.getElementById("winLose").innerHTML = "You Win!";
    document.getElementById("scoreCounter").innerHTML = score;
  }
  else if(computerAnswer === "paper") {
    document.getElementById("winLose").innerHTML = "Tie!";
    document.getElementById("scoreCounter").innerHTML = score;
  }
  else if(computerAnswer === "scissors") {
    document.getElementById("winLose").innerHTML = "You Lose!";
    document.getElementById("scoreCounter").innerHTML = score;
  }
};

//user selects rock, paper, or scissor icon
document.getElementById("scissors").onclick = function() {
  answerGenerator();
  //if user selects scissors
    //compare user selection to computer selection to determine winner
  if(computerAnswer === "rock") {
    document.getElementById("winLose").innerHTML = "You Lose!";
    document.getElementById("scoreCounter").innerHTML = score;
  }
  else if(computerAnswer === "paper") {
    score += 1;
    document.getElementById("winLose").innerHTML = "You Win!";
    document.getElementById("scoreCounter").innerHTML = score;
  }
  else if(computerAnswer === "scissors") {
    document.getElementById("winLose").innerHTML = "Tie!";
    document.getElementById("scoreCounter").innerHTML = score;
  }
};
