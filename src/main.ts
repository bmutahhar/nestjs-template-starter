import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './modules/app.module';
import { WinstonLoggerService } from './modules/logger/winston-logger.service';

/**
 * These are API defaults that can be changed using environment variables,
 * it is not required to change them (see the `.env.example` file)
 */
const API_DEFAULT_PORT = 7878;
const API_DEFAULT_PREFIX = '/api';

async function bootstrap() {
  const logger = new WinstonLoggerService();
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger,
  });
  const config = app.get(ConfigService);
  const port = config.get<number>('API_PORT', API_DEFAULT_PORT);
  const prefix = config.get<string>('API_PREFIX', API_DEFAULT_PREFIX);

  app.setGlobalPrefix(prefix);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(port, () => {
    logger.log(`Server running on http://localhost:${port}`);
  });
}
bootstrap();
