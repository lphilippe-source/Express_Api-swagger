"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userService_1 = require("../services/userService");
class UserController {
    save(req, res) {
        console.log("TEST");
        const body = req.body;
        userService_1.userService.save(req.body).then(data => {
            res.json(data);
        });
    }
    findAll(req, res) {
        userService_1.userService.findAll().then(data => {
            res.json(data);
        });
    }
    findById(req, res) {
        const id = req.params.id;
        userService_1.userService.findById(id).then(data => {
            return res.json(data);
        });
    }
    deleteById(req, res) {
        userService_1.userService.deleteById(req.params.id).then(ok => {
            res.send("OK");
        }, err => {
            res.sendStatus(404);
        });
    }
    findByUsername(req, res) {
        const username = req.params.username;
        userService_1.userService.findByUserName(username).then(data => {
            res.json(data);
        });
    }
}
exports.userController = Object.freeze(new UserController());
