import {
	Entity,
	Column,
	PrimaryColumn,
	ManyToMany,
	JoinTable,
	BeforeInsert
} from 'typeorm';
import { Interairport } from './Inter_airportModel';
@Entity()
export class Flight {
	@PrimaryColumn()
	id: number;

	@Column({ nullable: true })
	SBDi: string;

	@Column({ nullable: true })
	SBDen: string;

	@Column({ nullable: true })
	SLGheThuong: number;

	@Column({ nullable: true })
	SLGheVip: number;

	@ManyToMany(() => Interairport, { cascade: true })
	@JoinTable()
	Inter: Interairport[];

	// // Hooks
}
