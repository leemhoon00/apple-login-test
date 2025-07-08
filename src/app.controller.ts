import { Controller, Post, Body } from '@nestjs/common';
import { AppleLoginDto } from './apple.dto';
import { jwtDecode } from 'jwt-decode';

@Controller()
export class AppController {
  @Post('/apple-login')
  appleLogin(@Body() body: AppleLoginDto) {
    const { code, id_token } = body;
    const decodedToken = jwtDecode(id_token);

    console.log('code:', code);

    console.log('decodedToken:', decodedToken);
  }
}
