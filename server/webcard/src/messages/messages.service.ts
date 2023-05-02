import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { MessageBody } from '@nestjs/websockets';

@Injectable()
export class MessagesService {
  messages: Message[] = [{ name: 'Aboba', text: 'ya tut' }];
  clientToUser = {};

  create(createMessageDto: CreateMessageDto) {
    const message = { ...createMessageDto };
    this.messages.push(message);
    return message; // TODO improve
  }

  findAll() {
    return this.messages;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }

  indentify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;
    return Object.values(this.clientToUser);
  }
  getClientName(clientId: string) {
    return this.clientToUser[clientId];
  }
}
