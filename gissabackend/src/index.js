import express from "express";
import {getLeaderboards} from "./handlescores.js";
import cors from "cors";

const PORT = 3000;
const app = express();

app.use( express.json() );
app.use( cors() );

app.get('/scores', async (req, res)=>{
    const leaderboards = await getLeaderboards();
    res.json(leaderboards);
})

app.listen(PORT, ()=>{
    console.log('Listening on port', PORT)
});