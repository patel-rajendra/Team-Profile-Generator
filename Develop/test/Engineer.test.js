const Engineer = require("../lib/Engineer");

test("Can check Github account vis constructor argument",()=>{
    const testGithub="test";
    const e = new Engineer("Test",1,"test@test.com",testGithub);
    expect(e.github).toBe(testGithub);
});