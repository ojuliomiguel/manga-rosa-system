import {IsNotEmpty} from 'class-validator'

export class CreateConhecimentoDto {
    @IsNotEmpty({message: 'O nome precisa ser fornecido'})
    nome: string
}
