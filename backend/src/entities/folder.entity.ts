import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Folder{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    folderid: number;

    @Column()
    userid: number;
}