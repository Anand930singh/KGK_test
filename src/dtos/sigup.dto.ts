import { Column, Entity } from "typeorm";

@Entity()
export class UserRegistrationDto{
    @Column()
    user:string;

    @Column()
    email:string;

    @Column()
    password:string;
}