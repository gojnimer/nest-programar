import { Agenda, AgendaDocument } from './agenda.scheme';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AgendaService {
    constructor(@InjectModel(Agenda.name) private agendaModel: Model<AgendaDocument>) { }

    async create(agenda: any): Promise<Agenda> {
        const createdAgenda = new this.agendaModel(agenda);
        return createdAgenda.save();
    }
    
    async findAll(): Promise<Agenda[]> {
        return this.agendaModel.find().exec();
    }
}