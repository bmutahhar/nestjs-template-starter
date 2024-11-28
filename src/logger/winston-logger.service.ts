import { Injectable, LoggerService } from '@nestjs/common';
import * as winston from 'winston';

@Injectable()
export class WinstonLoggerService implements LoggerService {
  private readonly logger = winston.createLogger({
    level: 'info', // Set the log level
    format: winston.format.combine(
      winston.format.colorize({ all: true }), // Add colors
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Add timestamp
      winston.format.printf(({ timestamp, level, message, context }) => {
        return `${timestamp} [${level}]${context ? ` [${context}]` : ''}: ${message}`;
      }),
    ),
    transports: [new winston.transports.Console()],
  });

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string, trace: string) {
    this.logger.error(message, { trace });
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  verbose(message: string) {
    this.logger.verbose(message);
  }
}
