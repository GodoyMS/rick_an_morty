import { Application } from 'express';

import { config } from '@config/configEnvs';
import { charactersRoute } from '@characters/routes/charactersRoutes';
import { characterRoute } from '@character/route/characterRoutes';

export default (app: Application) => {
   const routes = () => {



 
      //actions
      app.use(config.BASEPATH!,charactersRoute.readCharactersRoute())
      app.use(config.BASEPATH!,characterRoute.readCharacterRoute())

      app.use('/', (req, res) => {
         res.send('Hello, world!');
      });
   };
   routes();
};
