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
	
	@Column({nullable : true, type: 'time'})
	ThoiGianBay: string;

	@Column({default : 0})
	SoGheDatThuong: number;

	@Column({default : 0})
	SoGheDatVip: number;

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
