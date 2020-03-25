const enhancer = require('./enhancer.js');
// test away!
const itemTest = {name: "thing", durability: 10, enhancement: 10}
const itemTest2 = {name: "thing", durability: 10, enhancement: 20}
const itemTest3 = {name: "thing", durability: 10, enhancement: 16}

describe("enhancers", () => {
    describe("repair", () => {
        it("doesn't crash", () => {
        enhancer.repair(itemTest)
        })
        it("works as expected", () => {
        expect(enhancer.repair(itemTest)).toEqual({ name: "thing", durability: 100, enhancement: 10 })
        })
    })
    describe("succeed", () => {
        it("doesn't crash", () => {
        enhancer.succeed(itemTest)
        })
        it("works as expected", () => {
            expect(enhancer.succeed(itemTest)).toEqual({ name: "thing", durability: 10, enhancement: 11 })
            expect(enhancer.succeed(itemTest2)).toEqual({ name: "thing", durability: 10, enhancement: 20 })
        })
    })
    describe("fail", () => {
        it("doesn't crash", () => {
        enhancer.fail(itemTest)
        })
        it("works as expected", () => {
        expect(enhancer.fail(itemTest)).toEqual({ name: "thing", durability: 10, enhancement: 5 })
        expect(enhancer.fail(itemTest2)).toEqual({ name: "thing", durability: 10, enhancement: 19 })
        expect(enhancer.fail(itemTest3)).toEqual({ name: "thing", durability: 10, enhancement: 6 })
        })
    })
    describe("get", () => {
        it("doesn't crash", () => {
        enhancer.get(itemTest)
        })
    })
})