
let yourScore = document.querySelector('.your-btn');
let comScore = document.querySelector('.com-btn');
let count = 0;
let countCom = 0


const handOptions = {
  "rock": "images/rock.svg",
  "paper": "images/paper.svg",
  "scissors": "images/scissors.svg"
}

const userHand = (hand) => {
  let hands = document.querySelector('.hands');
  hands.style.display = "none";

  let contest = document.querySelector('.contest');
  contest.style.display = "flex";

  document.getElementById('papers').src = handOptions[hand];

  let comHand = pickComputerHand();
  referee(hand, comHand)
}

const pickComputerHand = () => {
  let hands = ["rock","paper","scissors"]
  let comHand = hands[Math.floor(Math.random() * 3)]
  document.getElementById('comId').src = handOptions[comHand];
  return comHand;
  
}


const referee = (userHand, comHand) => {
  if (userHand == "paper" && comHand == "scissors") {
    setDesion("YOU LOSE!")
    countCom++;
  } 
  if (userHand == "paper" && comHand == "rock"){
     setDesion("YOU WIN!");
     count++
  }
  if (userHand == "paper" && comHand == "paper") {
    setDesion("It's a DRAW!")
  } 
  if (userHand == "rock" && comHand == "paper"){
     setDesion("YOU LOSE!");
     countCom++
  }
  if (userHand == "rock" && comHand == "scissors") {
    setDesion("YOU WIN!")
    count++
  } 
  if (userHand == "rock" && comHand == "rock"){
    setDesion("It's a DRAW!")
  }
  if (userHand == "scissors" && comHand == "paper") {
    setDesion("YOU WIN!")
    count++
  } 
  if (userHand == "scissors" && comHand == "rock"){
     setDesion("YOU LOSE!");
     countCom++
  }
  if (userHand == "scissors" && comHand == "scissors"){
    setDesion("It's a DRAW!")
 }
 yourScore.innerHTML= count;
 comScore.innerHTML = countCom;

 if(count == 5){
  confirm('Your score is 5, you win!');
  count = 0;
  countCom = 0;
  yourScore.innerHTML= count;
  comScore.innerHTML = countCom;
}
else if(countCom == 5){
  confirm("Player's score is 5, you lose!");
  count = 0;
  countCom = 0;
  yourScore.innerHTML= count;
  comScore.innerHTML = countCom;
}
}

const setDesion = (decision) => {
  document.querySelector('.decision h1').innerHTML = decision;
}

const restarGame = () => {
  let hands = document.querySelector('.hands');
  hands.style.display = "block";

  let contest = document.querySelector('.contest');
  contest.style.display = "none";
}

