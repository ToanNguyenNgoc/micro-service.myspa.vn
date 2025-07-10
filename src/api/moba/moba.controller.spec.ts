import { Test, TestingModule } from '@nestjs/testing';
import { MobaController } from './moba.controller';

describe('MobaController', () => {
  let controller: MobaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MobaController],
    }).compile();

    controller = module.get<MobaController>(MobaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
