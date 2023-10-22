import {
   BaseEntity,
   Column,
   Entity,
   
   JoinTable,
   
   OneToOne,
   
   PrimaryColumn,
   
 } from "typeorm";
import { Player } from "./Player";
import { Team } from "./Team";
 
 
 @Entity("PlayerTeam")
 export class PlayerTeam extends BaseEntity {
   
   @Column()
   id_team!: number;
 
   @Column()
   player_description!: string;
 
   @PrimaryColumn({ type: "int" })
  team_id!: number;

   @PrimaryColumn({ type: "int" })
  player_id!: number;

   @OneToOne(()=> Player)
   @JoinTable()
   player!:Player;

   @OneToOne(()=> Team)
   @JoinTable()
   team!:Team;


 
   
 }
 