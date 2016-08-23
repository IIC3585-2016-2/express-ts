import * as request from "supertest-as-promised";
import { expect } from "chai";

import app from "../src/app";

describe("builds ", function () {
  it("responds to / with JSON", function () {
    return request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
