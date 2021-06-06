import { Entity, Column, BeforeInsert, BeforeUpdate, AfterLoad, PrimaryColumn, OneToMany, ManyToOne, JoinColumn, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import {Interairport} from './Inter_airportModel'
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
	
	@ManyToMany(() => Interairport, {cascade : true})
	@JoinTable()
	Inter : Interairport[];

	// // Hooks
	// @BeforeUpdate()
}
