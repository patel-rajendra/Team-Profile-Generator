const Employee = require("../lib/Employee");

test("Can check name vis constructor argument",()=>{
    const name="Test"
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can check id vis constructor argument",()=>{
    const testID=100;
    const e = new Employee("Test",testID);
    expect(e.id).toBe(testID);
});

test("Can check email vis constructor argument",()=>{
    const testEmail="test@test.com";
    const e = new Employee("Test",1, testEmail);
    expect(e.email).toBe(testEmail);
});