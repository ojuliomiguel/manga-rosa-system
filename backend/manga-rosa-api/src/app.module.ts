import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';

@Module({
  imports: [
    ColaboradoresModule,
    TypeOrmModule.forRoot({autoLoadEntities: true,})
  ]
})
export class AppModule {}
