import {Entity, PrimaryGeneratedColumn, Column, Generated, Unique} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated("uuid")
    uuid: string;

    @Column({unique : true})
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
