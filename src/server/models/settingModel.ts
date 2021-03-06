import { Entity, Column, PrimaryColumn } from 'typeorm';
@Entity()
export class Setting {
	@PrimaryColumn({ generated: 'rowid' })
	id: number;

	@Column({ nullable: true })
	tenthamso: string;

	@Column()
	kieu: string;

	@Column({ nullable: true })
	giatri: string;

	@Column({ nullable: true })
	tinhtrang: boolean;
}
