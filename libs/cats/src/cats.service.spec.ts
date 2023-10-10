import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { CatsModule } from './cats.module'
import { CatsService } from './cats.service'

describe('CatsService', () => {
  let service: CatsService

  beforeEach(async () => {
    const catsModule: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({}), MongooseModule.forRoot(process.env.DATABASE_URL), CatsModule],
    }).compile()

    service = catsModule.get(CatsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
