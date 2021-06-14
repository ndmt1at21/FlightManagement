import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Flight } from './flightModel';
@Entity()
export class FlightSchedule {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true, type: 'date' })
	KhoiHanh: string;

	@Column({ nullable: true, type: 'time' })
	ThoiGian: string;

	@Column({ nullable: true, type: 'time' })
	ThoiGianBay: string;

	@Column({ default: 0 })
	SoGheDatThuong: number;

	@Column({ default: 0 })
	SoGheDatVip: number;

	@ManyToOne(() => Flight)
	forCB: number;
	/**
	 * TongSoGheDat
	 */
	public TongSoGheDat() {
		return this.SoGheDatThuong + this.SoGheDatVip;
	}
	// // Hooks
	// @BeforeInsert()
	// @BeforeUpdate()
}
