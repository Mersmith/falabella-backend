import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TareaController } from './tarea.controller';
import { TareaService } from './tarea.service';

@Module({
    controllers: [TareaController],
    providers: [TareaService],
    imports: [PrismaModule]
})
export class TareaModule { }
