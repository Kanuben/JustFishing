import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { CatchModule } from './catch/catch.module';
import { Catch } from './catch/entities/catch.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'poop',
      username: 'postgres',
      entities: [User, Catch],
      database: 'JustFishing',
      synchronize: true,
      logging: true,
    }),
    UserModule,
    CatchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
