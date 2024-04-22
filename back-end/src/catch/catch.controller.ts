import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatchService } from './catch.service';
import { CreateCatchDto } from './dto/create-catch.dto';
import { UpdateCatchDto } from './dto/update-catch.dto';

@Controller('catch')
export class CatchController {
  constructor(private readonly catchService: CatchService) {}

  @Post()
  create(@Body() createCatchDto: CreateCatchDto) {
    return this.catchService.create(createCatchDto);
  }

  @Get()
  findAll() {
    return this.catchService.findAll();
  }

  @Get(':userId')
  findAllbyUser(@Param('userId') id: number) {
    return this.catchService.findByUserId(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.catchService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatchDto: UpdateCatchDto) {
    return this.catchService.update(+id, updateCatchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catchService.remove(+id);
  }
}
