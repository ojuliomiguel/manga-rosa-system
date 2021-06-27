import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Conhecimento } from 'src/conhecimentos/conhecimento.entity';
import { Repository } from 'typeorm';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';
import { Colaborador } from './entities/colaborador.entity';

@Injectable()
export class ColaboradoresService {

  constructor(
    @InjectRepository(Colaborador)
    private colaboradoresRepository: Repository<Colaborador>,
    @InjectRepository(Conhecimento)
    private conhecimentossRepository: Repository<Conhecimento>
  ) {}

  async create(createColaboradorDto: CreateColaboradorDto) {
    const colaborador = new Colaborador();
  
    const {nome, email, cpf, celular, validado, idsConhecimentos} = createColaboradorDto;

    const conhecimentos = await this.conhecimentossRepository.findByIds(idsConhecimentos)

    colaborador.nome = nome;
    colaborador.email = email;
    colaborador.cpf = cpf;
    colaborador.celular = celular;
    colaborador.validado = validado;
    colaborador.conhecimentos = conhecimentos;

    try {
      await this.colaboradoresRepository.save(colaborador) 
      return {message: 'Colaborador cadastrado'};  
    } catch (error) {
      if (error.sqlMessage.includes('Duplicate entry')) {
        throw new BadRequestException('Erro: CPF duplicado') 
      } else {
        throw new BadRequestException(error.sqlMessage) 
      }
      
    }
  }

  async findAll() {
    const colaboradores = await this.colaboradoresRepository.find({order: {nome: 'ASC'}})
    return colaboradores;
  }

  findOne(id: number) {
    return `This action returns a #${id} colaboradore`;
  }

  update(id: number, updateColaboradorDto: UpdateColaboradorDto) {
    return `This action updates a #${id} colaboradore`;
  }

  remove(id: number) {
    return `This action removes a #${id} colaboradore`;
  }
}
