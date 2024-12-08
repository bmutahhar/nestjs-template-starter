import { Module } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { WinstonLoggerModule } from './logger/winston-logger.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [WinstonLoggerModule, UserModule, ConfigModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
