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
      expect(
        enhancer.repair({ name: "bropo", durability: 10, enhancement: 14 })
      ).toEqual({
        name: "bropo",
        durability: 100,
        enhancement: 14,
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
      expect(
        enhancer.succeed({ name: "bob", durability: 90, enhancement: 20 })
      ).toEqual({
        name: "bob",
        durability: 90,
        enhancement: 20,
      });
      expect(
        enhancer.succeed({ name: "thing", durability: 23, enhancement: 20 })
      ).toEqual({
        name: "thing",
        durability: 23,
        enhancement: 20,
      });
    });
  });
  describe("fail()", () => {
    it("decreases durability by 5 if enhancement is less than 15", () => {
      expect(
        enhancer.fail({ name: "thing", durability: 90, enhancement: 14 })
      ).toEqual({ name: "thing", durability: 85, enhancement: 14 });
      expect(
        enhancer.fail({ name: "bro", durability: 10, enhancement: 10 })
      ).toEqual({ name: "bro", durability: 5, enhancement: 10 });
    });
    it("decreases durability by 10 if enhancement is 15 or more", () => {
      expect(
        enhancer.fail({ name: "thing", durability: 90, enhancement: 15 })
      ).toEqual({ name: "thing", durability: 80, enhancement: 15 });
      expect(
        enhancer.fail({ name: "pickaxe", durability: 72, enhancement: 16 })
      ).toEqual({ name: "pickaxe", durability: 62, enhancement: 16 });
    });
    it("decreases enhancement by 1 if enhancement is more than 16", () => {
      expect(
        enhancer.fail({ name: "thing", durability: 90, enhancement: 17 })
      ).toEqual({
        name: "thing",
        durability: 90,
        enhancement: 16,
      });
      expect(
        enhancer.fail({ name: "axe", durability: 100, enhancement: 20 })
      ).toEqual({
        name: "axe",
        durability: 100,
        enhancement: 19,
      });
    });
  });
  describe("get()", () => {
    it("things", () => {});
  });
});
