// Import necessary packages.
const fs = require("fs")
const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const generateHTML = require("./utils/generateHTML")

// Create array to contain employees.
const employeeArray = []

inquirer.prompt([
    {
        name:"manager_name",
        type:"input",
        message:"Please enter the manager's name: "
    },
    {
        name:"manager_id",
        type:"input",
        message:"Please enter the manager's ID: "
    },
    {
        name:"manager_email",
        type:"input",
        message:"Please enter the manager's email address: "
    },
    {
        name:"manager_officeNumber",
        type:"input",
        message:"Please enter the manager's office number: "
    }
]).then(response =>{
    const managerResponses = new Manager(response.manager_name, response.manager_id, response.manager_email, response.manager_officeNumber)
    employeeArray.push(managerResponses)
    addEmployee()
})

function addEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "What would you like to do?",
            choices:[
                "Add Engineer",
                "Add Intern",
                "Generate HTML"
            ]
        }
    ]).then(response => {
        switch(response.options){
            case "Add Engineer":
                    addEngineer();
                    break;
            case "Add Intern":
                    addIntern();
                    break;
            case "Generate HTML":
                    generateHTML(employeeArray);
                    break;
        }
    })
}


function addEngineer() {
    inquirer.prompt([
        {
            type:"input",
            name:"engineer_name",
            message:"Enter Engineer name?"
        },
        {
            type:"input",
            name:"engineer_id",
            message:"Enter Engineer's ID?"
        },
        {
            type:"input",
            name:"engineer_email",
            message:"Enter Engineer's email address?"
        },
        {
            type:"input",
            name:"engineer_gitHub",
            message:"Enter Engineer's Git Hub?"
        }
    ]).then(response =>{
        const engineerResponses = new Engineer(response.engineer_name, response.engineer_id, response.engineer_email, response.engineer_gitHub)
        employeeArray.push(engineerResponses)
        addEmployee()
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type:"input",
            name:"intern_name",
            message:"Enter Intern name?"
        },
        {
            type:"input",
            name:"intern_id",
            message:"Enter Intern's ID?"
        },
        {
            type:"input",
            name:"intern_email",
            message:"Enter Intern's email address?"
        },
        {
            type:"input",
            name:"intern_schoolName",
            message:"Enter intern's school name?"
        }
    ]).then(response =>{
        const internResponses = new Intern(response.intern_name, response.intern_id, response.intern_email, response.intern_schoolName)
        employeeArray.push(internResponses)
        addEmployee()
    })
}

