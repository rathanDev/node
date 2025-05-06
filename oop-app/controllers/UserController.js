class UserController {
  constructor(userService) {
    this.userService = userService;
    this.getUser = this.getUser.bind(this); // why?
  }

  getUser(req, res) {
    const user = this.userService.findByUserId(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }
}

module.exports = UserController;
