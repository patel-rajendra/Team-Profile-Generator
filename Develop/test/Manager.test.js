const Manager = require("../lib/Manager");

test("Can set OfficeNumber via constructor argument",()=>{
    const testofficeNumber=2343322345;
    const e = new Manager("Test",1,"test@test.com",testofficeNumber);
    expect(e.officeNumber).toBe(testofficeNumber);
});