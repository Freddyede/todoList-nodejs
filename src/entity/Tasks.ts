import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./User";

@Entity()
export class Tasks {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    
    @Column()
    description: string
    
    @ManyToOne(() => User, (user) => user.task)
    user: User

}