import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './dto/auth.dto';
import * as pg from 'pg';

const { Pool } = pg;
const pool = new Pool({
  user: 'postgres',
  password: '3552',
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

  async signinLocal(userDto: AuthDto) {
    const user: User | '' = await pool
      .query(`select * from users where email = $1`, [userDto.email])
      .then((res) => {
        if (res.rows[0]) {
          if (res.rows[0].password === userDto.password) {
            return res.rows[0];
          } else return;
        } else return '';
      })
      .catch((err) => console.error('Error executing query', err.stack));
    if (user === '') throw new UnauthorizedException('User not found'); // TODO: write safety exeptions
    if (!user) throw new UnauthorizedException('Cridentials error');
    return this.signUser(user.id, user.email, 'user');
  }

  async registerlocal(userDto: AuthDto) {
    const user: User | '' = await pool
      .query(`select * from users where email = $1`, [userDto.email])
      .then((res) => {
        if (res.rows[0]) {
          if (res.rows[0].password === userDto.password) {
            return res.rows[0];
          } else return;
        } else return '';
      })
      .catch((err) => console.error('Error executing query', err.stack));
    if (user === '') throw new UnauthorizedException('User not found'); // TODO: write safety exeptions
    if (!user) throw new UnauthorizedException('Cridentials error');
    return this.signUser(user.id, user.email, 'user');
  }

  signUser(userId: number, email: string, type: string) {
    return this.jwtService.sign({
      sub: userId,
      email,
      claim: type,
    });
  }
}
