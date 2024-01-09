import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
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


    @ManyToOne(() => Tasks, (task: Tasks) => task.users)
    tasks: Tasks
}