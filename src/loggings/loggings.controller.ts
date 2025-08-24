import { Controller, Get, Post, Body } from '@nestjs/common';
import { LoggingsService } from './loggings.service';
import { CreateLoggingDto } from './dto/create-logging.dto';

@Controller('loggings')
export class LoggingsController {
  constructor(private readonly loggingsService: LoggingsService) {}

  @Post()
  create(@Body() createLoggingDto: CreateLoggingDto) {
    return this.loggingsService.create(createLoggingDto);
  }

  @Get()
  findAll() {
    return this.loggingsService.findAll();
  }
}
