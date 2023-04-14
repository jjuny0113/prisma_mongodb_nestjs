import { Injectable, Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { PrismaService } from 'src/prisma/prisma.service';

@WebSocketGateway({ namespace: 'chattings' })
export class ChatsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger = new Logger('chat');

  constructor(private prisma: PrismaService) {
    this.logger.log('constructor');
  }

  // constructor가 만들어지고 실행
  afterInit() {
    this.logger.log('init');
  }

  // client와 연결되자마자 실행
  handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.log(`connected: ${socket.id} ${socket.nsp.name}`);
  }

  async handleDisconnect(@ConnectedSocket() socket: Socket) {
    const user = await this.prisma.socket.findFirst({
      where: {
        socketId: socket.id,
      },
    });
    if (user) {
      socket.broadcast.emit('disconnet_user', user.username);
      await this.prisma.socket.delete({
        where: {
          id: user.id,
        },
      });
    }
    this.logger.log(`disconnected : ${socket.id} ${socket.nsp.name}`);
  }

  @SubscribeMessage('new_user')
  async handleNewUser(
    @MessageBody() username: string,
    @ConnectedSocket() socket: Socket,
  ): Promise<string> {
    //username db에 적재
    const exist = await this.prisma.socket.findFirst({
      where: {
        username,
      },
    });
    if (exist) {
      username = `${username}_${Math.floor(Math.random() * 100)}`;
      await this.prisma.socket.create({
        data: {
          socketId: socket.id,
          username,
        },
      });
    } else {
      await this.prisma.socket.create({
        data: {
          socketId: socket.id,
          username,
        },
      });
    }
    socket.broadcast.emit('user_connected', username);
    return username;
  }

  @SubscribeMessage('submit_chat')
  async handleSubmitChat(
    @MessageBody() chat: string,
    @ConnectedSocket() socket: Socket,
  ) {
    const socketObj = await this.prisma.socket.findFirst({
      where: {
        socketId: socket.id,
      },
    });

    await this.prisma.chatting.create({
      data: {
        user: {
          create: {
            socketId: socketObj.socketId,
            username: socketObj.username,
          },
        },
        chat,
      },
    });
    socket.broadcast.emit('new_chat', {
      chat,
      username: socket.id,
    });
  }
}
