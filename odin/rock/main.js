const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const IMG_URL = './rsp.png';
$computer.style.background = `url(${IMG_URL}) 0 0`;
$computer.style.backgroundSize = 'auto 200px';

const rspX = {
  scissors : '0',
  rock : '-220px',
  paper : '-440px',
}; // 공통점있는 변수들을 묶어줌. 객체로

let computerChoice = "scissors"
const changeComputerHand = () => {
  if(computerChoice === "scissors"){
    computerChoice = 'rock';
    
  }else if(computerChoice === 'rock'){
    computerChoice = 'paper';
  
  }else if (computerChoice === 'paper'){
    computerChoice = 'scissors';
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = 'auto 200px';
}
let intervalId = setInterval(changeComputerHand, 50);

const clickButton = () => {
  clearInterval(intervalId);
  //점수 계산 및 화면 표시
  setTimeout(()=>{
    intervalId = setInterval(changeComputerHand, 50);
  }, 1000);
};


$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);
$rock.addEventListener('click', clickButton);





// // function playRound(playerSelection,computerSelection){
// //   if(
// //     playerSelection == 2 && computerSelection == 1 ||
// //     playerSelection == 3 && computerSelection == 2 ||
// //     playerSelection == 1 && computerSelection == 3
// //   ){
// //    console.log("you are win");
// //   }else if(
// //     playerSelection == computerSelection
// //   ){
// //     console.log("you are tied");
// //   }else{
// //     console.log("you are lose");
// //   }
// // }

// // function computerPlay(){
// //   return (Math.floor(Math.random()*10)) % 3 + 1;
// // }

// function playerPlay(){
//   const Prompt = prompt("enter your weapon");
//   const Value = console.log(Prompt);

//   if(Value === "rock"){
//     Value === 1}
//   else if (Value === "paper"){
//     Value ===2}
// //   else{Value ===3};
//   return 
// }


// // const computerSelection = computerPlay();
// const playerSelection = playerPlay();




// const playerSelection = "rock";
// console.log(computerSelection);
// console.log(playRound(playerSelection,computerSelection));