import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";

@Entity("Users")
export class User extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  isActive!: boolean;

  @Column()
  role!: string;

  @Column()
  created_at!: Timestamp;

  @Column()
  updated_at!: Timestamp;

}
