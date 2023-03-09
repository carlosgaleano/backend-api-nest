import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controller/products.controller';
import { CategoriesController } from './controller/categories.controller';
import { UsersController } from './controller/users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: !!process.env.DB_SYNC
    }),UsersModule, AuthModule],
  controllers: [AppController, ProductsController, CategoriesController, UsersController],
  providers: [AppService],
})
export class AppModule {}
