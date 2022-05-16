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

const scoreTable = {
  rock : 0,
  scissors: 1,
  paper: -1,
};

let clickable = true;
let me = 0;
let computer = 0;

const clickButton = () => {
  if(clickable){
    clearInterval(intervalId);
    clickable = false;
    
    const myChoice = event.target.textContent === '바위'
      ? 'rock'
      : event.target.textContent === '가위'
        ? 'scissors'
        : 'paper';
    const myScore = scoreTable[myChoice];
    const computerScore = scoreTable[computerChoice];
    const diff = myScore - computerScore;
    console.log(myScore,computerScore,diff);
    
    let message;
    if ([2,-1].includes(diff)){
      me += 1;
      message = 'win';
    } else if([-2,1].includes(diff)){
      computer += 1;
      message = 'lose';
    } else {
      message = 'tied';
    }
    if(me === 2){
      $score.textContent = `나의 승리 ${me}:${computer}`;
    } else if (computer === 2){
      $score.textContent = `컴퓨터 승리 ${me}:${computer}`;
    } else {
      $score.textContent = `${message} ${me}:${computer}`;
      setTimeout(()=>{
        clickable = true;
        intervalId = setInterval(changeComputerHand, 50);
      }, 1000);
    }
  }
};


$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);
$rock.addEventListener('click', clickButton);


