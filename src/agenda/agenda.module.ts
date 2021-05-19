import { Agenda, AgendaSchema } from './agenda.scheme';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgendaController } from './agenda.controller';
import { AgendaService } from './agenda.service';

@Module({
  controllers: [AgendaController],
  imports:[MongooseModule.forFeature([{ name: Agenda.name, schema: AgendaSchema }])],
  providers: [AgendaService]
})
export class AgendaModule {}
