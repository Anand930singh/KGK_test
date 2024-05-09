import { BeforeInsert, Column, Unique } from "typeorm";
import bcrypt from "bcryptjs";
const { Entity, PrimaryGeneratedColumn } = require("typeorm");

@Entity()
@Unique(['email'])
export class User{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    user:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @BeforeInsert()
    async hashPassword(): Promise<void> {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
    
}