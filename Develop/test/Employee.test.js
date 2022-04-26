const Employee = require("../lib/Employee");

test("Can set name via constructor argument",()=>{
    const name="Test"
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor argument",()=>{
    const testID=100;
    const e = new Employee("Test",testID);
    expect(e.id).toBe(testID);
});

test("Can set email via constructor argument",()=>{
    const testEmail="test@test.com";
    const e = new Employee("Test",1, testEmail);
    expect(e.email).toBe(testEmail);
});