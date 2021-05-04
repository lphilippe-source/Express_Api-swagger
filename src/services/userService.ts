import { userRepository } from "../repositories/userRepositories";

class UserService {

    save(user){
        return userRepository.save(user)
    }

    findAll(){
        return userRepository.findAll()
    }

    findById(id){
        return userRepository.findById(id)
    }

    deleteById(id){
        return userRepository.deleteById(id)
    }

    findByUserName(username){
        return userRepository.findByUsername(username)
    }

    findByMail(mail){
        return userRepository.findByMail(mail)
    }

}

export const userService = Object.freeze(new UserService())