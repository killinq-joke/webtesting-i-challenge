const enhancer = require("./enhancer.js");
// test away!

describe("enhancer", () => {
  describe("repair()", () => {
    it("takes the durability to 100", () => {
      expect(
        enhancer.repair({ name: "thing", durability: 90, enhancement: 10 })
      ).toEqual({
        name: "thing",
        durability: 100,
        enhancement: 10,
      });
    });
  });
  describe("succeed()", () => {
    it("increases enhancement by 1", () => {
        expect(
          enhancer.succeed({ name: "thing", durability: 90, enhancement: 10 })
        ).toEqual({ name: "thing", durability: 90, enhancement: 11 });
    });
    it("doesn't increase enhancement if at 20", () => {
        expect(
          enhancer.succeed({ name: "thing", durability: 90, enhancement: 20 })
        ).toEqual({
          name: "thing",
          durability: 90,
          enhancement: 20,
        });
    })
  });
  describe("fail()", () => {
    it("things", () => {});
  });
  describe("get()", () => {
    it("things", () => {});
  });
});
