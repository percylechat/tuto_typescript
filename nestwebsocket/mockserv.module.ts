import { Module } from '@nestjs/common';
import { ChatGateway } from './mockserv.gateway';
@Module({
  providers: [ChatGateway],
})
export class ChatGateway {}