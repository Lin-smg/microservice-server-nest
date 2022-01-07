import { Controller, Get, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { ApiTags } from "@nestjs/swagger";

@Controller('token')
@ApiTags('token')
export class TokenController {
    constructor(
        @Inject('TOKEN') private readonly tokenClient: ClientProxy,
    ) {}

    @Get()
    async getData() {
        console.log('getData')
        const res = await this.tokenClient.send("getTokenData", "data")
        return res
    }
}