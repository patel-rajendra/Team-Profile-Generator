const Intern = require("../lib/Intern");

test("Can set school via constructor argument",()=>{
    const testSchool="UOT";
    const e = new Intern("Test",1,"test@test.com",testSchool);
    expect(e.school).toBe(testSchool);
});