import { Test, TestingModule } from '@nestjs/testing';
import { LoggingsController } from './loggings.controller';
import { LoggingsService } from './loggings.service';

describe('LoggingsController', () => {
  let controller: LoggingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoggingsController],
      providers: [LoggingsService],
    }).compile();

    controller = module.get<LoggingsController>(LoggingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
