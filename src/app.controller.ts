import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { AppService } from './app.service';
import { json } from 'stream/consumers';
import { query } from 'express';
import { UsersService } from './users/users.service';
import { UserDTO } from './users/user.dto';

@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) {}

  constructor(private authService: AuthService,private usersService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {

    return await this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    const users=await this.usersService.getAllUsers();
    return {message:users};
  }
/*

  @Get()
  getHello(): string {
    return 'Hola mundo!';
  }

  @Get('/nuevo')
  nuevoEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  } */
}
