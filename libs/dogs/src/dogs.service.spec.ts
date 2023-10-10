import { Test, TestingModule } from '@nestjs/testing'
import { DogsService } from './dogs.service'

describe('DogsService', () => {
  let service: DogsService

  beforeEach(async () => {
    const dogsModule: TestingModule = await Test.createTestingModule({
      providers: [DogsService],
    }).compile()

    service = dogsModule.get<DogsService>(DogsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
