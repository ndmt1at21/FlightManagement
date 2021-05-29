import { Entity, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import { trimString } from '@server/ultis/columnTransform';

@Entity()
export class User {
	@Column({ generated: 'uuid' })
	id: number;

	@Column({ nullable: false, transformer: trimString })
	name: string;

	@Column({ nullable: false, transformer: trimString })
	lastName: string;

	@Column({ nullable: false, transformer: trimString })
	email: string;

	// // Hooks
	// @BeforeInsert()
	// @BeforeUpdate()
}
