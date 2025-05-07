class UserService {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  findByUserId(id) {
    return this.userRepo.findById(id);
  }
}

module.exports = UserService;
