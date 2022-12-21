// Import `fs` package.
const fs = require("fs")

// Create generateHTML function that builds the `My Team` webpage using template literals and HTML.
function generateHTML(employeeArray) {
    let htmlCode = ""
    employeeArray.forEach(employee => {
        if (employee.getRole() === "Manager"){
            htmlCode += `
            <div class="card bg-warning text-white" style="width: 18rem;">
              <div class="card-body">
              <h1 class="card-title text-center">${employee.getRole()}</h1>
              <h2 class="card-title">${employee.name}</h2>
              <p class="card-text">Employee ID: ${employee.id}</p>
              <p class="card-text">Office Number: ${employee.officeNumber}</p>
              <div class="d-grid gap-2 text-left">
                <a href="mailto:${employee.email}" class="btn btn-primary">Email: ${employee.email}</a>
              </div>
            </div>
          </div>`

        }else if(employee.getRole() === "Engineer"){
            htmlCode += `
            <div class="card bg-success text-white" style="width: 18rem;">
              <div class="card-body">
              <h1 class="card-title text-center">${employee.getRole()}</h1>
              <h2 class="card-title">${employee.name}</h2>
              <p class="card-text">Employee ID: ${employee.id}</p>
              <p class="card-text">Office Number: ${employee.officeNumber}</p>
              <div class="d-grid gap-2">
                <a href="mailto:${employee.email}" class="btn btn-primary">Email: ${employee.email}</a>
                <a href="mailto:${employee.github}" class="btn btn-primary">GitHub: ${employee.github}</a>
              </div>
            </div>
          </div>`

        }else{
          htmlCode += `
            <div class="card bg-danger text-white" style="width: 18rem;">
              <div class="card-body">
              <h1 class="card-title text-center">${employee.getRole()}</h1>
              <h2 class="card-title">${employee.name}</h2>
              <p class="card-text">Employee ID: ${employee.id}</p>
              <p class="card-text">School: ${employee.schoolName}</p>
            <div class="d-grid gap-2">
              <a href="mailto:${employee.email}" class="btn btn-primary">Email: ${employee.email}</a>
            </div>
            </div>
          </div>`
        }
    })
    const fullHTML = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Project Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  </head>
  <body>
  <header class="p-2 text-info bg-primary text-white text-center"><h1>My Team</h1></header>
  <div class="container d-flex flex-wrap justify-content-center mt-5 mb-5">${htmlCode}</div>
  </body>
</html>
    `
    fs.writeFile("projectTeam.html", fullHTML, error =>{
    if(error) {
        console.log(error)
    } else {
        console.log("File created successfully.")
    }
})
}
module.exports = generateHTML