import { exec } from "child_process";

describe("building", function () {
  it("builds typescript source to javascript", function (done) {
    this.timeout(0); // disable timeout
    return exec("npm run build", done);
  });
});
