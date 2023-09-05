import { config } from "@config/configEnvs";
import axios, { AxiosResponse } from "axios";
import { Request,Response } from "express";

export class Characters {
    public async readHumanCharacters(req: Request, res: Response): Promise<void> {
        const { page } = req.query;
       try {
        const response:AxiosResponse = await axios.post(config.GRAPHQLENDPOINT!, {
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
            data:data.data.data.characters
         });
      } catch (error) {
        res.status(500).json({ message: 'Failed to fetch characters' });
      }       
    }


    //Search filter
    public async readHumanCharactersByName(req: Request, res: Response): Promise<void> {
        const { page,name,status } = req.query;
       try {
        const response:AxiosResponse = await axios.post(config.GRAPHQLENDPOINT!, {
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
            data:data.data.data.characters
         });
      } catch (error) {
        res.status(500).json({ message: 'Failed to fetch characters' });
      }       
    }
 }
 