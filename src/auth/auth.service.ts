import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
 console.log('test');
    const user = await this.usersService.findOne(username);
    const matched= await comparePasswords(pass,user.password);
    console.log(user.password,matched,pass)
    if (user && matched) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {

    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
