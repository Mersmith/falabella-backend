import { NotFoundException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TiendaService } from './tienda.service';
import { Tiendas } from "@prisma/client"

@Controller('tiendas')
export class TiendaController {

    constructor(
        private readonly tiendaService: TiendaService
    ) { }

    @Get()
    async traerTiendaTodas() {
        return this.tiendaService.traerTiendaTodas()
    }

    @Get(':id')
    async traerTiendaId(@Param('id') id: string) {
        const tienda = await this.tiendaService.traerTiendaId(Number(id))
        if (!tienda) {
            throw new NotFoundException('Tienda no existe.')
        }
        return tienda
    }

    @Post()
    async crearTienda(@Body() data: Tiendas) {
        return this.tiendaService.crearTienda(data)
    }

    @Put(':id')
    async editarTiendaId(@Param('id') id: string, @Body() data: Tiendas) {
        return this.tiendaService.editarTiendaId(Number(id), data)
    }

    @Delete(':id')
    async eliminarTiendaId(@Param('id') id: string) {
        try {
            return await this.tiendaService.eliminarTiendaId(Number(id))
        } catch (error) {
            throw new NotFoundException('Tienda no existe.')
        }
    }

}
