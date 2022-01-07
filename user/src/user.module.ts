import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Config } from './config/config.default';
import { User } from './user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env'],
    }),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRootAsync(
      {
        imports: [ConfigModule],
        useFactory: (config: ConfigService) => (
          // config.get("mysql")
          new Config().get('mysql')

        ),
      }
    )
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
