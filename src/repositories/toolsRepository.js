"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toolsRepository = exports.toolsModel = exports.toolsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.toolsSchema = new mongoose_1.default.Schema({
    price: Number,
    toolsName: String,
    categoryTools: String,
    lieu: String,
    donationoutils: String
});
exports.toolsModel = mongoose_1.default.model('tools', exports.toolsSchema);
// console.log(JSON.stringify(toolsSchema));
class ToolsRepository {
    save(tools) {
        return new exports.toolsModel(tools).save();
    }
    findAll() {
        return exports.toolsModel.find().exec();
    }
    findById(id) {
        return exports.toolsModel.findById(id).exec();
    }
    deleteById(id) {
        return exports.toolsModel.deleteOne({ _id: id }).exec();
    }
}
exports.toolsRepository = Object.freeze(new ToolsRepository());
