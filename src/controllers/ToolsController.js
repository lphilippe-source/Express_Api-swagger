"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toolsController = void 0;
const toolsService_1 = require("../services/toolsService");
class ToolsController {
    save(req, res) {
        console.log("TEST");
        const body = req.body;
        toolsService_1.toolsService.save(req.body).then(data => {
            res.json(data);
        });
    }
    findAll(req, res) {
        toolsService_1.toolsService.findAll().then(data => {
            res.json(data);
        });
    }
    findById(req, res) {
        const id = req.params.id;
        toolsService_1.toolsService.findById(id).then(data => {
            return res.json(data);
        });
    }
    deleteById(req, res) {
        toolsService_1.toolsService.deleteById(req.params.id).then(ok => {
            res.send("OK");
        }, err => {
            res.sendStatus(404);
        });
    }
}
exports.toolsController = Object.freeze(new ToolsController());
