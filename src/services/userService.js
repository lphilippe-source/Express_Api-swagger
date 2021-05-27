"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const userRepositories_1 = require("../repositories/userRepositories");
class UserService {
    save(user) {
        return userRepositories_1.userRepository.save(user);
    }
    findAll() {
        return userRepositories_1.userRepository.findAll();
    }
    findById(id) {
        return userRepositories_1.userRepository.findById(id);
    }
    deleteById(id) {
        return userRepositories_1.userRepository.deleteById(id);
    }
    findByUserName(username) {
        return userRepositories_1.userRepository.findByUsername(username);
    }
    findByMail(mail) {
        return userRepositories_1.userRepository.findByMail(mail);
    }
}
exports.userService = Object.freeze(new UserService());
