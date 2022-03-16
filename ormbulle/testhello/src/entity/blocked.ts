import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {userbase} from "./userbase";

@Entity()
export class blocked {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => userbase) @JoinColumn() 
    someone: userbase;

    @OneToOne(type => userbase) @JoinColumn() 
    blocked: userbase;
}