import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ChatsGateway } from './chats/chats.gateway';
import { ChatsModule } from './chats/chats.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ChatsModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [],
  //
})
export class AppModule {}
