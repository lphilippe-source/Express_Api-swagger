"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocument = exports.customCss = exports.app = void 0;
// @ts-ignore
const express_1 = __importDefault(require("express"));
const routing_1 = require("./routing");
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
const fs = require("fs");
// Creation du serveur
exports.app = express_1.default();
// config du serveur
const swaggerFile = process.cwd() + "/swagger/swagger.json";
const swaggerData = fs.readFileSync(swaggerFile, "utf8");
exports.customCss = fs.readFileSync(process.cwd() + "/swagger/swagger.css", "utf8");
exports.swaggerDocument = JSON.parse(swaggerData);
// definiton des routes
routing_1.routing(exports.app);
// init mongoose
// definie une connexion avec la base de donnée
const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const uri = "mongodb+srv://" +
    USER +
    ":" +
    PASS +
    "@cluster0.6d8ty.mongodb.net/outilMy?retryWrites=true&w=majority";
mongoose_1.default
    .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
    console.log("connexion à Mongo réussi");
})
    .catch(() => {
    console.log(uri);
    console.log("connexion à Mongo échoué");
});
// app.use(bodyParser.json())
exports.app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
    next();
});
exports.app.use(body_parser_1.default.urlencoded({ extended: true }));
exports.app.use(body_parser_1.default.json());
// Lance le serveur
exports.app.listen(8081, () => {
    console.log("Le serveur est lancé");
});
