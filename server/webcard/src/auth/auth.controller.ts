import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { User } from 'src/users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('local/signin')
  signinLocal(@Body() dto: User) {
    return this.authService.signinLocal(dto);
  }

  @Post('local/register')
  registerLocal(@Body() dto: User) {
    return this.authService.registerlocal(dto);
  }
}
