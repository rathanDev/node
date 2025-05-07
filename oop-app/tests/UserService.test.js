const UserService = require("./../services/userService");

describe("UserService", () => {
  it("should return a user by ID", () => {
    const service = new UserService();
    expect(service.findByUserId(1)).toEqual({ id: 1, name: "Alice" });
  });

  it("should return undefined for non-existent user", () => {
    const service = new UserService();
    expect(service.findByUserId(999)).toBeUndefined();
  });
});
