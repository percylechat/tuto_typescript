import { Controller, Get, Req } from '@nestjs/common';
import { Service_site } from './app.service';
import {Request} from 'express';
import {HttpAdapterHost} from '@nestjs/core';

// @Controller('cats')
// export class CatsController {
//   @Get()
//   findAll(): string {
//     return 'This action returns all cats';
//   }
// }

class last_matches {
  first: string;
  second: string;
  third: string;
 
  constructor(username: string) {
    this.first = username + "won against Percy: 5 vs 4";
    this.second = username + "lost againt Claire: 2 vs 7";
    this.third = "";
  }
}

class profile_info{
  is_valid: boolean;
  username: string;
  avatar: string;
  status: string;
  ladder: number;
  is_friend: boolean;
  is_blocked: boolean;
  matches: last_matches;
}

@Controller('profile/*')
export class Controller_site {
  constructor(private readonly appService: Service_site) {}

  @Get()
  get_profile_info(@Req() request: Request): profile_info{
    let user: string = "${req.originalUrl}";
    return this.appService.get_profile_info(user);
  }


  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
