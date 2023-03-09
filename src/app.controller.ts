import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';;
import { AppService } from './app.service';
import { json } from 'stream/consumers';
import { query } from 'express';

@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) {}

  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }


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
  }
}
