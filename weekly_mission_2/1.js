//1
const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())
   
//2
const Issue = {
    title: "Playbook",
    repositoryNameAssociated: "Backend NodeJS LaunchX",
    status: "Commit 5 days ago",
    numberOfComments: 35,
    labels: [
        "nodejs", 
        "javascript", 
        "backend"
    ],
    autor: "Erick Rueda",
    dataCreated: "16 - Abr - 22",
    lastUpdate: "17 - Abr - 22",
    getTitleAndAutor: function(){
        return `Titulo: ${this.title} | Autor: ${this.autor}`
    },
    getGeneralInfo: function(){
        return `Labels: ${this.labels} Coments: ${this.numberOfComments} Created: ${this.dataCreated}`
    }

}

console.log(Issue.getTitleAndAutor())
console.log(Issue.getGeneralInfo())

const pullRequest = {
    title: "Add changes",
    branchName: "Master",
    dataCreated: "16-abr-22",
    status: "Aproved",
    repositoryNameAssociated: "Playbook",
    getStatus: function(){
        return `Status: ${this.status}`
    },
    getTitleAndBranch: function(){
        return `Titulo: ${this.title} | Branch: ${this.branchName}`
    },

}

console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndBranch())