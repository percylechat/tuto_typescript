import { Module } from '@nestjs/common';
import { Controller_site } from './app.controller';
import { Service_site } from './app.service';

@Module({
  imports: [],
  controllers: [Controller_site],
  providers: [Service_site],
})
export class AppModule {}
