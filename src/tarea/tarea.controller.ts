import { BadRequestException, NotFoundException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { Tareas } from "@prisma/client"

@Controller('tareas')
export class TareaController {

    constructor(
        private readonly tareaService: TareaService
    ) { }


    @Get()
    async traerTareaTodas() {
        return this.tareaService.traerTareaTodas()
    }

    @Get(':id')
    async traerTareaId(@Param('id') id: string) {
        const tarea = await this.tareaService.traerTareaId(Number(id))
        if (!tarea) {
            throw new NotFoundException('Tarea no existe.')
        }
        return tarea
    }

    @Post()
    async crearTarea(@Body() data: Tareas) {
        return this.tareaService.crearTarea(data)
    }

    @Put(':id')
    async editarTareaId(@Param('id') id: string, @Body() data: Tareas) {
        return this.tareaService.editarTareaId(Number(id), data)
    }

    @Delete(':id')
    async eliminarTareaId(@Param('id') id: string) {
        try {
            return await this.tareaService.eliminarTareaId(Number(id))
        } catch (error) {
            throw new NotFoundException('Tarea no existe.')
        }
    }

}
