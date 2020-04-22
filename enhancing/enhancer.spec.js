const enhancer = require("./enhancer.js");
// test away!

describe("enhancer", () => {
  describe("repair()", () => {
    it("takes the durability to 100", () => {
      expect(enhancer.repair({ name: "thing", durability: 90 })).toEqual({
        name: "thing",
        durability: 100,
      });
    });
  });
  describe("succeed()", () => {
    it("things", () => {});
  });
  describe("fail()", () => {
    it("things", () => {});
  });
  describe("get()", () => {
    it("things", () => {});
  });
});
