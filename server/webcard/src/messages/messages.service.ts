import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [{ name: 'Aboba', text: 'ya tut' }];

  create(createMessageDto: CreateMessageDto) {
    const message = { ...createMessageDto };
    return this.messages.push(message); // TODO improve
  }

  findAll() {
    return this.messages;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
