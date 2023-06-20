// import function from local file
const findShortestString = require("./find-shortest-string");

test("findShortestString finds the Shortest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findLString(["why", "hello", "to", "you"])).toBe("to");
});

test("findShortestString returns the earlier string in cases of joint shortest strings", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
  expect(findShortestString(["ambiguous", "brave", "dance"])).toBe("brave");
  expect(findShortestString(["brave", "dance", "plane"])).toBe("brave");
});
