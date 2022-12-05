import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Users, Contacts, Tags, Relations } from './app.entity';
import { AppService } from './app.service';
import { environment } from '../environments/environment';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: environment.type,
      host: environment.host,
      port: environment.port,
      username: environment.username,
      password: environment.password,
      database: environment.database,
      entities: [Users, Contacts, Tags],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Users, Contacts, Tags, Relations]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
