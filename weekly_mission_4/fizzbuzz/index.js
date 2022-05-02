const Reader = require("./../fizzbuzz/lib/utils/Reader")
const ExplorerService = require("./../fizzbuzz/lib/services/ExplorerService")
const FizzbuzzService = require("./lib/services/FizzbuzzService")

const explorers = Reader.readJsonFile("explorers.json")
//console.log(explorers)


// Aplicación del ExplorerService sobre la lista de explorers, busca en la lista de explorers los que tengan la misión node, y devuelve una lista con los exploradores que tengan la misión node.
console.log(ExplorerService.filterByMission(explorers, "node"))

// Aplicación del ExplorerService sobre la lista de explorers, busca en la lista de explorers los que tengan la misión node, y devuelve la cantidad de exploradores que tengan la misión node.
console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"))

// Aplicación del ExplorerService sobre la lista de explorers, busca en la lista de explorers los que tengan la misión node, y devuelve una lista con los nombres de los exploradores que tengan la misión node.
console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"))

// Aplicación del FizzbuzzService sobre la lista de explorers, asigna una propiedad trick a cada explorer, si el score es divisible por 3, el trick es FIZZ, si es divisible por 5, el trick es BUZZ, si es divisible por 3 y por 5, el trick es FIZZBUZZ, si no es divisible por ninguno, el trick es el score.
const fizzbuzzTrick = explorers.map((explorer) => FizzbuzzService.applyValidationInExplorer(explorer))

