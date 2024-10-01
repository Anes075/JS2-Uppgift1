const baseURL = 'http://localhost:3000/scores';

async function getScores(){
    const res = await fetch(baseURL);
    const leaderboard = await res.json();
     console.log(leaderboard);
    return leaderboard;
}

async function addToLeaderboard(playerResults) {
    const options = {
        method: 'POST',
        body: JSON.stringify(playerResults),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const res = await fetch(baseURL, options);
    const data = await res.json();
    console.log(data);
}

export {getScores, addToLeaderboard};