"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mock = void 0;
const userRepositories_1 = require("./userRepositories");
const bcrypt = require("bcrypt");
class Mock {
    constructor(email, mock = null) {
        if (mock) {
            this.mockRepository = new Promise((resolve, reject) => {
                const hash = bcrypt.hash("pipopipo", 10);
                return [
                    {
                        firstname: "phil",
                        email: "philippelmr@caca.com",
                        password: hash,
                        lastname: "toto",
                        phone: "2989824724",
                        _v: 23,
                    },
                ];
            });
            // this.mockRepository = {
            // 	email: "philippelmr@caca.com",
            // 	password: "pipopipo",
            // }
        }
        else {
            this.userDefault = userRepositories_1.userRepository.findByMail(email);
        }
        // this.getInstance()
    }
    // on doit modifier le userRepository si on est en test on renvoie le mock
    //sinon valeur par default
    static getInstance(email, mock = null) {
        return new this(email);
    }
    findByMail(mail) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const hash = yield bcrypt.hash("pipopipo", 10);
            resolve([
                {
                    firstname: "philippe",
                    email: "philippelmr@caca.com",
                    password: hash,
                    lastname: "toto",
                    phone: "2989824724",
                    _v: 23,
                },
            ]);
        }));
    }
}
exports.Mock = Mock;
