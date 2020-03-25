const enhancer = require('./enhancer.js');
// test away!
const itemTest = {name: "thing", durability: 10, enhancement: 10}
const itemTest2 = {name: "thing", durability: 10, enhancement: 20}

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
        it("succeeds", () => {
            expect(enhancer.succeed(itemTest)).toEqual({ name: "thing", durability: 10, enhancement: 11 })
            expect(enhancer.succeed(itemTest2)).toEqual({ name: "thing", durability: 10, enhancement: 20 })
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