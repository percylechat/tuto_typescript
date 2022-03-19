import { Injectable } from '@nestjs/common';
import { Req } from '@nestjs/common';
import {Request} from 'express';
import {HttpAdapterHost} from '@nestjs/core';

class last_matches {
  first: string;
  second: string;
  third: string;
 
  constructor(username: string) {
    this.first = username + " won against Percy: 5 vs 4";
    this.second = username + " lost againt Claire: 2 vs 7";
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
  check_login(user: string): string{
    return "ISME";
  }

  check_join(user: string): string{
    return "ISME";
  }
  
  go_ladder(): Map<string, number>{
    let one: Map<string, number> = new Map<string, number>();
    one.set("hello", 1);
    one.set("bebe", 2);
    return one;
  }

  get_profile_info(user: string): profile_info{
    let one: profile_info = new profile_info;
    one.username = user;
    one.is_valid = true;
    one.avatar = "bebechat.jpg";
    one.ladder = 42;
    one.status = "online";
    one.is_friend = true;
    one.is_blocked = false;
    one.matches = new last_matches(one.username);
    return one;
  }
  add_as_friend(user:string, UUID: string): boolean{
    return true;
  }
  remove_as_friend(user:string, UUID: string): boolean{
    return true;
  }
  add_as_blocked(user:string, UUID: string): boolean{
    return true;
  }
  remove_as_blocked(user:string, UUID: string): boolean{
    return true;
  }
  send_dm(user:string, UUID: string): string{
    return "ping";
  }
}
