import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Provider, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
export const globalPipe: Provider = {
  provide: APP_PIPE,
  useValue: new ValidationPipe({
    whitelist: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
    enableDebugMessages: true,
  }),
};

@Module({
  imports: [],
  controllers: [AppController],
  providers: [globalPipe],
})
export class AppModule {}
