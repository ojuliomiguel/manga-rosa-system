import { Conhecimento } from "src/conhecimentos/conhecimento.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
    validado: boolean;

    @ManyToMany(() => Conhecimento)
    @JoinTable()
    conhecimentos: Conhecimento[];
}
