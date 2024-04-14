'use strict';
let randomNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) => document.querySelector('.message').textContent = message;

document.querySelector('.check').addEventListener('click',
    function(){
        const guess = Number(document.querySelector('.guess').value)

        if(!guess){
            document.querySelector('.message').textContent = 'No number!'
            // console.log(document.querySelector('.message').textContent = 'No number!')
            displayMessage('No Number!')
            
        }else if(guess === randomNumber){
            // document.querySelector('.message').textContent = 'Yeah! you gussed it right!'
            displayMessage('Yeah! you gussed it right!')
            document.querySelector('.number').textContent = randomNumber;
            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.number').style.width = '30rem'
            if(score > highScore){
                highScore = score
                document.querySelector('.highscore').textContent = highScore;
            }
        }else if(guess !== randomNumber){
            if(score > 1){
                // document.querySelector('.message').textContent = guess > randomNumber ? 'Too high!' : 'Too low!';
                displayMessage(guess > randomNumber ? 'Too high!' : 'Too low!');
                score--;
                document.querySelector('.score').textContent = score;
            }else{
                // document.querySelector('.message').textContent = 'You Loose :('
                displayMessage('You Loose :(')
                document.querySelector('.score').textContent = 0;
            }
        }
        // else if(guess > randomNumber){
        //     if(score > 1){
        //     document.querySelector('.message').textContent = 'Too high! :('
        //     score--;
        //     document.querySelector('.score').textContent = score;
        //     }else{
        //         document.querySelector('.message').textContent = 'You Loose :('
        //     document.querySelector('.score').textContent = 0;
        //     }
        // }else if(guess < randomNumber){
        //     if(score > 1){
        //     document.querySelector('.message').textContent = 'Too low! :('
        //     score--;
        //     document.querySelector('.score').textContent = score;
        //     }else{
        //         document.querySelector('.message').textContent = 'You Loose :('
        //     document.querySelector('.score').textContent = 0;
        //     }
        // }
    }
);

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    randomNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.guess').value ='';
    document.querySelector('.number').textContent = '?';
    // document.querySelector('.message').textContent = 'Start guessing...'
    displayMessage('Start guessing...')
})