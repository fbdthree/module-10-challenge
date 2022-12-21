// Import the Intern class.
const Intern = require("../lib/Intern")

// Test the Intern class.
describe("Intern", () => {
    it("should create and object with a name, ID, email address, and school if provided valid arguements", () => {
        const testIntern = new Intern("John Doe",99999,"johndoe@company.com","University of Miami")
        expect(typeof(testIntern)).toBe("object")
        expect(testIntern.name).toBe("John Doe")
        expect(testIntern.id).toBe(99999)  
        expect(testIntern.email).toBe("johndoe@company.com")
        expect(testIntern.getName()).toBe("John Doe")
        expect(testIntern.getEmail()).toBe("johndoe@company.com")
        expect(testIntern.getSchool()).toBe("University of Miami")
        expect(testIntern.getId()).toBe(99999)
        expect(testIntern.getRole()).toBe("Intern")
       })
})
