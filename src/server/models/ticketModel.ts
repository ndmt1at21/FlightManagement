import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FlightSchedule } from './flightScheduleModel';

@Entity()
export class Ticket {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	hangve: number;

	@Column()
	giatien: number;

	@Column({ nullable: true, default: false })
	status: boolean;

	@ManyToOne(() => FlightSchedule)
	fs: FlightSchedule;
}
