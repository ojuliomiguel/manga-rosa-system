import {IsEmail, IsNotEmpty, IsOptional, Matches} from 'class-validator'

export class CreateColaboradorDto {
    @IsNotEmpty({message: 'O nome precisa ser fornecido'})
    nome: string
    
    @IsEmail({},{message: 'O email fornecido é inválido'})
    email: string;
    
    @Matches(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/, {message: 'O cpf informado está em formato inválido'})
    cpf: string;

    @IsOptional()
    @Matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, {message: 'Telefone inserido é inválido'})
    celular: string;

    @IsOptional()
    validado: boolean;
}
