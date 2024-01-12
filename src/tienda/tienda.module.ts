import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TiendaController } from './tienda.controller';
import { TiendaService } from './tienda.service';

@Module({
    controllers: [TiendaController],
    providers: [TiendaService],
    imports: [PrismaModule]
})
export class TiendaModule { }
