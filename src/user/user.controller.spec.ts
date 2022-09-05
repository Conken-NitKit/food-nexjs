import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let appController: UserService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    appController = app.get<UserService>(UserController);
  });

  describe('root', () => {
    it('should return "Hello User!"', () => {
      expect(appController.getHello()).toBe('Hello User!');
    });
  });
});
