import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './dto/auth.dto';
import * as pg from 'pg';

const { Pool } = pg;
const pool = new Pool({
  user: 'postgres',
  password: '7755',
  host: 'localhost',
  port: 5432,
  database: 'DbProject',
});

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  // async validateUser(name: string, password: string): Promise<any> {
  //   const user: User | any = await this.usersService.findOne(name);
  //   if (user && user.password === password) {
  //     const { password, username, ...rest } = user;
  //     return rest;
  //   }
  //   return user;
  // }

  async signinLocal(userDto: User) {
    // const user: User | any = await pool
    //   .query(`select * from userExists($1, $2)`, [
    //     userDto.email,
    //     userDto.password,
    //   ])
    //   .then((res) => {
    //     return res.rows[0];
    //   })
    //   .catch((err) => console.error('Error executing query', err.stack));

    // throw new UnauthorizedException('User not found');
    const user: User | any = await pool
      .query(
        `select EXISTS (
         SELECT *
         FROM users
         WHERE email = $1
         AND password = $2
         )`,
        [userDto.email, userDto.password],
      )
      .then((res) => {
        return res.rows[0];
      })
      .catch((err) => console.error('Error executing query', err.stack));
    if (user.userexists == false) return user;
    return this.signUser(userDto.id, userDto.email, 'user');
  }

  async registerlocal(userDto: User) {
    const user: User | '' = await pool
      .query(
        `call addUser($1,  $2, $3)
`,
        [userDto.name, userDto.email, userDto.password],
      )
      .then((res) => {
        return res.rows[0];
      })
      .catch((err) => console.error('Error executing query', err.stack));
    // if (user === '') throw new UnauthorizedException('User not found'); // TODO: write safety exeptions
    if (!user) throw new UnauthorizedException('Check Db, somthing went wrong');
    return this.signUser(userDto.id, userDto.email, 'user');
  }

  signUser(userId: number, email: string, type: string) {
    return this.jwtService.sign({
      sub: userId,
      email,
      claim: type,
    });
  }
}
