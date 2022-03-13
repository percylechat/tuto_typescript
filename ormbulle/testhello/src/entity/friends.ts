import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {userbase} from "./userbase";

@Entity()
export class friends {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => userbase) @JoinColumn() 
    someone: userbase;

    @OneToOne(type => userbase) @JoinColumn() 
    is_friend_with: userbase;
}