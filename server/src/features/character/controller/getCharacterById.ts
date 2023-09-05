import { config } from "@config/configEnvs";
import axios, { AxiosResponse } from "axios";
import { Request, Response } from "express";
export class Character {
  public async read(req: Request, res: Response): Promise<void> {
    const characterID = req.params.id;
    try {
      const response:AxiosResponse = await axios.post(config.GRAPHQLENDPOINT!, {
        query: `
            query {
              character(id: ${characterID}) {                
                name
                type
                image
                species
                id
                status
                gender
                location{
                name
                }
                origin{
                  name
                }
              }
            }
          `,
      });
      const data = response;
      res.status(200).json({
        data: data.data.data.character,
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch character" });
    }
  }
}
