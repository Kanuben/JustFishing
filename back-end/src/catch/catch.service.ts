import { Injectable } from '@nestjs/common';
import { CreateCatchDto } from './dto/create-catch.dto';
import { UpdateCatchDto } from './dto/update-catch.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Catch } from './entities/catch.entity';

@Injectable()
export class CatchService {
  constructor(
    @InjectRepository(Catch) private readonly catchRepository: Repository<Catch>,
  ) {}

  create(createCatchDto: CreateCatchDto) {
    const fishCatch: Catch = new Catch();
    fishCatch.baitType = createCatchDto.baitType;
    fishCatch.date = createCatchDto.date;
    fishCatch.id= createCatchDto.id;
    fishCatch.length = createCatchDto.length;
    fishCatch.location = createCatchDto.location;
    fishCatch.lure = createCatchDto.lure;
    fishCatch.lureColor = createCatchDto.lureColor;
    fishCatch.species = createCatchDto.species;
    fishCatch.userId = createCatchDto.userId;
    fishCatch.weight = createCatchDto.weight;
    fishCatch.points = createCatchDto.points;
    return this.catchRepository.save(fishCatch);
  }

  findAll() {
    return this.catchRepository.find();
  }

  findById(id: number) {
    return this.catchRepository.find({where: {id}});
  }

  findByUserId(id: number) {
    return this.catchRepository.find({where: {userId: id}});
  }

  update(id: number, updateCatchDto: UpdateCatchDto) {
    return `This action updates a #${id} catch`;
  }

  remove(id: number) {
    return `This action removes a #${id} catch`;
  }
}
