import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Config } from './config/config.default';
import { TokenController } from './controller/token.controller';
import { UserController } from './controller/user.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env'],
    })
  ],
  controllers: [AppController, UserController, TokenController],
  providers: [
    AppService,
    Config, 
    {
      provide: "USER",
      useFactory: (config: Config) => {
        const userOption = config.get("user");
        return ClientProxyFactory.create(userOption);
      },
      inject: [Config],
    },
    {
      provide: "TOKEN",
      useFactory: (config: Config) => {
        const tokenOption = config.get("token");
        return ClientProxyFactory.create(tokenOption);
      },
      inject: [Config],
    }
  ],
})
export class AppModule {}
