"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.charactersRoute = void 0;
const getCharacters_1 = require("../controller/getCharacters");
const express_1 = __importDefault(require("express"));
class CharactersRoutes {
    constructor() {
        this.router = express_1.default.Router();
    }
    readCharactersRoute() {
        this.router.get('/humancharacters', getCharacters_1.Characters.prototype.readHumanCharacters);
        this.router.get('/humanCharactersByName', getCharacters_1.Characters.prototype.readHumanCharactersByName);
        return this.router;
    }
}
exports.charactersRoute = new CharactersRoutes();
//# sourceMappingURL=charactersRoutes.js.map