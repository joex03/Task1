import { Controller, Get , Post,Query,Body,Req,Res} from '@nestjs/common';
import { AppService } from './app.service';
import { user } from './User';
import { Repository } from 'typeorm';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  sendinfo(@Body('id') id:number,@Body('age') age:number,@Body('name') name:string): Promise<string> {
    return this.appService.createUser(name,age);
  }

  @Get()
  async getUsers(): Promise<user[]> {
    return this.appService.getAllUsers();

}
}
