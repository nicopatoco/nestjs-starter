import { CatsModule } from '@app/cats'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ApiController } from './api.controller'
import { ApiService } from './api.service'
import { CatsController } from './cats/cats.controller'
import { DogsController } from './dogs/dogs.controller'

@Module({
  imports: [ConfigModule.forRoot({}), MongooseModule.forRoot(process.env.DATABASE_URL), CatsModule],
  controllers: [ApiController, CatsController, DogsController],
  providers: [ApiService],
})
export class ApiModule {}
