import { Injectable } from '@nestjs/common';
import { CreateLoggingDto } from './dto/create-logging.dto';

@Injectable()
export class LoggingsService {
  create(createLoggingDto: CreateLoggingDto) {
    return 'This action adds a new logging';
  }

  findAll() {
    return `This action returns all loggings`;
  }
}
