import { Module } from '@nestjs/common';

import { ConhecimentosController } from './conhecimentos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conhecimento } from 'src/conhecimentos/conhecimento.entity';
import { ConhecimentosService } from './conhecimentos.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Conhecimento]),
    
  ],
  controllers: [ConhecimentosController],
  providers: [ConhecimentosService]
})
export class ConhecimentoModule {}
