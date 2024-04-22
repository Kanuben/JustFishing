import { Module } from '@nestjs/common';
import { CatchService } from './catch.service';
import { CatchController } from './catch.controller';
import { Catch } from './entities/catch.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Catch])],
  controllers: [CatchController],
  providers: [CatchService],
})
export class CatchModule {}
