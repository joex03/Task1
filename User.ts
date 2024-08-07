import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class user {
@PrimaryGeneratedColumn()

        Id: number;

    @Column({ type: 'int', nullable: false, default: 20 })
          age: number;

@Column({ name:'unsername',nullable: false,})
name: string;

}