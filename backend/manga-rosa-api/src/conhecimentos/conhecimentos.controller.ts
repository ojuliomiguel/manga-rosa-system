import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConhecimentosService } from './conhecimentos.service';
import { CreateConhecimentoDto } from './dto/create-conhecimento.dto';

@Controller('conhecimentos')
export class ConhecimentosController {
  constructor(private readonly conhecimentosService: ConhecimentosService) {}

  @Post('registrar')
  create(@Body() createConhecimentoDto: CreateConhecimentoDto) {
    
    return this.conhecimentosService.create(createConhecimentoDto);
  }

  @Get('registros')
  findAll() {
    return this.conhecimentosService.findAll();
  }

}
