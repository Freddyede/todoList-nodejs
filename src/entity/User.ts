import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Tasks } from "./Tasks";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    password: string

    @OneToMany(() => Tasks, (task: Tasks) => task.user)
    tasks: Tasks[]

}