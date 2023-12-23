import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('Games', 'GetUsersOfGame')
  async getUsersOfGame(
    data: { gameID: string },
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ) {
    return await this.appService.getUsersOfGame(data.gameID);
  }
}
