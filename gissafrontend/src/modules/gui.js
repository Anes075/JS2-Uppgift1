let pointCounter = 0;

function displayLeaderboard(){
    const container = document.querySelector('#leaderboard');
        container.innerHTML = '';

    const playerName = document.createElement('p');
    const playerScore = document.createElement('p');

 //   const restartButton = document.createElement('input');
 //  restartButton.setAttribute("type", "submit");
 }

 function rigthGuess(textbox){
     // console.log('Rätt!');
    pointCounter++;
    // console.log('Du har '+ pointCounter + ' poäng!');
    textbox.innerHTML = "Rätt! Du har " + pointCounter + ' poäng';
 }

 function wrongGuess(textbox,randomNumber){
   // console.log('Fel! Den rätta nummret är ' + randomNumber);
    pointCounter = 0;
    textbox.innerHTML = "Fel! Det rätta nummret är " + randomNumber;

 }

 export { rigthGuess, wrongGuess };