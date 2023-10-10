import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Cat } from './cat.interface'
import { CatDocument, CatEntity } from './cat.schema'

@Injectable()
export class CatsService {
  constructor(@InjectModel(CatEntity.name) private catModel: Model<CatDocument>) {}
  async getCats(): Promise<Cat[]> {
    return this.catModel.find().exec()
  }
  async createCat(cat: Cat): Promise<Cat> {
    const newCat = new this.catModel(cat)
    return newCat.save()
  }
}
