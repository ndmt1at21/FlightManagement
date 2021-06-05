import { Entity, Column, BeforeInsert, BeforeUpdate, AfterLoad, PrimaryColumn, OneToMany, ManyToOne, JoinColumn, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
@Entity()
export class System {
	@PrimaryColumn({generated: 'rowid'})
	id: number;

	@Column({ nullable: true })
	tenthamso: string;

	@Column()
	kieu: string;

	@Column({ nullable: true})
	giatri: string;

    @Column({ nullable: true})
	tinhtrang: boolean;

	// // Hooks
	// @BeforeUpdate()
}
