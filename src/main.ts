import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'games',
        protoPath: join(__dirname, 'games.proto'),
        url: '0.0.0.0:5001',
      },
    },
  );
  await app.listen();
}

bootstrap();
