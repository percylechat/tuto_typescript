import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
@Injectable()
export class AppService {
  getHello(): string {
    console.log("toto2");
    Logger.log("toto2");
    return 'Hello World!';
  }
}
