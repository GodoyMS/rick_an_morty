import express, { Express } from 'express';
import { config } from '@config/configEnvs';
import { RickAndMortyServer } from '@bootstrap/setUpServer.bootstrap';


class Application {
   public initialize(): void {
      this.loadConfig();
      const app: Express = express();
      const server: RickAndMortyServer = new RickAndMortyServer(app);
      server.start();
   }
   private loadConfig(): void {
      config.validateConfig();
   }
}
const application: Application = new Application();
application.initialize();
