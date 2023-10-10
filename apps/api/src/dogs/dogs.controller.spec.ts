import { Test, TestingModule } from '@nestjs/testing'
import { DogsController } from './dogs.controller'

describe('DogsController', () => {
  let controller: DogsController

  beforeEach(async () => {
    const dogsModule: TestingModule = await Test.createTestingModule({
      controllers: [DogsController],
    }).compile()

    controller = dogsModule.get<DogsController>(DogsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
