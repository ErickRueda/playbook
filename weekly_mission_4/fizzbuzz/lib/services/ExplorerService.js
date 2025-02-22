class ExplorerService {

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const amountOfExplorersByMision = explorers.filter((explorer) => explorer.mission === mission).length;
        return amountOfExplorersByMision;

    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersUsernamesByMission = explorers.filter((explorer) => explorer.mission === mission).map((explorer) => explorer.githubUsername);
        return explorersUsernamesByMission;
    }

    static getExplorersByStack(explorers,stack){
        return explorers.filter(explorer => explorer.stacks.includes(stack));
    }

}

module.exports = ExplorerService;