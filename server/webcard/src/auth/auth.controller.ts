import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('local/signin')
  signinLocal(@Body() dto: AuthDto) {
    return this.authService.signinLocal(dto);
  }

  @Post('local/register')
  registerLocal(@Body() dto: AuthDto) {
    return this.authService.registerlocal(dto);
  }
}
