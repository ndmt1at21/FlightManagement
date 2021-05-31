import { Entity, Column, BeforeInsert, BeforeUpdate, AfterLoad, PrimaryColumn, OneToMany, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flight {
	@PrimaryColumn({generated: 'rowid'})
	id: number;

	@Column({ nullable: true })
	SBDi: string;

	@Column({nullable : true})
	SBDen: string;

	@Column({ nullable: true, })
	SLGheThuong: number;

	@Column({ nullable: true,})
	SLGheVip: number;
	
	// // Hooks
	// @BeforeUpdate()
}
