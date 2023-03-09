import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UsersService } from './users.service';
import { encodePassword } from 'src/utils/bcrypt';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthService } from 'src/auth/auth.service';


@Controller('users')
export class UsersController {

    users: UserDTO[] = [];
    constructor(private usersService: UsersService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAllUsers(@Request() req){
      return await this.usersService.getAllUsers();
     // console.log(this.users);
     //   return this.users;
    }

    @Get(':id')
    getUserById(@Param('id') id: string): UserDTO {
        const user = this.users.find(user => user.id == id);

        return user;
    }

    @Post()
    @ApiCreatedResponse({ description: 'The record has been successfully created.'})
    async newUser(@Body() user: UserDTO): Promise<UserDTO> {
      const password= await encodePassword(user.password);
     // const User=await {...user,password};

      // user=(...user,password);
      return await this.usersService.newUser({...user,password});
  }

   /*  newUser(@Body() user: UserDTO): UserDTO {
        const newUser = {...user, id: ''+(this.users.length)}
        this.users = [...this.users, newUser];
        return newUser;
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() user: UserDTO): UserDTO {
        this.users = this.users.filter(user => user.id !== id);
        this.users = [...this.users, this.newUser(user)];
        return user;
    }*/

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        this.users = this.users.filter(user => user.id !== id);
    }

}
