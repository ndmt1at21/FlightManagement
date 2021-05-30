import { Entity, Column, BeforeInsert, BeforeUpdate, AfterLoad, PrimaryColumn, OneToMany, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { trimString } from '../ultis/columnTransform';
import {FlightSchedule} from './flightScheduleModel';
import shortid from 'unique-string'
import uniqueString from 'unique-string';
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
	
	// // Hooks
	// @BeforeUpdate()
}
