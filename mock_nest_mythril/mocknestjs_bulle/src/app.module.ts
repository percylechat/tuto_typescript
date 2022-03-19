import { Module } from '@nestjs/common';
import { Controller_profile, Controller_add_friend } from './app.controller';
import { Service_site } from './app.service';

@Module({
  imports: [],
  controllers: [Controller_profile, Controller_add_friend],
  providers: [Service_site],
})
export class AppModule {}
