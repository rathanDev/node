class UserService {
  constructor() {
    this.users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
  }

  findByUserId(id) {
    return this.users.find((u) => u.id == Number(id));
  }
}

module.exports = UserService
