import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Conhecimento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;
}
