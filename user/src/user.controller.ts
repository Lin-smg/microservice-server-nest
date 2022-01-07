import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';
import { Config } from './config/config.default';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @MessagePattern('getUserData')
  async getData(data) {
    console.log('llll', new Config().get('mysql'))
    return 'user data > ' +data
  }

  @MessagePattern('createUser')
  async create(user) {
    try {
      return await this.userService.create(user);
    } catch (error) {
      console.log(error)
    }

  }
}
