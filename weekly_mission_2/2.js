const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

console.log("apartado 1")
explorers.forEach(explorer => console.log(explorer.name))
console.log("apartado 2")
explorers.forEach(explorer => console.log(explorer.stack))

console.log("apartado 3")
const explorer_stacks = explorers.map(explorer_list => explorer_list.stack)
console.log(explorer_stacks)

console.log("apartado 4")
const explorer_with_js = explorers.filter(explorer_list => explorer_list.stack.includes("js"))
console.log(explorer_with_js)

console.log("apartado 5")
const first_explorer_in_cdmx = explorers.find(explorer_list => explorer_list.city === "CDMX")
console.log(first_explorer_in_cdmx)

console.log("apartado 6")
const all_exercises = explorers.reduce((acc, explorer_list) => acc + explorer_list.exercises_completed, 0)
console.log(all_exercises)

console.log("apartado 7")
const explorers_finished_frontend = explorers.some(explorer_list => explorer_list.missions.frontend.isFinished)
console.log(explorers_finished_frontend)

console.log("apartado 8")
const all_explorers_finished_frontend = explorers.every(explorer_list => explorer_list.missions.frontend.isFinished)
console.log(all_explorers_finished_frontend)

