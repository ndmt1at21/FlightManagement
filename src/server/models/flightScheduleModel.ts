import { Entity, Column, BeforeInsert, BeforeUpdate, AfterLoad, PrimaryColumn, OneToMany, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { trimString } from '../ultis/columnTransform';
import {Flight} from './flightModel'
@Entity()
export class FlightSchedule {
	@PrimaryColumn()
	@OneToOne(() => Flight)
	idChuyenBay: number;

	@Column({ nullable: true, type: 'date' })
	KhoiHanh: string;

	@Column({nullable : true, type: 'time'})
	ThoiGian: string;
	

	// // Hooks
	// @BeforeInsert()
	// @BeforeUpdate()
}
