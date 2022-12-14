const fs = require("fs")

function generateHTML(employeeArray) {
    let htmlCode = ""
    employeeArray.forEach(employee => {
        if (employee.getRole() === "Manager"){
            htmlCode += `
            <div class="card" style="width: 18rem;">
              <div class="card-body">
              <h5 class="card-title">${employee.name}</h5>
              <p class="card-text">Id: ${employee.id}</p>
              <a href="mailto:${employee.email}" class="btn btn-primary">${employee.email}</a>
              <p class="card-text">Id: ${employee.officeNumber}</p>
              <h4 class="card-title">Id: ${employee.getRole()}</h5>
            </div>
          </div>`

        }else if(employee.getRole() === "Engineer"){
            htmlCode += `
            <div class="card" style="width: 18rem;">
              <div class="card-body">
              <h5 class="card-title">${employee.name}</h5>
              <p class="card-text">Id: ${employee.id}</p>
              <a href="mailto:${employee.email}" class="btn btn-primary">${employee.email}</a>
              <p class="card-text">Github: ${employee.gitHub}</p>
              <h4 class="card-title">Id: ${employee.getRole()}</h5>
            </div>
          </div>`

        }else{
          htmlCode += `
            <div class="card" style="width: 18rem;">
              <div class="card-body">
              <h5 class="card-title">${employee.name}</h5>
              <p class="card-text">Id: ${employee.id}</p>
              <a href="mailto:${employee.email}" class="btn btn-primary">${employee.email}</a>
              <p class="card-text">Github: ${employee.gitHub}</p>
              <h4 class="card-title">Id: ${employee.getRole()}</h5>
            </div>
          </div>`
        }
    })
    fs.writeFile("projectTeam.html", htmlCode, error =>{
    if(error) {
        console.log(error)
    } else {
        console.log("File created successfully.")
    }
})
}
module.exports = generateHTML