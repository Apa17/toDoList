import { Column, Entity, PrimaryGeneratedColumn, TableForeignKey } from "typeorm";

@Entity()
export class Item{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    iconid: number;
    
    @Column()
    folderid: number;

    @Column()
    userid: number;
}