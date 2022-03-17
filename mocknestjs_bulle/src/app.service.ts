import { Injectable } from '@nestjs/common';
import { Req } from '@nestjs/common';
import {Request} from 'express';
import {HttpAdapterHost} from '@nestjs/core';

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

@Injectable()
export class Service_site {
  constructor(private adapterHost: HttpAdapterHost) {}
  // getHello(): string {
  //   return 'Hello World!';
  // }
  get_profile_info(user: string): profile_info{
    // let start:number = Request.query.lastIndexOf("/");
    let one: profile_info = new profile_info;
    // `${req.originalUrl}`
    one.username = "hello";
    one.is_valid = true;
    one.avatar = "bebechat.jpg";
    one.ladder = 42;
    one.status = "online";
    one.is_friend = true;
    one.is_blocked = false;
    one.matches = new last_matches(user);
    return one;
  }
//   is_valid(username: string): boolean{
// // throw new NotFoundException;
//     return true;
//   }
//   get_avatar(username: string): string{
//     return "bebechat.jpg";
//   }
//   get_ladder(username: string): number{
//     return 42;
//   }
//   get_status(username: string): string{
//     return "online";
//   }
//   is_friend(username: string, UUID: string): boolean{
//     return true;
//   }
//   is_blocked(username: string, UUID: string): boolean{
//     return true;
//   }
//   get_last_matches(username: string): last_matches{
//     return new last_matches(username);
//   }
}
