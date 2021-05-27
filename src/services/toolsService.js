"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toolsService = void 0;
const toolsRepository_1 = require("./../repositories/toolsRepository");
class ToolsService {
    save(tools) {
        return toolsRepository_1.toolsRepository.save(tools);
    }
    findAll() {
        return toolsRepository_1.toolsRepository.findAll();
    }
    findById(id) {
        return toolsRepository_1.toolsRepository.findById(id);
    }
    deleteById(id) {
        return toolsRepository_1.toolsRepository.deleteById(id);
    }
}
exports.toolsService = Object.freeze(new ToolsService());
