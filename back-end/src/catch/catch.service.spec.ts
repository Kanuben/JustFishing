import { Test, TestingModule } from '@nestjs/testing';
import { CatchService } from './catch.service';

describe('CatchService', () => {
  let service: CatchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatchService],
    }).compile();

    service = module.get<CatchService>(CatchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
