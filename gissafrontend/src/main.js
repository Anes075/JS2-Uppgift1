import { body } from "express-validator";
import { addToLeaderboard, getScores } from "./modules/leaderboardrequests.js";

const form = document.querySelector('form');

const body = document.querySelector('body');

let pointCounter = 0;

getScores();

form.addEventListener('submit', event =>{
    event.preventDefault();
    const textbox = document.querySelector('#textbox');

    const playerGuess = document.querySelector('#playerGuess').value;
    //console.log(playerGuess);

    const randomNumber = Math.floor(Math.random() * 3) + 1;
    //console.log(randomNumber);

    if(playerGuess == randomNumber){
       // console.log('Rätt!');
        pointCounter++;
       // console.log('Du har '+ pointCounter + ' poäng!');
        textbox.innerHTML = "Rätt! Du har " + pointCounter + ' poäng';
    }
    else{
       // console.log('Fel! Den rätta nummret är ' + randomNumber);
        pointCounter = 0;
        textbox.innerHTML = "Fel! Det rätta nummret är " + randomNumber;
        const restartButton = document.createElement('input');
        restartButton.setAttribute("type", "submit");
    }
})