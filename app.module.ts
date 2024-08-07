import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {user} from './User';
import { Repository } from 'typeorm';



@Module({
  imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'REDAyoussef12',
        database: 'users',
        entities: [user],
        synchronize: true,
      }),
      TypeOrmModule.forFeature([user]), 
  ],
  controllers: [AppController],
  providers: [AppService],
})



export class AppModule {}
