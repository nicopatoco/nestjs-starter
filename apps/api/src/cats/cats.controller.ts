import { CatsService } from '@app/cats'
import { Body, Controller, Get, Post } from '@nestjs/common'

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get()
  getCats() {
    return this.catsService.getCats()
  }
  @Post()
  createCat(@Body() cat: { name: string; age: number }) {
    return this.catsService.createCat(cat)
  }
}
