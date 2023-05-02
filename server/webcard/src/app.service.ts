import { Injectable } from '@nestjs/common';
import * as pg from 'pg';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
