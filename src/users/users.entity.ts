import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly userId: string;

  @Column({
    unique: true,
  })
  readonly name: string;

  @Column({
    unique: true,
  })
  readonly password: string;

  constructor(userId: string, name: string, password:string) {
    this.userId = userId;
    this.name = name;
    this.password = password;
    console.log('Creo User Entity para ' + this.name);
  }
}
