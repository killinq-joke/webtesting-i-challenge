const enhancer = require('./enhancer.js');
// test away!
const itemTest = {name: "thing", durability: 10, enhancement: 10}

describe("enhancers", () => {
    describe("repair", () => {
        it("doesn't crash", () => {
        enhancer.repair(itemTest)
        })
        it("repairs", () => {
        expect(enhancer.repair(itemTest)).toEqual({ name: "thing", durability: 100, enhancement: 10 })
        })
    })
    describe("succeed", () => {
        it("doesn't crash", () => {
        enhancer.succeed(itemTest)
        })
    })
    describe("fail", () => {
        it("doesn't crash", () => {
        enhancer.fail(itemTest)
        })
    })
    describe("get", () => {
        it("doesn't crash", () => {
        enhancer.get(itemTest)
        })
    })
})