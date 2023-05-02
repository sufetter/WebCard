import { Injectable } from '@nestjs/common';
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
export class UsersService {
  private readonly users = [{ name: 'giga', password: '1111', std: '' }];
  async findOne(name: string) {
    // const user = pool
    //   .query(`select * from users where name = $1`, [name])
    //   .then((res) => console.log(res.rows[0]))
    //   .catch((err) => console.error('Error executing query', err.stack));
    const user = this.users.find((user) => user.name === name);
    return user;
  }
}
