/* eslint-disable no-undef */
const supertest = require("supertest");
const app = require("../modules/app/app");

describe("App", () => {
  it('GET / responds with 200 containing "Hello, petful"', () => {
    return supertest(app).get("/").expect(200, "Hello, petful");
  });
});
