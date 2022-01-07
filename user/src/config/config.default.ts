import { Transport } from "@nestjs/microservices";

export class Config {
    private readonly envConfig: { [key: string]: any } = null;
  
    constructor() {
      this.envConfig = {};
      this.envConfig.port = process.env.PORT;

      this.envConfig.mysql = {
        type: 'mysql',
        host: 'localhost',
        port: 3307,
        username: 'root',
        password: 'root',
        database: 'user',
        entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: true,
      }
    //   this.envConfig.tokenService = {
    //     options: {
    //       port: process.env.TOKEN_SERVICE_PORT,
    //       host: process.env.TOKEN_SERVICE_HOST,
    //     },
    //     transport: Transport.TCP,
    //   };
    //   this.envConfig.userService = {
    //     options: {
    //       port: process.env.USER_SERVICE_PORT,
    //       host: process.env.USER_SERVICE_HOST,
    //     },
    //     transport: Transport.TCP,
    //   };
    //   this.envConfig.taskService = {
    //     options: {
    //       port: process.env.TASK_SERVICE_PORT,
    //       host: process.env.TASK_SERVICE_HOST,
    //     },
    //     transport: Transport.TCP,
    //   };
    //   this.envConfig.permissionService = {
    //     options: {
    //       port: process.env.PERMISSION_SERVICE_PORT,
    //       host: process.env.PERMISSION_SERVICE_HOST,
    //     },
    //     transport: Transport.TCP,
    //   };
    }
  
    get(key: string): any {
      return this.envConfig[key];
    }
  }
  