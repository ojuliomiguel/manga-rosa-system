import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConhecimentoDto } from './dto/create-conhecimento.dto';
import { Conhecimento } from './conhecimento.entity';

@Injectable()
export class ConhecimentosService {

  constructor(
    @InjectRepository(Conhecimento)
    private conhecimentossRepository: Repository<Conhecimento>
  ) {}

  async create(createConhecimentoDto: CreateConhecimentoDto) {
    const conhecimento = new Conhecimento();
  
    const {nome} = createConhecimentoDto;

    conhecimento.nome = nome;
    
    try {
      await this.conhecimentossRepository.save(conhecimento) 
      return {message: 'Conhecimento cadastrado'};  
    } catch (error) {
      throw new BadRequestException(error.sqlMessage) 
    }
  }

  async findAll() {
    const conhecimentos = await this.conhecimentossRepository.find({order: {nome: 'ASC'}})
    return conhecimentos;
  }

}
