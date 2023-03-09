import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserEntity } from './users.entity';
import { UserMapper } from './users.mapper';
import { UsersRepository } from './users.repository';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {


  constructor(
    private usersRepository: UsersRepository,
    private mapper: UserMapper
    ){}

    async getAllUsers(): Promise<UserDTO[]> {
      const users: UserEntity[] = await this.usersRepository.getAllUsers()
      return users.map(user => this.mapper.entityToDto(user));
  }

  async getUserById(id: string): Promise<UserDTO> {
      const user: UserEntity = await this.usersRepository.getUserById(id);
      return this.mapper.entityToDto(user);
  }

  async newUser(userDTO: UserDTO): Promise<UserDTO> {
      const newUser: UserEntity = await this.usersRepository.newUser(userDTO);
      return this.mapper.entityToDto(newUser);
  }

  async updateUser(id: string, userDTO: UserDTO): Promise<UserDTO> {
      const updateUser = await this.usersRepository.updateUser(id, userDTO);
      return this.mapper.entityToDto(updateUser);
  }

  async deleteUser(id: string): Promise<void> {
      await this.usersRepository.deleteUser(id);
  }

  async findOne(id: string): Promise<UserDTO> {
    const user: UserEntity = await this.usersRepository.getUserById(id);
    return this.mapper.entityToDto(user);
}

 /*  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne2(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  } */
}
