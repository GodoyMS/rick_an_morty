import dotenv from 'dotenv';

dotenv.config({});

class Config {
   public GRAPHQLENDPOINT: string | undefined;
   public NODE_ENV: string | undefined;  
   public PORT: string | undefined;  
   public BASEPATH: string | undefined;  
   public CLIENT_URL: string | undefined;  

   constructor() {
      this.GRAPHQLENDPOINT = process.env.GRAPHQLENDPOINT;
      this.NODE_ENV = process.env.NODE_ENV;
      this.PORT = process.env.PORT;
      this.BASEPATH = process.env.BASEPATH;
      this.CLIENT_URL = process.env.CLIENT_URL;

   }

   public validateConfig(): void {
      console.log(this);
      for (const [key, value] of Object.entries(this)) {
         if (value === undefined) {
            throw new Error(`Configuration ${key} is undefined`);
         }
      }
   }


}

export const config: Config = new Config();
