import { Controller, Get, Res, Req } from '@nestjs/common';
import { Response, Request } from 'express';

@Controller()
export class AppController {
  @Get('set')
  setCookie(@Res() res: Response) {
    res.cookie('myCookie', 'cookieValue', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });
  }

  @Get('get')
  getCookie(@Req() req: Request) {
    const cookieValue = req.cookies as string[];

    console.log(cookieValue);
  }
}
