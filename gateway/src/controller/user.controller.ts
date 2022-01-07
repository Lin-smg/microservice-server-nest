import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { ApiBody, ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "src/dto/create-user.dto";

@Controller('user')
@ApiTags('user')
export class UserController {
    constructor(
        @Inject('USER') private readonly userClient: ClientProxy
    ) {}

    @Get()
    async getData() {
        console.log('getData')
        const res = await this.userClient.send("getUserData", "data")
        return res
    }

    @Post()
    @ApiBody({ type: CreateUserDto })
    async createUser(@Body() userRequest: CreateUserDto) {
        console.log('user create');
        const res = await this.userClient.send("createUser", userRequest);
        return res
    }
}