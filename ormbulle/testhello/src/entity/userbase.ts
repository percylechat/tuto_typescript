import {Entity, PrimaryGeneratedColumn, Column, Generated} from "typeorm";

@Entity()
export class userbase {

    @PrimaryGeneratedColumn()
    id: number;

    // @Column() 
    // @Generated("uuid")
    // uuid: string;

    @Column()
    username: string;

    @Column()
    is_online: boolean;

    @Column()
    is_in_game: boolean;

    @Column()
    password: string;

    @Column()
    avatar: string;
}
