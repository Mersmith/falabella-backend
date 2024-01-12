import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Tiendas } from "@prisma/client"

@Injectable()
export class TiendaService {

    constructor(
        private prisma: PrismaService
    ) { }

    async traerTiendaTodas(): Promise<Tiendas[]> {
        return this.prisma.tiendas.findMany();
    }

    async traerTiendaId(id: number): Promise<Tiendas> {
        return this.prisma.tiendas.findUnique({
            where: {
                id
            }
        });
    }

    async crearTienda(data: Tiendas): Promise<Tiendas> {
        return this.prisma.tiendas.create({
            data
        });
    }

    async editarTiendaId(id: number, data: Tiendas): Promise<Tiendas> {
        return this.prisma.tiendas.update({
            where: {
                id
            },
            data
        });
    }

    async eliminarTiendaId(id: number): Promise<Tiendas> {
        return this.prisma.tiendas.delete({
            where: {
                id
            }
        });
    }

}
