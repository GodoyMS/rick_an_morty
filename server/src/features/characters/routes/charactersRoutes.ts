import { Characters } from '@characters/controller/getCharacters';
import express, { Router } from 'express';

class CharactersRoutes {
    private router: Router; 
    constructor() {
       this.router = express.Router();
    }
 
    public readCharactersRoute(): Router {
       this.router.get('/humancharacters', Characters.prototype.readHumanCharacters);
       this.router.get('/humanCharactersByName', Characters.prototype.readHumanCharactersByName);
       return this.router;
    }
 } 
 export const charactersRoute: CharactersRoutes = new CharactersRoutes();
