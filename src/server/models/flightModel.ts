import {
	Entity,
	Column,
	ManyToMany,
	JoinTable,
	ManyToOne,
	PrimaryGeneratedColumn
} from 'typeorm';
import { Interairport } from './Inter_airportModel';
import { NameFlight } from './nameFlightModel';
@Entity()
export class Flight {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => NameFlight)
	SBDi: string;

	@ManyToOne(() => NameFlight)
	SBDen: string;

	@Column({ nullable: true })
	SLGheThuong: number;

	@Column({ nullable: true })
	SLGheVip: number;

	@ManyToMany(() => Interairport, { cascade: true })
	@JoinTable()
	Inter: Interairport[];
}
