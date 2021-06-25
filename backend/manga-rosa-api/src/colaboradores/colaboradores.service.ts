import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';
import { Colaborador } from './entities/colaborador.entity';

@Injectable()
export class ColaboradoresService {

  constructor(
    @InjectRepository(Colaborador)
    private colaboradoresRepository: Repository<Colaborador>,
  ) {}

  async create(createColaboradorDto: CreateColaboradorDto) {
    const colaborador = new Colaborador();
    const {nome, email, cpf, celular, validado} = createColaboradorDto;

    colaborador.nome = nome;
    colaborador.email = email;
    colaborador.cpf = cpf;
    colaborador.celular = celular;
    colaborador.isValidado = validado;

    try {
      await this.colaboradoresRepository.save(colaborador) 
      return {message: 'Colaborador cadastrado'};  
    } catch (error) {
      throw new BadRequestException(error.sqlMessage) 
    }
  }

  findAll() {
    return `This action returns all colaboradores`;
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
