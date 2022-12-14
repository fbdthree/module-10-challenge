
const Employee = require("../lib/employee")


// test("Test Employee object created from class",() =>{
//     const testEmployee = new Employee("John Doe",99999,"johndoe@company.com")
//     expect(typeof(testEmployee)).toBe("object")
// }) 
// test("Test Employee name attribute and getName",() => {
//     const testEmployee = new Employee("John Doe",99999,"johndoe@company.com")
    
//     expect(testEmployee.getName()).toBe("John Doe")
//     expect(testEmployee.name).toBe("John Doe")
// }) 
// test("Test Employee ID attribute and method",() =>{
//     const testEmployee = new Employee("John Doe",99999,"johndoe@company.com")
//     expect(testEmployee.id).toBe(99999)
//     expect(testEmployee.getId()).toBe(99999)
// }) 
// test("Test Employee email attribute and method",() =>{
//     const testEmployee = new Employee("John Doe",99999,"johndoe@company.com")
//     expect(testEmployee.email).toBe("johndoe@company.com")
//     expect(testEmployee.getEmail()).toBe("johndoe@company.com")
// }) 
// test("Test Employee getRole attribute and method",() =>{
//     const testEmployee = new Employee("John Doe",99999,"johndoe@company.com")
//     expect(testEmployee.getRole()).toBe("Employee")
// }) 

// // describe("Employee", () => {
// //     describe("Initialization", () => {
// //       it("should create an object with a name and age if provided valid arguments", () => {
// //         const child = new Child("Sarah", 3);
  
// //         // TODO: Add a comment describing the purpose of the following statements
// //         expect(child.name).toEqual("Sarah");
// //         expect(child.age).toEqual(3);
// //       })
    
describe("Employee", () => {
    it("should create and object with a name, ID, and email address if provided valed arguements", () => {
        const testEmployee = new Employee("John Doe",99999,"johndoe@company.com")
        expect(typeof(testEmployee)).toBe("object")
        expect(testEmployee.name).toBe("John Doe")
        expect(testEmployee.id).toBe(99999)  
        expect(testEmployee.email).toBe("johndoe@company.com")
        expect(testEmployee.getName()).toBe("John Doe")
        expect(testEmployee.getEmail()).toBe("johndoe@company.com")
        expect(testEmployee.getId()).toBe(99999)
        expect(testEmployee.getRole()).toBe("Employee")
       })
})