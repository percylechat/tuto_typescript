import {Entity, PrimaryGeneratedColumn, Column, Index, Unique, Generated} from "typeorm";

@Entity()
export class userbase {

    @PrimaryGeneratedColumn()
    id: number;

    // @Column() 
    // @Generated("uuid")
    // uuid: string;

    // @Column()
    // username: string;

    // @Index({ unique: true })
    @Column({ unique: true })
    // @Unique('Dublicate username', ['username'])
    username: string;

    @Column()
    is_online: boolean;

    @Column()
    is_in_game: boolean;

    @Column()
    password: string;

    @Column({ default: "bebechat.jpg" })
    avatar: string;
}
