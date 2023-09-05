"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterRoute = void 0;
const getCharacterById_1 = require("../controller/getCharacterById");
const express_1 = __importDefault(require("express"));
class CharacterRoutes {
    constructor() {
        this.router = express_1.default.Router();
    }
    readCharacterRoute() {
        // Design Pattern Prototype: https://refactoring.guru/es/design-patterns/prototype
        this.router.get('/character/:id', getCharacterById_1.Character.prototype.read);
        return this.router;
    }
}
exports.characterRoute = new CharacterRoutes();
//# sourceMappingURL=characterRoutes.js.map