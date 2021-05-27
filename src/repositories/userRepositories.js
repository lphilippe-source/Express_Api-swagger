"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = exports.userModel = exports.userSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
mongoose_1.default.set('useCreateIndex', true);
exports.userSchema = new mongoose_1.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, required: true },
    password: String,
    phone: String
});
exports.userModel = mongoose_1.model('user', exports.userSchema);
class UserRepository {
    save(user) {
        return new exports.userModel(user).save();
    }
    findAll() {
        return exports.userModel.find().exec();
    }
    findById(id) {
        return exports.userModel.findById(id).exec();
    }
    deleteById(id) {
        return exports.userModel.deleteOne({ _id: id }).exec();
    }
    findByUsername(username) {
        return exports.userModel.find({ username: username }).exec();
    }
    findByMail(mail) {
        return exports.userModel.find({ email: mail }).exec();
    }
}
exports.userRepository = Object.freeze(new UserRepository());
