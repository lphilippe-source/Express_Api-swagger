"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routing = void 0;
const DemoController_1 = require("./controllers/DemoController");
const auth_1 = require("./controllers/auth");
const userController_1 = require("./controllers/userController");
const ToolsController_1 = require("./controllers/ToolsController");
const body_parser_1 = __importDefault(require("body-parser"));
const _1 = require(".");
const swaggerUi = require("swagger-ui-express");
// @ts-ignore
const routing = (app) => {
    // Demo
    app.get('/', DemoController_1.demoController.demo);
    app.get('/hello', DemoController_1.demoController.hello);
    // app.get('/test', demoController.test)
    app.post('/', DemoController_1.demoController.save);
    // User
    const jsonParser = body_parser_1.default.json();
    app.post('/users/signup', jsonParser, auth_1.Auth.signup);
    app.post('/users/login', jsonParser, auth_1.Auth.login);
    app.post('/users', auth_1.Auth.isToken, userController_1.userController.save);
    app.get('/users', auth_1.Auth.isToken, userController_1.userController.findAll);
    app.get('/users/:id', auth_1.Auth.isToken, userController_1.userController.findById);
    app.delete('/users/:id', auth_1.Auth.isToken, userController_1.userController.deleteById);
    app.get('/users/username/:username', auth_1.Auth.isToken, userController_1.userController.findByUsername);
    // swagger docs
    app.use('/api', swaggerUi.serve, swaggerUi.setup(_1.swaggerDocument, null, null, _1.customCss));
    // Tools
    var urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
    // var jsonParser = bodyParser.json()
    // app.post('/users/signup',jsonParser,signup)
    // app.post('/users/login', login)
    app.post('/tools', jsonParser, ToolsController_1.toolsController.save);
    app.get('/tools', ToolsController_1.toolsController.findAll);
    app.get('/tools/:id', ToolsController_1.toolsController.findById);
    app.delete('/tools/:id', ToolsController_1.toolsController.deleteById);
    // app.get('/tools/username/:username', toolsController.findByUsername)
};
exports.routing = routing;
