const Employee = require("../lib/employee")

test("Test Engineer object created from class",() =>{
    const testEngineer = new Engineer("John Doe", 99999, "johndoe@company.com", "www.github.com/engineer")
    expect(typeof(testEngineer)).toBe("object")
}) 
test("Test Engineer name attribute and getName",() => {
    const testEngineer = new Engineer("John Doe", 99999, "johndoe@company.com", "www.github.com/engineer")
    expect(testEngineer.getName()).toBe("John Doe")
    expect(testEngineer.name).toBe("John Doe")
}) 
test("Test Engineer ID attribute and method",() =>{
    const testEngineer = new Engineer("John Doe", 99999, "johndoe@company.com", "www.github.com/engineer")
    expect(testEngineer.id).toBe(99999)
    expect(testEngineer.getId()).toBe(99999)
}) 
test("Test Engineer email attribute and method",() =>{
    const testEngineer = new Engineer("John Doe", 99999, "johndoe@company.com", "www.github.com/engineer")
    expect(testEngineer.email).toBe("johndoe@company.com")
    expect(testEngineer.getEmail()).toBe("johndoe@company.com")
}) 
test("Test Engineer getRole attribute and method",() =>{
    const testEngineer = new Engineer("John Doe",99999,"johndoe@company.com", "www.github.com/engineer")
    expect(testEngineer.getRole()).toBe("Engineer")
}) 