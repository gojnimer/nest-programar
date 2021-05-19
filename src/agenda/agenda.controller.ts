import { AgendaService } from './agenda.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('agenda')
export class AgendaController {

    constructor(private agendaService:AgendaService){}

    @Get()
    getListarAgenda(){
        return this.agendaService.findAll();
    }

    @Post()
    postAdicionarAgenda(@Body() body:any){
        return this.agendaService.create(body);
    }

    /* @Post(':id')
    putModificarAgenda(@Param() params){
        return "Hello " + params.id;
    }


    @Delete(":id")
    deleteAgenda(@Param() params){
        return "Hello" + params.id;
    } */
}
