import { NestFactory } from '@nestjs/core';
import * as NodeCache from 'node-cache';
import { AppModule } from './app.module';
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors: true})
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
