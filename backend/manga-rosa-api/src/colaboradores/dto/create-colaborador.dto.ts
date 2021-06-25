import {ArrayMaxSize, ArrayMinSize, IsEmail, IsNotEmpty, IsOptional, Matches, MaxLength} from 'class-validator'
import { cpfRegex, telefoneRegex } from 'src/utils/regex.utils';

export class CreateColaboradorDto {
    @IsNotEmpty({message: 'O nome precisa ser fornecido'})
    nome: string
    
    @IsEmail({},{message: 'O email fornecido é inválido'})
    email: string;
    
    @Matches(cpfRegex, {message: 'O cpf informado está em formato inválido'})
    cpf: string;

    @IsOptional()
    @Matches(telefoneRegex , {message: 'Telefone inserido é inválido'})
    celular: string;

    @IsOptional()
    validado: boolean;

    @IsOptional()
    @ArrayMinSize(1 ,{message: 'Quantidade mínima de conhecimentos deve ser 1'})
    @ArrayMaxSize(3 ,{message: 'Quantidade máxima de conhecimentos é 3'})
    idsConhecimentos: Array<number>;
}
