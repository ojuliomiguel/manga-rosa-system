import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Colaborador {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;


    @Column({unique: true})
    cpf: string;

    @Column()
    celular: string;

    @Column({default: false})
    isValidado: boolean;
}
