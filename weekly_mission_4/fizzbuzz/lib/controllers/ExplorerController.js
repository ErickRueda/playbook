const ExplorerService = require('../services/ExplorerService');

ExplorerService = require('../services/ExplorerService');
FizzbuzzService = require('../services/FizzbuzzService');
Reader = require('../lib/Reader');

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
    
};



module.exports = ExplorerController;

