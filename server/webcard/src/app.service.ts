import { Injectable } from '@nestjs/common';
import * as pg from 'pg';

const { Pool } = pg;
const pool = new Pool({
  user: 'postgres',
  password: '7755',
  host: 'localhost',
  port: 5432,
  database: 'DbProject',
});

// pool
//   .query('insert into users (Name) values($1) returning Id', ['shrek'])
//   .then((res) => console.log(res.rows[0]))
//   .catch((err) => console.error('Error executing query', err.stack));

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
