import { Test, TestingModule } from '@nestjs/testing';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';

describe('StoreController', () => {
  let storeController: StoreService;

  beforeEach(async () => {
    const store: TestingModule = await Test.createTestingModule({
      controllers: [StoreController],
      providers: [StoreService],
    }).compile();

    storeController = store.get<StoreService>(StoreController);
  });

  describe('root', () => {
    it('should return "Hello Store!"', () => {
      expect(storeController.getHello()).toBe('Hello Store!');
    });
  });
});
