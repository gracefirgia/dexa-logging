import { Module } from '@nestjs/common';
import { LoggingsService } from './loggings.service';
import { LoggingsController } from './loggings.controller';

@Module({
  controllers: [LoggingsController],
  providers: [LoggingsService],
})
export class LoggingsModule {}
