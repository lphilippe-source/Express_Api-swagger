"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoController = void 0;
const demoService_1 = require("../services/demoService");
class DemoController {
    hello(req, res) {
        res.send("Hello");
    }
    // test = (req, res) => {
    //     res.send("Test")
    // }
    demo(req, res) {
        res.send("Demo");
    }
    save(req, res) {
        const data = req.body;
        const result = demoService_1.demoService.add(data.x, data.y);
        res.send("" + result);
    }
}
// Singleton
exports.demoController = Object.freeze(new DemoController());
