"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const configEnvs_1 = require("./config/configEnvs");
const setUpServer_bootstrap_1 = require("./bootstrap/setUpServer.bootstrap");
class Application {
    initialize() {
        this.loadConfig();
        const app = (0, express_1.default)();
        const server = new setUpServer_bootstrap_1.RickAndMortyServer(app);
        server.start();
    }
    loadConfig() {
        configEnvs_1.config.validateConfig();
    }
}
const application = new Application();
application.initialize();
//# sourceMappingURL=app.js.map