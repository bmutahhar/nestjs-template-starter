import { Module } from '@nestjs/common';
import { ConfigModule as NestjsConfigModule } from '@nestjs/config';

import { configValidationSchema } from './config.validator';

@Module({
  imports: [
    NestjsConfigModule.forRoot({
      validationSchema: configValidationSchema,
    }),
  ],
})
export class ConfigModule {}
