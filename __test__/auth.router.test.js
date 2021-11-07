const { app } = require("../src/server");
const supertest = require("supertest");
const request = supertest(app);
describe("tests for auth the routes", () => {
  test("POST to /signup to login as a user (use basic auth)", async () => {
    const test = await request
      .post("/signup")
      .send({ username: "test", password: "test" });
    expect(test.status).toBe(201);
  });
  test("POST to /signin to create a new user", async () => {
    const test = await request
      .post("/signup")
      .send({ username: "abc", password: "abc" });
    expect(test.status).toBe(201);
    const test1 = await request
      .post("/signin")
      .set("authorization", "Basic YWJjOmFiYw==");
    expect(test1.status).toBe(200);
  });
});
