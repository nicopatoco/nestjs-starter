import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type CatDocument = CatEntity & Document

@Schema({ collection: 'cats' })
export class CatEntity {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  age: number
}

export const CatSchema = SchemaFactory.createForClass(CatEntity)

CatSchema.index({ name: 1 }, { unique: true })
