// Import Employee class.
const Employee = require("./employee")

// Engineer class with constructor, getGitHub, and getRole functions.
class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email)
        this.github = github
    }

    getGitHub(){
        return this.github
    }
    
    getRole(){
        return "Engineer"
    }

}

module.exports = Engineer