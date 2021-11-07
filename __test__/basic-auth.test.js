const { signIn } = require("../src/auth/middleware/basic-auth");

describe("auth middleware ", () => {
  let callback;
  let req = {};
  beforeEach(() => {
    callback = jest.fn();
  });
  afterEach(() => {
    req = {};
    callback = null;
  });
  test("Does the middleware function (send it a basic header)", () => {
    req.headers = {
      authorization: "Basic YWJjOmFiYw==",
    };
    signIn(req, {}, callback);
    expect(callback).toHaveBeenCalled();
    expect(req.headers.authorization.username).toBe("abc");
    expect(req.headers.authorization.password).toBe("abc");
  });
});
