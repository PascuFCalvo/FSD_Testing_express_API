import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("films")
export class User extends BaseEntity {

   @PrimaryGeneratedColumn()
   id!:number
   @Column()
   name!:string
   @Column()
   email!:string
   @Column()
   passwordl!:string

}
