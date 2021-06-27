import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { ConhecimentoModule } from './conhecimentos/conhecimentos.module';

@Module({
  imports: [
    ColaboradoresModule,
    ConhecimentoModule,
    TypeOrmModule.forRoot({autoLoadEntities: true,})
  ]
})
export class AppModule {}
