import { IsString } from 'class-validator';

export class AppleLoginDto {
  @IsString()
  code: string;

  @IsString()
  id_token: string;
}
