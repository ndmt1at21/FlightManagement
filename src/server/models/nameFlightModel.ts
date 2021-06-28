import { Entity, Column, PrimaryColumn } from 'typeorm';
@Entity()
export class NameFlight {
	@PrimaryColumn()
	id: string;

	@Column({ nullable: true })
	TenSanBay: string;
}
