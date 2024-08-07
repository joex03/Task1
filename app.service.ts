import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user } from './User';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(user)
    public readonly userRepository: Repository<user>,
  ) {}

  async createUser(name: string, age: number): Promise<string> {
    const newUser = this.userRepository.create({ name, age });
    await this.userRepository.save(newUser);
    return 'User info is saved in the DB';
  }

  async getAllUsers(): Promise<user[]> {
    return this.userRepository.find();
  }
}