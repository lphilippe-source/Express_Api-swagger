"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const userRepositories_1 = require("../repositories/userRepositories");
//change userRepository for Container
//Création Token
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
class Auth {
}
exports.Auth = Auth;
Auth.token = null;
Auth.signup = (req, res, next) => {
    console.log(req.body);
    bcrypt
        .hash(req.body.password, 10)
        .then((hash) => {
        const user = new userRepositories_1.userModel({
            email: req.body.email,
            password: hash,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
        });
        user
            .save()
            .then(() => res.status(201).json({ message: "utilisateur créé" }))
            .catch((error) => res.status(400).json({ error }));
    })
        .catch((error) => res.status(500).json({ error }));
};
Auth.login = (req, res, next) => {
    // new Mock(req.body.email)
    userRepositories_1.userRepository
        .findByMail(req.body.email)
        .then((user) => {
        console.log(user);
        if (!user) {
            return res.status(401).json({ error: "Utilisateur non trouvé !" });
        }
        let { password, _id } = Object.create(user[0]);
        bcrypt
            .compare(req.body.password, password)
            .then((valid) => {
            console.log(user);
            if (!valid) {
                return res.status(401).json({ error: "Mot de passe incorrect !" });
            }
            Auth.token = jwt.sign({ userId: user }, "RANDOM_TOKEN_SECRET", { expiresIn: "24h" });
            res.status(200).json({
                userId: _id,
                token: Auth.token,
            });
        })
            .catch((error) => res.status(500).json({ error }));
    })
        .catch((error) => res.status(500).json({ error }));
};
Auth.isToken = (req, res, next) => {
    try {
        jwt.verify(Auth.token, "RANDOM_TOKEN_SECRET");
        next();
    }
    catch (error) {
        return res.status(500).json({ error });
    }
};
