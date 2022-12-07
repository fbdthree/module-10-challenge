const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,emai)
        this.github = github
    }
    getRole(){
        return "Engineer"
    }
    getGitHub(){
        return this.github
    }
}

module.exports = Engineer