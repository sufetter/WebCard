import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { GetCurrenUserId } from './utils/getUserById.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  login(@GetCurrenUserId() req): any {
    return req;
  }
  // @Get('admin')
  // admin(): any {
  //   return 'admin';
  // }
}
