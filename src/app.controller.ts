import { Controller, Post, Body } from '@nestjs/common';
import { AppleLoginDto } from './apple.dto';
import { jwtDecode } from 'jwt-decode';

@Controller()
export class AppController {
  @Post('/apple-login')
  async appleLogin(@Body() body: AppleLoginDto) {
    const { code, id_token } = body;
    const decodedHeaders = jwtDecode(id_token, { header: true });
    const decodedToken = jwtDecode(id_token);

    console.log('code:', code);
    console.log('decodedToken:', decodedToken);
    console.log('decodedHeaders:', decodedHeaders);

    const publicKeys = await getApplePublicKey();
    console.log(publicKeys);

    return {
      message: 'Apple login successful',
    };
  }
}

async function getApplePublicKey() {
  const response = await fetch('https://appleid.apple.com/auth/keys', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unnecessary-type-assertion
  const data = (await response.json()) as any;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return data.keys as string[];
}
