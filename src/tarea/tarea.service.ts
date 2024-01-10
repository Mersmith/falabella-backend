import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Tareas } from "@prisma/client"

@Injectable()
export class TareaService {

    constructor(
        private prisma: PrismaService
    ) { }

    async traerTareaTodas(): Promise<Tareas[]> {
        return this.prisma.tareas.findMany();
    }

    async traerTareaId(id: number): Promise<Tareas> {
        return this.prisma.tareas.findUnique({
            where: {
                id
            }
        });
    }

    async crearTarea(data: Tareas): Promise<Tareas> {
        return this.prisma.tareas.create({
            data
        });
    }

    async editarTareaId(id: number, data: Tareas): Promise<Tareas> {
        return this.prisma.tareas.update({
            where: {
                id
            },
            data
        });
    }

    async eliminarTareaId(id: number): Promise<Tareas> {
        return this.prisma.tareas.delete({
            where: {
                id
            }
        });
    }

}
