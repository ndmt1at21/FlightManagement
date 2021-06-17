import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from 'typeorm';
import { Interairport } from './Inter_airportModel';
@Entity()
export class NameFlight {
	@PrimaryColumn()
	id: string;

	@Column({ nullable: true })
	TenSanBay: string;
}
