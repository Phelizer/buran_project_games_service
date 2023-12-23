import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('Games', 'GetUsersOfGame')
  getUsersOfGame() {
    return this.appService.getHello();
  }
}
