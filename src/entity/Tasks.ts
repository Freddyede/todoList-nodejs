import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./User";
@Entity()
export class Tasks {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    
    @Column()
    description: string

    @OneToMany(() => User, (user: User) => user.tasks)
    users: User[]
}