const { readCSV } = require("../../src/csvReader");
const { executeSELECTQuery } = require("../../src/index");
const { parseJoinClause, parseSelectQuery } = require("../../src/queryParser");

test("Read CSV File", async () => {
  const data = await readCSV("./student.csv");
  expect(data.length).toBeGreaterThan(0);
  expect(data.length).toBe(4);
  expect(data[0].name).toBe("John");
  expect(data[0].age).toBe("30");
});
