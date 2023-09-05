"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({});
class Config {
    constructor() {
        this.GRAPHQLENDPOINT = process.env.GRAPHQLENDPOINT;
        this.NODE_ENV = process.env.NODE_ENV;
        this.PORT = process.env.PORT;
        this.BASEPATH = process.env.BASEPATH;
        this.CLIENT_URL = process.env.CLIENT_URL;
    }
    validateConfig() {
        console.log(this);
        for (const [key, value] of Object.entries(this)) {
            if (value === undefined) {
                throw new Error(`Configuration ${key} is undefined`);
            }
        }
    }
}
exports.config = new Config();
//# sourceMappingURL=configEnvs.js.map