import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async create(user: CreateUserDto) {
    try {
      let data = await this.userRepository.save(user);
      return data;
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
