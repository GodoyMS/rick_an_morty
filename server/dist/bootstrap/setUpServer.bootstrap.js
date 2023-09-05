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
exports.RickAndMortyServer = void 0;
const express_1 = require("express");
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const configEnvs_1 = require("../config/configEnvs");
const routes_1 = __importDefault(require("../interfaces/http/routes"));
class RickAndMortyServer {
    constructor(app) {
        this.app = app;
    }
    start() {
        this.securityMiddleware(this.app);
        this.standardMiddleware(this.app);
        this.routesMiddleware(this.app);
        this.startServer(this.app);
    }
    securityMiddleware(app) {
        app.use((0, cors_1.default)({
            origin: configEnvs_1.config.CLIENT_URL,
            credentials: true,
            optionsSuccessStatus: 200,
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
            allowedHeaders: [
                "Authorization",
                "Content-Type",
                "Access-Control-Allow-Headers",
                "Access-Control-Allow-Methods",
            ],
        }));
    }
    standardMiddleware(app) {
        app.use((0, express_1.json)({ limit: "50mb" }));
        app.use((0, express_1.urlencoded)({ extended: true, limit: "50mb" }));
    }
    routesMiddleware(app) {
        (0, routes_1.default)(app);
    }
    startServer(app) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const httpServer = new http_1.default.Server(app);
                this.startHttpServer(httpServer);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    startHttpServer(httpServer) {
        console.log(`Server has started with process ${process.pid}.`);
        const PORT = Number(configEnvs_1.config.PORT) || 5000;
        httpServer.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
            console.log(`Server running at ${PORT}.`);
        });
    }
}
exports.RickAndMortyServer = RickAndMortyServer;
//# sourceMappingURL=setUpServer.bootstrap.js.map