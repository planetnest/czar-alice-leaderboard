describe("Leaderboard", () => {
  const rank = require('./');
  const rankTable = [100,100,50,40,40,20,10]; // do not change

  it("uses Dense Ranking", () => {
    expect(rank(rankTable, 40)).toBe(3);
    expect(rank(rankTable, 50)).toBe(2);
  });
});