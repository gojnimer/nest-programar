import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AgendaDocument = Agenda & Document;

@Schema()
export class Agenda {
  @Prop()
  titulo: string;

  @Prop()
  mensagem: string;

}

export const AgendaSchema = SchemaFactory.createForClass(Agenda);