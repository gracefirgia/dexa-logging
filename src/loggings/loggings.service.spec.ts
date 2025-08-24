import { Test, TestingModule } from '@nestjs/testing';
import { LoggingsService } from './loggings.service';

describe('LoggingsService', () => {
  let service: LoggingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggingsService],
    }).compile();

    service = module.get<LoggingsService>(LoggingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
