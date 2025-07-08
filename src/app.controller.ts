import { Controller, Post, Body } from '@nestjs/common';
import { AppleLoginDto } from './apple.dto';

@Controller()
export class AppController {
  @Post('/apple-login')
  appleLogin(@Body() body: AppleLoginDto) {
    console.log('Received body:', body);
  }
}
