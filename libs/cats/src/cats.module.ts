import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CatEntity, CatSchema } from './cat.schema'
import { CatsService } from './cats.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: CatEntity.name, schema: CatSchema }])],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
