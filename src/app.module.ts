import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgendaModule } from './agenda/agenda.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AgendaModule,
    MongooseModule.forRoot('MONGODBCONNECTIONKEY')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
