import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WinstonLoggerModule } from './logger/winston-logger.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [WinstonLoggerModule, UserModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
