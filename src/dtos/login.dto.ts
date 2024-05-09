import { Column, Entity } from "typeorm";

@Entity()
export class LoginUserDto{
    @Column()
    email:string;

    @Column()
    password:string;
}