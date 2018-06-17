const mostFrequentItemCount = require("./script");

describe("function test", () => {
  it("should return the count of the most frequent item", () => {
    const arr = [1, 1, "1", "1", "1", 2, 2, 3, -4, -4, -4, -4, -4, -4];
    expect(mostFrequentItemCount(arr)).toEqual(6);
  });
});
