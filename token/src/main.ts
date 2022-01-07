import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Config } from './config/config.default';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: new Config().get('port'),
    },
  } as TcpOptions);
  await app.listen();

  console.log('port > > > ', new Config().get('port'))
}
bootstrap();
