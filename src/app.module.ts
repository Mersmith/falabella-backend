import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareaModule } from './tarea/tarea.module';
import { TiendaModule } from './tienda/tienda.module';

@Module({
  imports: [TareaModule, TiendaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
