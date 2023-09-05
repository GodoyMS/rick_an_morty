"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Characters = void 0;
const configEnvs_1 = require("../../../config/configEnvs");
const axios_1 = __importDefault(require("axios"));
class Characters {
    readHumanCharacters(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page } = req.query;
            try {
                const response = yield axios_1.default.post(configEnvs_1.config.GRAPHQLENDPOINT, {
                    query: `
            query {
              characters(page: ${page},filter:{species:"human"}) {                
                info {
                    count
                    next
                    prev
                    pages
                  }                
                  results {
                    name
                    type
                    species
                    status
                    image
                    id
                    location{
                      name
                    }
                    origin{
                      name                      
                    }                    
                  }
              }
            }
          `,
                });
                const data = response;
                res.status(200).json({
                    data: data.data.data.characters
                });
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to fetch characters' });
            }
        });
    }
    //Search filter
    readHumanCharactersByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page, name, status } = req.query;
            try {
                const response = yield axios_1.default.post(configEnvs_1.config.GRAPHQLENDPOINT, {
                    query: `
            query {
              characters(page: ${page},filter:{species:"human",name:"${name}",status:"${status}"}) {                
                info {
                    count
                    next
                    prev
                    pages
                  }                
                  results {
                    name
                    type
                    species
                    status
                    image
                    id
                    location{
                      name
                    }
                    origin{
                      name                      
                    }                    
                  }
              }
            }
          `,
                });
                const data = response;
                res.status(200).json({
                    data: data.data.data.characters
                });
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to fetch characters' });
            }
        });
    }
}
exports.Characters = Characters;
//# sourceMappingURL=getCharacters.js.map