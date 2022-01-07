import { Transport } from "@nestjs/microservices";

export class Config {
    private readonly envConfig: { [key: string]: any } = null;
  
    constructor() {
      this.envConfig = {};
      this.envConfig.port = process.env.PORT;
      this.envConfig.user = {
        options: {
          port: process.env.USER_PORT,
          host: process.env.USER_HOST,
        },
        transport: Transport.TCP,
      };
      this.envConfig.token = {
        options: {
          port: process.env.TOKEN_PORT,
          host: process.env.TOKEN_HOST,
        },
        transport: Transport.TCP,
      };
      
    }
  
    get(key: string): any {
      return this.envConfig[key];
    }
  }
  