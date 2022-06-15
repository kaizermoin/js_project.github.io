 //console.log("cnnected")

 //Selectors
const p1ScoreElm = document.querySelector('#p1Score');
const p2ScoreElm = document.querySelector('#p2Score');
const playingToElm = document.querySelector('.playingTo');

const p1BtnElm = document.querySelector('#p1Btn');
const p2BtnElm = document.querySelector('#p2Btn');

const resetBtnElm = document.querySelector('#resetBtn');
const inputScoreElm = document.querySelector('#inputScore');

const formElm = document.querySelector('form');

//Data layer
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;
let turnPlayer ='p1';

//update winning score /playingToScore into DOM
playingToElm.textContent = winningScore;

//disable playerBtn based on turn
turnPlayer==='p1' ? 
p2BtnElm.setAttribute('disabled','disabled'):
p1BtnElm.setAttribute('disabled','disabled');

//single responsibility principle
function validationInput(score){
    if(score<1){alert('Please Input Positive Number')}
}
//Inputting and updating playing too score
formElm.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    //getting the input
    const inputScore = inputScoreElm.value
    //validation check
    validationInput(inputScore);
    //showing the value
    winningScore=+inputScore;
    playingToElm.textContent=inputScore;

    //reset the input
    inputScoreElm.value=''
})

p1BtnElm.addEventListener('click',(evt)=>{

    //increase the count and update DOM
    //increase conditionally
    if(turnPlayer==='p1' && !gameOver && p1Score <winningScore){
        p1Score++
        //update DOM
        p1ScoreElm.textContent=p1Score;
        //change player turn
        turnPlayer='p2'
        //disable p1 button
        p1BtnElm.setAttribute('disabled','disabled')
        //enable p2 button
        p2BtnElm.removeAttribute('disabled')
    }
    if(p1Score===winningScore){
        gameOver=true;
        //disable player 1 or player 2 btn
        //show msg
        p1BtnElm.setAttribute('disabled','disabled')
        p2BtnElm.setAttribute('disabled','disabled')
        alert('Player-1 Winner!!!')
    }
    
    //update DOM
    
})

p2BtnElm.addEventListener('click',(evt)=>{

    //increase the count and update DOM
    //increase conditionally
    if(turnPlayer==='p2' && !gameOver && p2Score <winningScore){
        p2Score++
        p2ScoreElm.textContent=p2Score;
        turnPlayer='p1'
        p2BtnElm.setAttribute('disabled','disabled')
        //enable p1 button
        p1BtnElm.removeAttribute('disabled')

    }
    if(p2Score===winningScore){
        gameOver=true;
        //disable player 1 or player 2 btn
        //show msg
        p1BtnElm.setAttribute('disabled','disabled')
        p2BtnElm.setAttribute('disabled','disabled')
        alert('Player-2 Winner!!!')
    }
    //update DOM
    
})


resetBtnElm.addEventListener('click',(evt)=>{
 p1Score = 0;
 p2Score = 0;
 winningScore = 5;
 gameOver = false;
 turnPlayer ='p2';
 p1BtnElm.removeAttribute('disabled');
 p2BtnElm.removeAttribute('disabled');
 p1ScoreElm.textContent = p1Score;
 p2ScoreElm.textContent = p2Score;
 playingToElm.textContent=winningScore;

})