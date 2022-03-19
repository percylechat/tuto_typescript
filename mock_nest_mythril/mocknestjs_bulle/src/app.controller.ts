import { Controller, Get, Post, Req, Param } from '@nestjs/common';
import { Service_site } from './app.service';
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

/////PAGE DM
/////PAGE D'UN DM
/////PAGE CHAT
/////PAGE DES CHATS
/////PAGE DES JEUX


/////PAGE LOGIN
// can throw error also
@Controller('login')
export class Controller_login {
  constructor(private readonly appService: Service_site) {}

  @Post()
  check_login(@Param() params): string{
    // let user: string = "${req.originalUrl}";
    let user:string = params.user;
    return this.appService.check_login(user);
  }
}

/////PAGE JOIN
// can throw error also
@Controller('login')
export class Controller_join {
  constructor(private readonly appService: Service_site) {}

  @Post()
  check_join(@Param() params): string{
    // let user: string = "${req.originalUrl}";
    let user:string = params.user;
    return this.appService.check_join(user);
  }
}

/////PAGE LADDER
@Controller('ladder')
export class Controller_ladder {
  constructor(private readonly appService: Service_site) {}

  @Get()
  go_ladder(): Map<string, number>{
    return this.appService.go_ladder();
  }
}

/////PAGE PROFILE
@Controller('profile')
export class Controller_profile {
  constructor(private readonly appService: Service_site) {}

  @Get(':user')
  get_profile_info(@Param() params): profile_info{
    // let user: string = "${req.originalUrl}";
    let user:string = params.user;
    return this.appService.get_profile_info(user);
  }
}

@Controller('send_dm')
export class Controller_send_dm {
  constructor(private readonly appService: Service_site) {}

  @Get(':user')
  send_dm(@Param() params, @Req() request: Request): string{
    let user: string = params.user;
    let UUID: string = "ISME";
    console.log("you added " + user + "as friend");
    return this.appService.send_dm(user, UUID);
  }
}

@Controller('add_friend')
export class Controller_add_friend {
  constructor(private readonly appService: Service_site) {}

  @Get(':user')
  add_as_friend(@Param() params, @Req() request: Request): boolean{
    let user: string = params.user;
    let UUID: string = "ISME";
    console.log("you added " + user + "as friend");
    return this.appService.add_as_friend(user, UUID);
  }
}

@Controller('add_blocked')
export class Controller_add_blocked {
  constructor(private readonly appService: Service_site) {}

  @Get()
  add_as_blocked(@Req() request: Request): boolean{
    let user: string = "${req.originalUrl}";
    let UUID: string = "ISME";
    return this.appService.add_as_blocked(user, UUID);
  }
}

@Controller('remove_friend')
export class Controller_remove_friend {
  constructor(private readonly appService: Service_site) {}

  @Get()
  remove_as_friend(@Req() request: Request): boolean{
    let user: string = "${req.originalUrl}";
    let UUID: string = "ISME";
    return this.appService.remove_as_friend(user, UUID);
  }
}

@Controller('remove_blocked')
export class Controller_remove_blocked {
  constructor(private readonly appService: Service_site) {}

  @Get()
  remove_as_blocked(@Req() request: Request): boolean{
    let user: string = "${req.originalUrl}";
    let UUID: string = "ISME";
    return this.appService.remove_as_blocked(user, UUID);
  }
}
