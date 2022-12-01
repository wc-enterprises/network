import { Logger } from '@nestjs/common';

export class NetworkLogger {
  private readonly logger: Logger;
  constructor(nestLoggerInstance: Logger) {
    this.logger = nestLoggerInstance;
  }

  log(message: string) {
    this.logger.log(`${message}`);
  }

  logError(message: string) {
    this.logger.error(`${message}`);
  }
}
