import { body } from "express-validator";
import { addToLeaderboard, getScores } from "./modules/leaderboardrequests.js";
import { rigthGuess , wrongGuess} from "./modules/gui.js";

const form = document.querySelector('form');

const body = document.querySelector('body');


getScores();

form.addEventListener('submit', event =>{
    event.preventDefault();
    const textbox = document.querySelector('#textbox');

    const playerGuess = document.querySelector('#playerGuess').value;
    //console.log(playerGuess);

    const randomNumber = Math.floor(Math.random() * 3) + 1;
    //console.log(randomNumber);

    if(playerGuess == randomNumber){
        rigthGuess(textbox);
    }
    else{
        wrongGuess(textbox,randomNumber);
    }
})