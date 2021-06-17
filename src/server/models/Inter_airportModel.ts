import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { NameFlight } from './nameFlightModel';
@Entity()
export class Interairport {
	@PrimaryColumn({ generated: 'rowid' })
	id: number;

	@ManyToOne(() => NameFlight)
	TenSB: string;

	@Column({ type: 'time' })
	ThoiGianDung: string;

	@Column({ nullable: true })
	Ghichu: string;

	// // Hooks
	// @BeforeUpdate()
}
