import { Entity, Column, BeforeInsert, BeforeUpdate, AfterLoad, PrimaryColumn, OneToMany, ManyToOne, JoinColumn, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Interairport {
	@PrimaryColumn({generated: 'rowid'})
	id: number;

	@Column({ nullable: true })
	TenSB: string;

	@Column({type : 'time'})
	ThoiGianDung: string;

	@Column({ nullable: true})
	Ghichu: string;


	// // Hooks
	// @BeforeUpdate()
}
