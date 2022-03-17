import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// nique sa mere on a besoin de cette merde
//import { WsAdapter } from '@nestjs/platform-ws';
//import { IoAdapter } from '@nestjs/websockets';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:false});
  // nique sa mere on a besoin
  //app.useWebSocketAdapter(new WsAdapter(app)) 
  //app.useWebSocketAdapter(new IoAdapter());
  await app.listen(3000);
}
bootstrap();
