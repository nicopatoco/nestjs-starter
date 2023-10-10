import { CatsModule, CatsService } from '@app/cats'
import { Cat } from '@app/cats/cat.interface'
import { ConfigModule } from '@nestjs/config'
import { getModelToken, MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { CatsController } from './cats.controller'

describe('CatsController', () => {
  let controller: CatsController
  let service: CatsService

  beforeEach(async () => {
    const catModule: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      imports: [ConfigModule.forRoot({}), MongooseModule.forRoot(process.env.DATABASE_URL), CatsModule],
    })
      .overrideProvider(getModelToken(CatsModule.name))
      .useValue(jest.fn())
      .compile()

    controller = catModule.get(CatsController)
    service = catModule.get(CatsService)
  })

  it('should be defined', async () => {
    jest
      .spyOn(service, 'getCats')
      .mockImplementation(() => Promise.resolve([{ name: 'test', age: 1, breed: 'test' }]) as Promise<Cat[]>)

    const results = await controller.getCats()

    expect(results).toEqual([{ name: 'test', age: 1, breed: 'test' }])
  })
})
