import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from 'typeorm';

@Entity('tb_objetivo')
export default class Objetivo {

    @PrimaryGeneratedColumn()
    
    id : number; 

    @Column('text')
    descricao : string;

    @Column('int')
    pontos : number;

}