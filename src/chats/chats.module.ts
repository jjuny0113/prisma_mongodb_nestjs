import { Module } from '@nestjs/common';
import { ChatsGateway } from './chats.gateway';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ChatsGateway, PrismaService],
})
export class ChatsModule {}
