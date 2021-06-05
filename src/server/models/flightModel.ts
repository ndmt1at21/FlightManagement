import { Entity, Column, BeforeInsert, BeforeUpdate, AfterLoad, PrimaryColumn, OneToMany, ManyToOne, JoinColumn, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import {Inter_airpot} from './Inter_airportModel'
@Entity()
export class Flight {
	@PrimaryColumn({generated: 'rowid'})
	id: number;

	@Column({ nullable: true })
	SBDi: string;

	@Column({nullable : true})
	SBDen: string;

	@Column({ nullable: true, })
	SLGheThuong: number;

	@Column({ nullable: true,})
	SLGheVip: number;
	
	@ManyToMany(() => Inter_airpot, {cascade : true})
	@JoinTable()
	Inter : Inter_airpot[];

	// // Hooks
	// @BeforeUpdate()
}
