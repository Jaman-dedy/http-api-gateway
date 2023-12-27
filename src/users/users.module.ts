import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { NatsClientModule } from 'src/nats-client/nats-client.mudule';

@Module({
  imports: [NatsClientModule],
  controllers: [UsersController],
  providers: [],
})
export class usersModule {}