import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';
import { UserMapper } from './users.mapper';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UsersService,UsersRepository,UserMapper],
  exports: [UsersService],
})
export class UsersModule {}
