
const mod = require("../src/test_calculator")

describe("add function", ()=>{
    it("should add two numbers",()=>{
        expect(mod.add(2,3)).toBe(5);
    })
})