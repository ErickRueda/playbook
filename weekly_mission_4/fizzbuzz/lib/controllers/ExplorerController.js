const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/Reader");

class ExplorerController {

    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile('explorers.json');
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile('explorers.json');
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getAmountOfExplorersByMission(mission){
        const explorers = Reader.readJsonFile('explorers.json');
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
    
    static FizzbuzzServiceInNumber(score){
        return FizzbuzzService.applyValidationInNumber(score);
    }

    static getExplorersbyStack(stack){
        const explorers =Reader.readJsonFile("explorers.json")
        return ExplorerService.getExplorersByStack(explorers,stack)
    }


};



module.exports = ExplorerController;

