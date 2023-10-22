import {
   BaseEntity,
   Column,
   Entity,
   JoinTable,
   ManyToMany,
   PrimaryGeneratedColumn,
 } from "typeorm";
 
 import { Team } from "./Team";
 
 @Entity("Player")
 export class Player extends BaseEntity {
   @PrimaryGeneratedColumn()
   id!: number;
 
   @Column()
   position!: string;
 
   @Column()
   habilities!: string;
 
   @Column()
   status!: string;

   @ManyToMany(()=>Team)
   @JoinTable({name: "players-teams"})
   teams!: Team[]

 
   
 }
 