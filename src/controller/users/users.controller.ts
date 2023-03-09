import { Controller,Get, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

@Get('datos')
getUserDatos(@Query('id') id: number =1 ){

  const userDate=[{nombre:'Carlos Galeano',token:'ARTdPiBiDDuW4kWNIxhlHKsKKiSEp5RN',id}];
  return userDate;

}


}
