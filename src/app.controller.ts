import { Controller, Post, Body } from '@nestjs/common';

@Controller()
export class AppController {
  @Post('/apple-login')
  appleLogin(@Body() body: { code: string; id_token: string }) {
    console.log('Received body:', body);
  }
}
