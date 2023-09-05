"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configEnvs_1 = require("../../config/configEnvs");
const charactersRoutes_1 = require("../../features/characters/routes/charactersRoutes");
const characterRoutes_1 = require("../../features/character/route/characterRoutes");
exports.default = (app) => {
    const routes = () => {
        //actions
        app.use(configEnvs_1.config.BASEPATH, charactersRoutes_1.charactersRoute.readCharactersRoute());
        app.use(configEnvs_1.config.BASEPATH, characterRoutes_1.characterRoute.readCharacterRoute());
        app.use('/', (req, res) => {
            res.send('Hello, world!');
        });
    };
    routes();
};
//# sourceMappingURL=routes.js.map