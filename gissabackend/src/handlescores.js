import fs from "fs/promises";

async function getLeaderboards(){
    const scoreData =  await fs.readFile('./gissabackend/src/leaderboards.json');
    return JSON.parse(scoreData);
}


export {getLeaderboards};