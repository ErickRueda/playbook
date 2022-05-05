const ExplorerService = require("./controllers/ExplorerController");
const express = require("express");
const ExplorerController = require("./controllers/ExplorerController");
const { request } = require("express");
const { response } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const amount = request.params.mission;
    const amountByMission = ExplorerController.getAmountOfExplorersByMission(amount);
    response.json({mission:request.params.mission, quantity: amountByMission});
})

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const usernames = request.params.mission;
    const usernamesByMision = ExplorerController.getExplorersUsernamesByMission(usernames);
    response.json({mission:request.params.mission, explorers: usernamesByMision});
})