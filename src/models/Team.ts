import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { User } from "./User";

@Entity("Team")
export class Team extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  race!: string;

  @Column()
  userId!: number;

  @OneToOne(() => User, { cascade: true })
  @JoinColumn()
  user!: User;
}
