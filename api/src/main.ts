import 'dotenv/config';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  // app.enableCors({
  //   origin: '*',
  // });
  // app.enableCors({
  //   origin: ['https://fincheck.diegoricardoweb.dev'],
  //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  //   credentials: true,
  // });
  app.enableCors({
    origin: ['https://fincheck.diegoricardoweb.dev'],
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
