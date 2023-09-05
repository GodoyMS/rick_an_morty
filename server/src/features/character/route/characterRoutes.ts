import { Character } from '@character/controller/getCharacterById';
import express, { Router } from 'express';

class CharacterRoutes {
    private router: Router;
 
    constructor() {
       this.router = express.Router();
    }
 
    public readCharacterRoute(): Router {
       // Design Pattern Prototype: https://refactoring.guru/es/design-patterns/prototype
       this.router.get('/character/:id', Character.prototype.read);
       return this.router;
    }
 
   
 }
 
 export const characterRoute: CharacterRoutes = new CharacterRoutes();
