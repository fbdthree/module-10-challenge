const Manager = require("../lib/Manager")

// Test the Employee class.
describe("Manager", () => {
    it("should create and object with a name, ID, and email address if provided valid arguements", () => {
        const testManager = new Manager("John Doe",99999,"johndoe@company.com",123)
        expect(typeof(testManager)).toBe("object")
        expect(testManager.name).toBe("John Doe")
        expect(testManager.id).toBe(99999)  
        expect(testManager.email).toBe("johndoe@company.com")
        expect(testManager.officeNumber).toBe(123)
        expect(testManager.getName()).toBe("John Doe")
        expect(testManager.getEmail()).toBe("johndoe@company.com")
        expect(testManager.getId()).toBe(99999)
        expect(testManager.getRole()).toBe("Manager")
       })
})
