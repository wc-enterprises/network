import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  User,
  Contacts,
  Tags,
  UserRepository,
  ContactsRepository,
  TagsRepository,
} from './app.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User, Contacts, Tags])],
  controllers: [AppController],
  providers: [
    AppService,
    UserRepository,
    ContactsRepository,
    TagsRepository,
    DataSource,
  ],
  exports: [AppService],
})
export class AppModule {}
